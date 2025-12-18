import { NextResponse } from 'next/server';
import { connectDB } from '@/app/lib/db'; 
import { Order } from '@/app/models/Order'; 
import { User } from '@/app/models/User'; 
import mongoose from 'mongoose';

type ParamsPromise = Promise<{ id: string }>;


/**
 * GET → Ambil detail Order by ID (dengan populate User & Package)
 */
export async function GET(
    req: Request,
    { params }: { params: ParamsPromise } 
) {
    try {
        
        const { id } = await params; 
        await connectDB();

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json(
                { message: "ID Order tidak valid" },
                { status: 400 }
            );
        }
        
        // Cari Order dan lakukan Populate (JOIN)
        const order = await Order.findById(id)
            .populate('user', 'name email role')        
            .populate('package', 'name harga kecepatan_mbps'); 
        
        if (!order) {
            return NextResponse.json({ message: "Order tidak ditemukan" }, { status: 404 });
        }

        return NextResponse.json(order, { status: 200 });
    } catch (error) {
        console.error('Error fetching order:', error);
        return NextResponse.json(
            { message: "Gagal mengambil detail order" }, 
            { status: 500 }
        );
    }
}


/**
 * PATCH → Update Order Status (ACC/REJECT oleh Admin)
 */
export async function PATCH(
    req: Request,
    { params }: { params: ParamsPromise } 
) {
    try {
        const { id } = await params; 
        await connectDB();
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({ message: "ID Order tidak valid" }, { status: 400 });
        }

        const { orderStatus, adminId } = await req.json(); 
        const validStatuses = ['approved', 'rejected'];
        if (!validStatuses.includes(orderStatus)) {
            return NextResponse.json({ message: "Status order tidak valid" }, { status: 400 });
        }
        
        const adminUser = await User.findById(adminId);
        if (!adminUser || adminUser.role !== 'admin') {
             return NextResponse.json({ message: "Akses ditolak: Hanya Admin yang dapat menyetujui/menolak order." }, { status: 403 });
        }

        const updatedOrder = await Order.findByIdAndUpdate(
            id,
            {
                orderStatus: orderStatus,
                adminApprovalBy: new mongoose.Types.ObjectId(adminId),
                adminApprovalDate: new Date(),
            },
            { new: true, runValidators: true }
        );

        if (!updatedOrder) {
            return NextResponse.json({ message: "Order tidak ditemukan" }, { status: 404 });
        }
        
        return NextResponse.json(
            { message: `Order status updated to ${orderStatus}`, order: updatedOrder }, 
            { status: 200 }
        );

    } catch (error) {
        console.error('Error updating order:', error);
        return NextResponse.json(
            { message: "Gagal update order" }, 
            { status: 500 }
        );
    }
}


/**
 * DELETE → Hapus Order
 */
export async function DELETE(
    req: Request,
    { params }: { params: ParamsPromise } 
) {
    try {
        const { id } = await params; 
        await connectDB();

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({ message: "ID Order tidak valid" }, { status: 400 });
        }

        const deletedOrder = await Order.findByIdAndDelete(id);

        if (!deletedOrder) {
            return NextResponse.json({ message: "Order tidak ditemukan" }, { status: 404 });
        }

        return NextResponse.json({ message: "Order deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error('Error deleting order:', error);
        return NextResponse.json(
            { message: "Gagal menghapus order" }, 
            { status: 500 }
        );
    }
}