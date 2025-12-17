// middleware.ts (di root proyek)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // 1. Dapatkan role pengguna dari token/session yang tersimpan di cookies
    const userRole = request.cookies.get('userRole')?.value; 

    // 2. Cek apakah pengguna mencoba mengakses halaman admin
    const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');

    if (isAdminRoute) {
        if (!userRole || userRole !== 'admin') {
            // Jika bukan admin atau belum login, redirect ke halaman utama atau login
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    return NextResponse.next();
}

// Tentukan rute mana yang harus dilewati middleware
export const config = {
    matcher: [
        /*
         * Cocokkan semua jalur permintaan kecuali:
         * - _next/static (file statis)
         * - _next/image (optimasi gambar)
         * - favicon.ico
         * - /api/auth/* (biarkan login/register diakses)
         */
        '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
    ],
};