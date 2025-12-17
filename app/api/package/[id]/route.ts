import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import { Package } from "@/app/models/Package";
import mongoose from "mongoose"; // WAJIB untuk validasi ID

// Definisikan tipe untuk mengatasi bug Next.js runtime (params is a Promise)
type ParamsPromise = Promise<{ id: string }>;


/**
 * GET → Ambil detail package by ID
 */
export async function GET(
  req: Request,
  { params }: { params: ParamsPromise } // 💡 Perbaikan: Menggunakan Promise
) {
  try {
    // 💡 Solusi Runtime: Menunggu params diselesaikan
    const { id } = await params;

    await connectDB();

    // 💡 Perbaikan: Validasi ID Mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json(
            { message: "ID tidak valid" },
            { status: 400 }
        );
    }
    
    // console.log("params: "+id); // Konsol log diganti dengan id yang sudah diawait
    const data = await Package.findById(id);
    // console.log("data: "+data);
    
    if (!data) {
      return NextResponse.json(
        { message: "Package tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error); // Tampilkan error di server
    return NextResponse.json(
      { message: "Gagal mengambil detail package" },
      { status: 500 }
    );
  }
}


/**
 * PUT → Update package
 */
export async function PUT(
  req: Request,
  { params }: { params: ParamsPromise } // 💡 Perbaikan: Menggunakan Promise
) {
  try {
    // 💡 Solusi Runtime: Menunggu params diselesaikan
    const { id } = await params;
    
    // 💡 Perbaikan: Validasi ID Mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ message: "ID tidak valid" }, { status: 400 });
    }

    await connectDB();

    const body = await req.json();
    
    const updated = await Package.findByIdAndUpdate(
      id, // Menggunakan ID yang sudah diawait
      body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return NextResponse.json(
        { message: "Package tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Gagal update package" },
      { status: 500 }
    );
  }
}


/**
 * PATCH → Toggle isActive (soft delete)
 */
export async function PATCH(
  req: Request,
  { params }: { params: ParamsPromise } // 💡 Perbaikan: Menggunakan Promise
) {
  try {
    // 💡 Solusi Runtime: Menunggu params diselesaikan
    const { id } = await params;

    // 💡 Perbaikan: Validasi ID Mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ message: "ID tidak valid" }, { status: 400 });
    }

    await connectDB();

    const data = await Package.findById(id); // Menggunakan ID yang sudah diawait
    
    if (!data) {
      return NextResponse.json(
        { message: "Package tidak ditemukan" },
        { status: 404 }
      );
    }
    
    data.isActive = !data.isActive;
    await data.save();

    return NextResponse.json(
      {
        message: "Status package berhasil diubah",
        isActive: data.isActive,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Gagal mengubah status package" },
      { status: 500 }
    );
  }
}