"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Globe, 
  Menu, 
  X, 
  MapPin, 
  Navigation, 
  CheckCircle2, 
  XCircle, 
  Info, 
  Loader2,
  ArrowRight
} from 'lucide-react';

export default function CoveragePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State untuk Simulasi
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<'idle' | 'available' | 'unavailable'>('idle');

  // Simulasi cek coverage
  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult('idle');

    // Simulasi delay API call
    setTimeout(() => {
      setIsLoading(false);
      // Random result untuk demo (50:50 chance)
      const randomStatus = Math.random() > 0.5 ? 'available' : 'unavailable';
      setResult(randomStatus);
    }, 1500);
  };

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
            <Link href="/promo" className="hover:text-blue-600 transition">Promo</Link>
            <Link href="/coverage" className="text-blue-600 font-semibold">Cek Coverage</Link>
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

      {/* --- MAIN CONTENT --- */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-40 -z-10"></div>

        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Cek Ketersediaan Layanan
            </h1>
            <p className="text-slate-600 text-lg">
              Masukkan alamat lengkap Anda untuk mengetahui ketersediaan layanan AeroNet di lokasi Anda. Proses cepat dan gratis!
            </p>
            
            <div className="flex justify-center gap-6 mt-6 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Gratis & Instant</span>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-blue-500"/> Akurat</span>
              <span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-slate-300 flex items-center justify-center text-[10px] text-white">🔒</div> Data Aman</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid md:grid-cols-3">
              
              {/* KOLOM KIRI: FORM */}
              <div className="md:col-span-2 p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-2">Isi Detail Alamat Anda</h2>
                  <p className="text-sm text-slate-500">Pastikan semua informasi yang Anda masukkan sudah benar</p>
                </div>

                <form onSubmit={handleCheck} className="space-y-6">
                  {/* Alamat Lengkap */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Alamat Lengkap</label>
                    <textarea 
                      rows={3} 
                      placeholder="Jl. Contoh No. 123, RT/RW..." 
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Provinsi & Kota */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Provinsi</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm bg-white" required>
                        <option value="">Pilih Provinsi</option>
                        <option value="DKI Jakarta">DKI Jakarta</option>
                        <option value="Jawa Barat">Jawa Barat</option>
                        <option value="Jawa Tengah">Jawa Tengah</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Kota / Kabupaten</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm bg-white" required>
                        <option value="">Pilih Kota / Kab</option>
                        <option value="Jakarta Selatan">Jakarta Selatan</option>
                        <option value="Bandung">Bandung</option>
                      </select>
                    </div>
                  </div>

                  {/* Kecamatan & Kelurahan */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Kecamatan</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm bg-white" required>
                        <option value="">Pilih Kecamatan</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Kelurahan</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm bg-white" required>
                        <option value="">Pilih Kelurahan</option>
                      </select>
                    </div>
                  </div>

                  {/* Kode Pos & Tombol Lokasi */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Kode Pos</label>
                      <input 
                        type="text" 
                        placeholder="Contoh: 12345" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm"
                        required
                      />
                    </div>
                    <button type="button" className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 hover:text-blue-600 hover:border-blue-300 transition flex items-center justify-center gap-2 text-sm">
                      <Navigation size={18} className="text-blue-500" />
                      Cek Lokasi Anda
                    </button>
                  </div>

                  {/* Alert Info */}
                  <div className="bg-blue-50 p-4 rounded-xl flex gap-3 text-sm text-blue-800 border border-blue-100">
                    <Info size={20} className="flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      Pastikan alamat yang Anda masukkan lengkap dan sesuai dengan KTP untuk mempercepat proses instalasi.
                    </p>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-blue-600/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={20} className="animate-spin" /> Memeriksa...
                      </>
                    ) : (
                      "Periksa Coverage"
                    )}
                  </button>
                </form>
              </div>

              {/* KOLOM KANAN: RESULT PREVIEW */}
              <div className="md:col-span-1 bg-slate-50 p-8 md:p-10 border-l border-slate-100 flex flex-col justify-center">
                
                {/* STATE 1: IDLE (Belum cek) */}
                {result === 'idle' && !isLoading && (
                  <div className="text-center opacity-60">
                    <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <MapPin size={40} className="text-slate-400" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Siap Memeriksa</h3>
                    <p className="text-sm text-slate-500">Hasil pengecekan akan muncul di sini setelah Anda melengkapi formulir.</p>
                  </div>
                )}

                {/* STATE 2: LOADING */}
                {isLoading && (
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-50 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Loader2 size={40} className="text-blue-600 animate-spin" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Menganalisis Lokasi</h3>
                    <p className="text-sm text-slate-500">Mohon tunggu sebentar...</p>
                  </div>
                )}

                {/* STATE 3: TERSEDIA */}
                {result === 'available' && !isLoading && (
                  <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <CheckCircle2 size={48} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Hore! Layanan Tersedia</h3>
                    <p className="text-sm text-slate-600 mb-8">
                      Lokasi Anda tercover jaringan Fiber Optik AeroNet. Anda bisa langsung mendaftar sekarang.
                    </p>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-green-600/20 mb-3">
                      Lanjut Daftar Paket
                    </button>
                    <button onClick={() => setResult('idle')} className="text-sm text-slate-500 hover:text-slate-800 underline">
                      Cek alamat lain
                    </button>
                  </div>
                )}

                {/* STATE 4: TIDAK TERSEDIA */}
                {result === 'unavailable' && !isLoading && (
                  <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <XCircle size={48} className="text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Maaf, Belum Tersedia</h3>
                    <p className="text-sm text-slate-600 mb-8">
                      Saat ini layanan kami belum menjangkau lokasi Anda. Kami sedang memperluas jaringan!
                    </p>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 mb-6 text-left shadow-sm">
                      <p className="text-xs font-bold text-slate-900 mb-1">Dapatkan Notifikasi</p>
                      <div className="flex gap-2">
                        <input type="email" placeholder="Email Anda" className="w-full text-xs px-2 py-1 border-b border-slate-300 focus:border-blue-500 outline-none"/>
                        <button className="text-xs bg-slate-900 text-white px-3 py-1 rounded-md">Kirim</button>
                      </div>
                    </div>
                    <button onClick={() => setResult('idle')} className="text-sm text-slate-500 hover:text-slate-800 underline">
                      Cek alamat lain
                    </button>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2024 AERONET Telekomunikasi Indonesia. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white">Kebijakan Privasi</Link>
              <Link href="#" className="hover:text-white">Syarat & Ketentuan</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}