import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import { Package } from "@/app/models/Package";

/**
 * GET → Ambil semua package (hanya yang aktif)
 */
export async function GET() {
  try {
    await connectDB();

    const packages = await Package.find({ isActive: true }).sort({
      createdAt: -1,
    });

    return NextResponse.json(packages, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal mengambil data package" },
      { status: 500 }
    );
  }
}

/**
 * POST → Tambah package baru
 */
export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      name,
      kecepatan_mbps,
      kuota_gb,
      harga,
      kapasitas_device,
    } = body;

    if (
      !name ||
      !kecepatan_mbps ||
      !kuota_gb ||
      !harga ||
      !kapasitas_device
    ) {
      return NextResponse.json(
        { message: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    const newPackage = await Package.create({
      name,
      kecepatan_mbps,
      kuota_gb,
      harga,
      kapasitas_device,
    });

    return NextResponse.json(newPackage, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Gagal membuat package" },
      { status: 500 }
    );
  }
}
