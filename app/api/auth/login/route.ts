import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import { User } from "@/app/models/User"; 
import { comparePassword } from "@/app/lib/hash"; 

/**
 * POST → Menangani proses login pengguna
 */
export async function POST(req: Request) {
    try {
        await connectDB();

        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { message: "Email dan password wajib diisi." },
                { status: 400 }
            );
        }

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { message: "Kredensial tidak valid." },
                { status: 401 } 
            );
        }

        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) {
            return NextResponse.json(
                { message: "Kredensial tidak valid." },
                { status: 401 } 
            );
        }

        if (isMatch) {
            const response = NextResponse.json(
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
            
            response.cookies.set('userRole', user.role, {
                httpOnly: true, // Paling aman: cookie tidak dapat diakses oleh JavaScript frontend
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 7, // 1 minggu
                path: '/', // Tersedia di seluruh aplikasi
            });

            return response; // Kembalikan response dengan cookie yang sudah di-set
        }

    } catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json(
            { message: "Gagal memproses permintaan login." },
            { status: 500 }
        );
    }
}