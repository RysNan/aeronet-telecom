"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Wifi, 
  Check, 
  Search, 
  Filter, 
  ChevronDown, 
  ArrowRight,
  Phone,
  HelpCircle,
  Globe,
  Menu,
  X,
  Zap,
  ShieldCheck,
  Users
} from 'lucide-react';

// Data Paket (Sesuai input Anda)
const internetPackages = [
  {
    id: 1,
    name: "Fiber 50 Mbps",
    speed: "Up to 50 Mbps",
    price: "299.000",
    tag: null,
    features: [
      "Unlimited kuota internet",
      "Gratis instalasi & aktivasi",
      "Customer support 24/7",
      "Router WiFi gratis",
      "Cocok untuk 3-4 perangkat"
    ]
  },
  {
    id: 2,
    name: "Fiber 100 Mbps",
    speed: "Up to 100 Mbps",
    price: "499.000",
    tag: "POPULER",
    tagColor: "bg-blue-600",
    features: [
      "Unlimited kuota internet",
      "Gratis instalasi & aktivasi",
      "Priority customer support",
      "Router WiFi premium",
      "Bonus streaming 3 bulan",
      "Cocok untuk 5-7 perangkat"
    ]
  },
  {
    id: 3,
    name: "Fiber 150 Mbps",
    speed: "Up to 150 Mbps",
    price: "699.000",
    tag: null,
    features: [
      "Unlimited kuota internet",
      "Gratis instalasi & aktivasi",
      "Priority customer support",
      "Router WiFi mesh system",
      "Bonus streaming 6 bulan",
      "Cocok untuk 8-10 perangkat"
    ]
  },
  {
    id: 4,
    name: "Fiber 200 Mbps",
    speed: "Up to 200 Mbps",
    price: "899.000",
    tag: "BEST VALUE",
    tagColor: "bg-emerald-500",
    features: [
      "Unlimited kuota internet",
      "Gratis instalasi & aktivasi",
      "Dedicated customer support",
      "Mesh WiFi system premium",
      "Bonus entertainment 6 bulan",
      "Cocok untuk 10-15 perangkat"
    ]
  },
  {
    id: 5,
    name: "Fiber 300 Mbps",
    speed: "Up to 300 Mbps",
    price: "1.199.000",
    tag: null,
    features: [
      "Unlimited kuota internet",
      "Gratis instalasi & aktivasi",
      "Dedicated customer support",
      "Mesh WiFi 6 system",
      "Bonus entertainment 12 bulan",
      "IP Static gratis",
      "Cocok untuk 15-20 perangkat"
    ]
  },
  {
    id: 6,
    name: "Fiber 500 Mbps",
    speed: "Up to 500 Mbps",
    price: "1.699.000",
    tag: "ULTRA FAST",
    tagColor: "bg-violet-600",
    features: [
      "Unlimited kuota internet",
      "Gratis instalasi & aktivasi",
      "VIP customer support",
      "WiFi 6E mesh system",
      "Bonus entertainment premium",
      "IP Static & Domain gratis",
      "Cocok untuk 20+ perangkat"
    ]
  }
];

export default function ProductPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filterSpeed, setFilterSpeed] = useState('Semua');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* --- NAVBAR (Konsisten) --- */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <Globe className="w-8 h-8" />
            AERONET
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition">Beranda</Link>
            <Link href="/produk" className="text-blue-600 font-semibold">Produk</Link>
            <Link href="/promo" className="hover:text-blue-600 transition">Promo</Link>
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

      {/* --- HEADER / HERO SECTION --- */}
      <section className="bg-white border-b border-slate-200 pt-16 pb-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Paket Internet <span className="text-blue-600">Fiber Optik</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              Pilih paket internet yang sesuai kebutuhan rumah Anda. Nikmati kecepatan maksimal dengan harga terbaik dan layanan berkualitas.
            </p>
            
            {/* Stats Bar */}
            <div className="flex flex-wrap gap-8 md:gap-16 border-t border-slate-100 pt-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  <Zap size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xl">99.9%</div>
                  <div className="text-sm text-slate-500">Uptime Guarantee</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Users size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xl">10K+</div>
                  <div className="text-sm text-slate-500">Pelanggan Puas</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xl">24/7</div>
                  <div className="text-sm text-slate-500">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FILTER & TOOLS BAR --- */}
      <section className="sticky top-20 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Left Controls */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:border-blue-500 hover:text-blue-600 bg-white transition min-w-[140px] justify-between">
                  <span>Pilih Kecepatan</span>
                  <ChevronDown size={16} />
                </button>
              </div>
              
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:border-blue-500 hover:text-blue-600 bg-white transition">
                <Filter size={16} />
                <span>Urutkan</span>
              </button>
            </div>

            {/* Right Controls (Search & Count) */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <input 
                  type="text" 
                  placeholder="Cari paket..." 
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
              </div>
              <span className="text-sm text-slate-500 whitespace-nowrap hidden md:block">
                Menampilkan <span className="font-bold text-slate-900">9 paket</span> yang tersedia
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* --- PRODUCT GRID --- */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {internetPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`relative bg-white rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full
                  ${pkg.tag ? 'border-blue-200 shadow-lg' : 'border-slate-200 shadow-sm'}
                `}
              >
                {/* Badge/Tag */}
                {pkg.tag && (
                  <div className={`absolute top-0 right-0 ${pkg.tagColor} text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl tracking-wider`}>
                    {pkg.tag}
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-600 mb-3">
                    {pkg.speed}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{pkg.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-medium text-slate-500">Rp</span>
                    <span className="text-4xl font-extrabold text-slate-900 tracking-tight">{pkg.price}</span>
                  </div>
                  <span className="text-sm text-slate-500 font-medium">/bulan</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="mt-0.5 min-w-[18px]">
                        <Check size={18} className="text-blue-600" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <button className={`w-full py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group
                  ${pkg.tag 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200 shadow-lg' 
                    : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600'}
                `}>
                  Lihat Detail
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600 disabled:opacity-50">‹</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold shadow-lg shadow-blue-200">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition">3</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-800">›</button>
          </div>
        </div>
      </section>

      {/* --- COVERAGE & HELP CTA --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Left: Coverage Check */}
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-3">Cek Ketersediaan Layanan</h2>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Pastikan area kamu tercover sebelum mendaftar. Gunakan fitur cek coverage untuk memastikan layanan AeroNet tersedia.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-400 mb-8">
                  <span className="flex items-center gap-1"><Check size={14} className="text-green-400"/> Gratis</span>
                  <span className="flex items-center gap-1"><Check size={14} className="text-green-400"/> Hasil Instant</span>
                  <span className="flex items-center gap-1"><Check size={14} className="text-green-400"/> Akurat</span>
                </div>
                <button className="bg-white text-slate-900 hover:bg-blue-50 px-6 py-3 rounded-xl font-bold transition flex items-center gap-2">
                  Cek Coverage
                  <ArrowRight size={18}/>
                </button>
              </div>
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
            </div>

            {/* Right: Help Center */}
            <div className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-blue-600">
                <HelpCircle size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Butuh bantuan memilih paket?</h2>
              <p className="text-slate-600 mb-8 max-w-sm">
                Tim kami siap membantu Anda menemukan paket yang tepat sesuai kebutuhan dan budget Anda.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition flex items-center gap-2 shadow-lg shadow-blue-200">
                <Phone size={18} />
                Hubungi Kami
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER (Minimal Version for Preview) --- */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 AERONET Telekomunikasi Indonesia. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}