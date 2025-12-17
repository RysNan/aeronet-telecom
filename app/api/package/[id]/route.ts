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
  { params }: { params: ParamsPromise } 
) {
  try {
    
    const { id } = await params;

    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json(
            { message: "ID tidak valid" },
            { status: 400 }
        );
    }
    
    const data = await Package.findById(id);
    
    if (!data) {
      return NextResponse.json(
        { message: "Package tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
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
  { params }: { params: ParamsPromise } 
) {
  try {
    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ message: "ID tidak valid" }, { status: 400 });
    }

    await connectDB();

    const body = await req.json();
    
    const updated = await Package.findByIdAndUpdate(
      id, 
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
  { params }: { params: ParamsPromise } 
) {
  try {
    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ message: "ID tidak valid" }, { status: 400 });
    }
    await connectDB();
    const data = await Package.findById(id);
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
  } 
  catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Gagal mengubah status package" },
      { status: 500 }
    );
  }
}