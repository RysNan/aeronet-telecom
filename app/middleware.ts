import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const userRole = request.cookies.get('userRole')?.value;
    const { pathname } = request.nextUrl;

    // 1. Proteksi Rute Admin
    // Mencegah client atau user tanpa login masuk ke folder /admin
    if (pathname.startsWith('/admin')) {
        if (userRole !== 'admin') {
            // Jika dia client atau tidak login, lempar ke login
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // 2. Proteksi Rute Dashboard Pelanggan
    // Mencegah admin atau user tanpa login masuk ke folder /dashboard-pelanggan
    if (pathname.startsWith('/dashboard-pelanggan')) {
        if (userRole !== 'client') {
            // Jika dia admin atau tidak login, lempar ke login
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // 3. (Opsional) Redirect jika user sudah login tapi ingin akses halaman login lagi
    if (pathname === '/login' && userRole) {
        if (userRole === 'admin') return NextResponse.redirect(new URL('/admin', request.url));
        if (userRole === 'client') return NextResponse.redirect(new URL('/dashboard-pelanggan', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Pantau rute dashboard secara spesifik agar lebih efisien
         */
        '/admin/:path*', 
        '/dashboard-pelanggan/:path*',
        '/login'
    ],
};