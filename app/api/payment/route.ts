// app/api/payment/route.ts

import { NextResponse } from 'next/server';
import { connectDB } from '@/app/lib/db';
import { Payment, IPayment } from '@/app/models/Payment';
import { Order } from '@/app/models/Order';
import mongoose from 'mongoose';

export async function POST(req: Request) {
  await connectDB();

  try {
    const body = await req.json();
    const { orderId, amount, paymentMethod, transactionId } = body; 
    
    if (!orderId || !amount || !paymentMethod || !transactionId) {
      return NextResponse.json({ message: "Missing required payment details" }, { status: 400 });
    }

    const order = await Order.findById(orderId);
    if (!order) {
      return NextResponse.json({ message: "Order not found" }, { status: 404 });
    }

    if (order.orderStatus !== 'approved') {
        return NextResponse.json({ 
            message: `Payment can only be made for approved orders. Current status: ${order.orderStatus}` 
        }, { status: 403 });
    }

    if (amount > order.packageHarga - order.totalPaid) {
        return NextResponse.json({ 
            message: "Payment amount exceeds remaining balance." 
        }, { status: 400 });
    }

    const paymentData: Partial<IPayment> = {
      order: new mongoose.Types.ObjectId(orderId),
      amount: amount,
      paymentMethod: paymentMethod,
      transactionId: transactionId,
      paymentStatus: 'pending', 
    };

    const newPayment = await Payment.create(paymentData);
    
    return NextResponse.json({ 
        message: "Payment request submitted successfully, waiting for confirmation.", 
        payment: newPayment 
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating payment:', error);
    return NextResponse.json({ message: "Failed to submit payment request", error }, { status: 500 });
  }
}

export async function GET() {
    await connectDB();
    try {
        const pendingPayments = await Payment.find({ paymentStatus: 'pending' })
            .populate('order', 'user packageName packageHarga orderStatus') 
            .sort({ createdAt: 1 }); 
        
        return NextResponse.json(pendingPayments, { status: 200 });
    } catch (error) {
        console.error('Error fetching pending payments:', error);
        return NextResponse.json({ message: "Failed to fetch pending payments", error }, { status: 500 });
    }
}