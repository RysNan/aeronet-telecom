// app/api/order/route.ts

import { NextResponse } from 'next/server';
import { connectDB } from '@/app/lib/db'; 
import { Order, IOrder } from '@/app/models/Order';
import { Package } from '@/app/models/Package';
import { User } from '@/app/models/User';
import mongoose from 'mongoose';

// Pastikan untuk menyesuaikan dengan fungsi autentikasi Anda
const getUserIdFromAuth = (req: Request): mongoose.Types.ObjectId | null => {
  // LOGIC: Ambil ID user dari session, token, atau header (misalnya dari NextAuth)
  // Untuk contoh ini, kita hardcode atau ambil dari query/body (TIDAK AMAN untuk produksi!)
  // Asumsi: Kita akan mengambil user ID dari request body untuk contoh POST
  return null; 
};


// --- POST: CREATE NEW ORDER (Pelanggan Membuat Pesanan Baru) ---
export async function POST(req: Request) {
  await connectDB();

  try {
    const body = await req.json();
    const { packageId, userId } = body; 

    if (!packageId || !userId) {
      return NextResponse.json({ message: "Package ID and User ID are required" }, { status: 400 });
    }

    const selectedPackage = await Package.findById(packageId);
    const requestingUser = await User.findById(userId);

    if (!selectedPackage) {
      return NextResponse.json({ message: "Package not found" }, { status: 404 });
    }
    if (!requestingUser) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    
    const orderData: Partial<IOrder> = {
      user: new mongoose.Types.ObjectId(userId),
      package: selectedPackage._id,
      
      packageName: selectedPackage.name,
      packageHarga: selectedPackage.harga, 
      orderStatus: 'pending', 
      totalPaid: 0,
      
      startDate: new Date(), 
    };

    const newOrder = await Order.create(orderData);
    
    return NextResponse.json({ message: "Order created successfully", order: newOrder }, { status: 201 });

  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ message: "Failed to create order", error }, { status: 500 });
  }
}

// --- GET: GET ALL ORDERS (Hanya untuk Admin) ---
export async function GET() {
    await connectDB();
    
    try {
        const orders = await Order.find({})
            .populate('user', 'name email') 
            .populate('package', 'kecepatan_mbps kuota_gb'); 
        
        return NextResponse.json(orders, { status: 200 });
    } catch (error) {
        console.error('Error fetching orders:', error);
        return NextResponse.json({ message: "Failed to fetch orders", error }, { status: 500 });
    }
}