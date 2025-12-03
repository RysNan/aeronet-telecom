"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Globe, 
  Menu, 
  X, 
  Search, 
  Filter, 
  ChevronDown, 
  Calendar, 
  Tag, 
  ArrowRight,
  CheckCircle2,
  Clock,
  Percent
} from 'lucide-react';

// Data Promo (Sesuai input Anda)
const promoData = [
  {
    id: 1,
    category: "Internet Fiber",
    title: "Paket Keluarga 200 Mbps",
    desc: "Internet unlimited + 2 nomor mobile gratis. Cocok untuk keluarga besar dengan aktivitas streaming dan gaming.",
    validity: "Berlaku 1-30 Nov 2025",
    tags: [{ label: "Baru", color: "bg-blue-100 text-blue-700" }]
  },
  {
    id: 2,
    category: "Bundling",
    title: "Bundling Fiber + Mobile",
    desc: "Hemat 30% dengan paket bundling fiber 100 Mbps + kartu mobile unlimited calls & data.",
    validity: "Berlaku 15 Nov - 15 Des 2025",
    tags: [{ label: "Diskon 30%", color: "bg-red-100 text-red-700" }]
  },
  {
    id: 3,
    category: "UMKM",
    title: "Paket UMKM Hemat",
    desc: "Khusus pelaku usaha. Internet cepat 150 Mbps + IP static + domain gratis + prioritas support.",
    validity: "Berlaku 1 Nov - 31 Des 2025",
    tags: [{ label: "Baru", color: "bg-blue-100 text-blue-700" }]
  },
  {
    id: 4,
    category: "Internet Fiber",
    title: "Upgrade Gratis ke 300 Mbps",
    desc: "Pelanggan lama bisa upgrade kecepatan tanpa biaya tambahan. Limited untuk 500 pelanggan pertama.",
    validity: "Berlaku 10-25 Nov 2025",
    tags: [{ label: "Terbatas", color: "bg-orange-100 text-orange-700" }]
  },
  {
    id: 5,
    category: "Referral",
    title: "Promo Referral Pelanggan",
    desc: "Ajak teman dapat cashback Rp 100.000 setiap referral berhasil. Unlimited referral!",
    validity: "Berlaku 1 Nov - 31 Jan 2026",
    tags: [{ label: "Cashback", color: "bg-green-100 text-green-700" }]
  },
  {
    id: 6,
    category: "Internet Fiber",
    title: "Flash Sale 12.12",
    desc: "Diskon 60% untuk 100 pendaftar pertama di tanggal 12 Desember. Jangan sampai kehabisan!",
    validity: "Berlaku 12 Des 2025",
    tags: [{ label: "Flash Sale", color: "bg-purple-100 text-purple-700" }]
  },
  {
    id: 7,
    category: "Internet Fiber",
    title: "Paket Pelajar & Mahasiswa",
    desc: "Diskon khusus untuk pelajar dan mahasiswa dengan menunjukkan kartu pelajar/mahasiswa.",
    validity: "Berlaku 1 Nov - 31 Des 2025",
    tags: [{ label: "Baru", color: "bg-blue-100 text-blue-700" }]
  },
  {
    id: 8,
    category: "Bundling",
    title: "Bundling Triple Play",
    desc: "Paket lengkap: Internet Fiber + TV Cable + Telepon rumah. Hemat hingga 40% dari harga normal.",
    validity: "Berlaku 1 Nov - 31 Des 2025",
    tags: [{ label: "Diskon 40%", color: "bg-red-100 text-red-700" }]
  },
  {
    id: 9,
    category: "Internet Fiber",
    title: "Gratis Upgrade Router WiFi 6",
    desc: "Pelanggan paket 200 Mbps ke atas dapat upgrade router ke WiFi 6 tanpa biaya tambahan.",
    validity: "Berlaku 15 Nov - 31 Des 2025",
    tags: [{ label: "Gratis", color: "bg-emerald-100 text-emerald-700" }]
  },
];

export default function PromoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <Globe className="w-8 h-8" />
            AERONET
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition">Beranda</Link>
            <Link href="/product" className="hover:text-blue-600 transition">Produk</Link>
            <Link href="/promo" className="text-blue-600 font-semibold">Promo</Link>
            <Link href="/coverage" className="hover:text-blue-600 transition">Cek Coverage</Link>
            <Link href="/support" className="hover:text-blue-600 transition">Bantuan</Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-slate-600 font-medium hover:text-blue-600">Masuk</button>
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition">
              Daftar
            </button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- HERO BANNER (PROMO SPESIAL) --- */}
      <section className="bg-white pt-10 pb-16 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
            <Tag size={14} />
            Promo Spesial
          </div>
          
          {/* Main Featured Banner */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/4"></div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 relative z-10">
              {/* Content */}
              <div>
                <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-lg mb-4">
                  PROMO TERBATAS
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                  Diskon hingga 50% untuk Paket Fiber
                </h1>
                <p className="text-slate-300 text-lg mb-8">
                  Terbatas — hanya untuk pelanggan baru yang mendaftar di bulan November
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="bg-white/10 p-1 rounded-full"><CheckCircle2 size={18} className="text-green-400"/></div>
                    <span className="font-medium">Gratis instalasi & router WiFi premium</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-white/10 p-1 rounded-full"><CheckCircle2 size={18} className="text-green-400"/></div>
                    <span className="font-medium">Bonus 3 bulan streaming gratis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-white/10 p-1 rounded-full"><CheckCircle2 size={18} className="text-green-400"/></div>
                    <span className="font-medium">Harga spesial Rp 249.500/bulan</span>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-bold transition shadow-lg shadow-red-900/50">
                    Dapatkan Sekarang
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-xl font-bold transition backdrop-blur-sm">
                    Syarat & Ketentuan
                  </button>
                </div>
                <p className="mt-6 text-xs text-slate-400">*Berlaku 1-30 November 2025 • Selama persediaan masih ada</p>
              </div>

              {/* Visual 50% OFF */}
              <div className="hidden md:flex justify-center items-center relative">
                <div className="w-80 h-80 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex flex-col items-center justify-center p-8 animate-pulse-slow">
                  <span className="text-9xl font-black text-white leading-none">50<span className="text-5xl">%</span></span>
                  <span className="text-4xl font-bold text-red-500 tracking-widest">OFF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FILTER & SEARCH --- */}
      <section className="sticky top-20 z-40 bg-slate-50 border-b border-slate-200/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-bold text-slate-900">Promo & Penawaran</h2>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              {/* Dropdown Kategori */}
              <div className="relative group min-w-[180px]">
                <button className="w-full flex items-center justify-between gap-2 px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:border-blue-500 transition">
                  <span>Semua Kategori</span>
                  <ChevronDown size={16} />
                </button>
              </div>

              {/* Search */}
              <div className="relative w-full sm:w-64">
                <input 
                  type="text" 
                  placeholder="Cari promo..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <Search size={16} className="absolute left-3 top-3 text-slate-400" />
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-slate-500">
            Menampilkan <span className="font-bold text-slate-900">12 promo</span> aktif
          </div>
        </div>
      </section>

      {/* --- PROMO GRID --- */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {promoData.map((promo) => (
              <div key={promo.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition flex flex-col h-full group">
                
                {/* Header Card: Category & Tags */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{promo.category}</span>
                  <div className="flex gap-2">
                    {promo.tags.map((tag, idx) => (
                      <span key={idx} className={`text-xs font-bold px-3 py-1 rounded-full ${tag.color}`}>
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">{promo.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                  {promo.desc}
                </p>

                {/* Footer Card: Validity & Actions */}
                <div className="pt-6 border-t border-slate-100 mt-auto">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 bg-slate-50 p-2 rounded-lg w-fit">
                    <Clock size={14} />
                    <span>{promo.validity}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button className="col-span-1 py-2.5 rounded-lg border border-slate-200 text-slate-600 text-sm font-bold hover:bg-slate-50 hover:text-slate-900 transition">
                      Syarat
                    </button>
                    <button className="col-span-1 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition flex items-center justify-center gap-1">
                      Dapatkan
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 disabled:opacity-50">‹</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 text-white font-bold">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100">3</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100">›</button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 AERONET Telekomunikasi Indonesia. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}