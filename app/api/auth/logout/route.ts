import { NextResponse } from "next/server";

/**
 * POST → Menangani proses logout (menghapus cookie sesi)
 */
export async function POST(req: Request) {
    // 1. Buat response kosong dengan status 200 OK (berhasil)
    const response = NextResponse.json(
        { message: "Logout berhasil. Cookie sesi dihapus." },
        { status: 200 }
    );

    // 2. Hapus Cookie 'userRole'
    // Caranya adalah dengan mengatur maxAge cookie menjadi 0 atau tanggal kedaluwarsa di masa lalu.
    response.cookies.set('userRole', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 0, // 💡 Kunci: Mengatur maxAge ke 0 (expired immediately)
        path: '/',
    });

    // 3. (Opsional) Jika Anda menggunakan token ID di cookie lain, hapus juga:
    // response.cookies.set('authToken', '', { maxAge: 0, path: '/' });

    return response;
}