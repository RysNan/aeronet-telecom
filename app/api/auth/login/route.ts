import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import { User } from "@/app/models/User"; // Import model User
// Asumsikan fungsi untuk membandingkan password ada di hash.ts
import { comparePassword } from "@/app/lib/hash"; 

/**
 * POST → Menangani proses login pengguna
 */
export async function POST(req: Request) {
    try {
        await connectDB();

        const body = await req.json();
        const { email, password } = body;

        // 1. Validasi Input
        if (!email || !password) {
            return NextResponse.json(
                { message: "Email dan password wajib diisi." },
                { status: 400 }
            );
        }

        // 2. Cari Pengguna berdasarkan Email
        const user = await User.findOne({ email });

        if (!user) {
            // Mengembalikan pesan yang umum untuk keamanan (tidak spesifik 'email tidak ditemukan')
            return NextResponse.json(
                { message: "Kredensial tidak valid." },
                { status: 401 } // Unauthorized
            );
        }

        // 3. Bandingkan Password
        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) {
            return NextResponse.json(
                { message: "Kredensial tidak valid." },
                { status: 401 } // Unauthorized
            );
        }

        // 4. Login Berhasil (Mengembalikan data tanpa password)
        return NextResponse.json(
            {
                message: "Login berhasil.",
                data: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    isActive: user.isActive,
                },
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json(
            { message: "Gagal memproses permintaan login." },
            { status: 500 }
        );
    }
}