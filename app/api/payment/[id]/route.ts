// app/api/payment/[id]/route.ts

import { NextResponse } from 'next/server';
import { connectDB } from '@/app/lib/db';
import { Payment } from '@/app/models/Payment';
import { Order, IOrder } from '@/app/models/Order';
import mongoose from 'mongoose';

type ParamsPromise = Promise<{ id: string }>;


/**
 * GET → Ambil detail Payment by ID (Beserta Detail Order dan User)
 */
export async function GET(
    req: Request,
    { params }: { params: ParamsPromise } 
) {
    try {
        const { id } = await params; 
        await connectDB();

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({ message: "ID Payment tidak valid" }, { status: 400 });
        }

        const payment = await Payment.findById(id)
            .populate({
                path: 'order', 
                model: Order,
                populate: { 
                    path: 'user package', 
                    select: 'name email kecepatan_mbps harga' 
                }
            });
        
        if (!payment) {
            return NextResponse.json({ message: "Payment tidak ditemukan" }, { status: 404 });
        }
        
        return NextResponse.json(payment, { status: 200 });
    } catch (error) {
        console.error('Error fetching payment:', error);
        return NextResponse.json({ message: "Gagal mengambil detail payment", error }, { status: 500 });
    }
}


/**
 * PATCH → UPDATE PAYMENT STATUS (Oleh Admin Keuangan)
 */
export async function PATCH(
    req: Request, 
    { params }: { params: ParamsPromise } 
) {
    try {
        const { id } = await params; 
        await connectDB();
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({ message: "ID Payment tidak valid" }, { status: 400 });
        }
        
        const { paymentStatus, adminId } = await req.json();

        const validStatuses = ['paid', 'failed'];
        if (!validStatuses.includes(paymentStatus)) {
            return NextResponse.json({ message: "Status pembayaran tidak valid" }, { status: 400 });
        }

        const updatedPayment = await Payment.findByIdAndUpdate(
            id,
            {
                paymentStatus: paymentStatus,
                paymentApprovalBy: new mongoose.Types.ObjectId(adminId), 
                paymentApprovalDate: new Date(),
            },
            { new: true, runValidators: true }
        ).populate('order'); 

        if (!updatedPayment) {
            return NextResponse.json({ message: "Payment tidak ditemukan" }, { status: 404 });
        }

        if (updatedPayment.order instanceof mongoose.Types.ObjectId) {
             return NextResponse.json({ message: "Error Internal: Order data missing after update" }, { status: 500 });
        }

        const order = updatedPayment.order as IOrder;

        if (paymentStatus === 'paid') {
            order.totalPaid += updatedPayment.amount;
            if (order.totalPaid >= order.packageHarga) {
                order.orderStatus = 'active';
            }
            
            await order.save();
        } 
        
        return NextResponse.json({ 
            message: `Pembayaran dikonfirmasi sebagai ${paymentStatus}. Status order diperbarui.`, 
            payment: updatedPayment 
        }, { status: 200 });

    } catch (error) {
        console.error('Error updating payment:', error);
        return NextResponse.json({ message: "Gagal update status payment", error }, { status: 500 });
    }
}