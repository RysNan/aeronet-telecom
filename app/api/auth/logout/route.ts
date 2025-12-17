import { NextResponse } from "next/server";

/**
 * POST → Menangani proses logout (menghapus cookie sesi)
 */
export async function POST(req: Request) {
    const response = NextResponse.json(
        { message: "Logout berhasil. Cookie sesi dihapus." },
        { status: 200 }
    );

    response.cookies.set('userRole', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 0, 
        path: '/',
    });

    return response;
}