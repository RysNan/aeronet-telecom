"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Wifi, 
  ShieldCheck, 
  Headphones, 
  MapPin, 
  Star, 
  Menu, 
  X, 
  Check, 
  ArrowRight, 
  Zap, 
  Globe 
} from 'lucide-react';

export default function AeronetLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <Globe className="w-8 h-8" />
            AERONET
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
            <Link href="/" className="text-blue-600 font-semibold">Beranda</Link>
            <Link href="/product" className="hover:text-blue-600 transition">Produk</Link>
            <Link href="/promo" className="hover:text-blue-600 transition">Promo</Link>
            <Link href="/coverage" className="hover:text-blue-600 transition">Cek Coverage</Link>
            <Link href="/support" className="hover:text-blue-600 transition">Bantuan</Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-slate-600 font-medium hover:text-blue-600">Masuk</button>
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
              Daftar
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-lg">
            <Link href="#" className="block py-2">Beranda</Link>
            <Link href="#" className="block py-2">Produk</Link>
            <Link href="#" className="block py-2">Cek Coverage</Link>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Daftar Sekarang</button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Internet Terbaik Indonesia
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Internet Cepat. <br />
            <span className="text-blue-600">Harga Bersahabat.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Nikmati koneksi stabil untuk rumah, mobile, dan bisnis. Jaringan luas, kualitas terjamin, dan customer service yang selalu siap membantu.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-600/20">
              Cek Coverage
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition">
              Lihat Paket
            </button>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-cyan-200/30 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">💎 Pilihan Terbaik</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan internet Anda. Semua paket dilengkapi dengan kualitas terbaik.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Paket 1 */}
            <PricingCard 
              name="Fiber 50 Mbps" 
              price="299.000" 
              features={["Unlimited kuota", "Gratis instalasi", "Support 24/7", "Router gratis"]} 
            />
            
            {/* Paket 2 (POPULER) */}
            <PricingCard 
              name="Fiber 100 Mbps" 
              price="499.000" 
              isPopular={true}
              features={["Unlimited kuota", "Gratis instalasi", "Support 24/7", "Router premium", "Bonus streaming"]} 
            />

            {/* Paket 3 */}
            <PricingCard 
              name="Fiber 200 Mbps" 
              price="899.000" 
              features={["Unlimited kuota", "Gratis instalasi", "Priority support", "Mesh WiFi system", "Bonus entertainment"]} 
            />
          </div>
        </div>
      </section>

      {/* --- COVERAGE CHECK --- */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Cek Ketersediaan Layanan</h2>
              <p className="text-slate-300">Pastikan area Anda sudah tercover dengan layanan internet berkualitas dari AERONET</p>
            </div>
            
            <form className="grid md:grid-cols-4 gap-4">
              <input type="text" placeholder="Masukkan alamat lengkap..." className="md:col-span-2 px-5 py-3 rounded-xl bg-white text-slate-900 outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="text" placeholder="Kota / Kode Pos" className="px-5 py-3 rounded-xl bg-white text-slate-900 outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition flex items-center justify-center gap-2">
                Cek <ArrowRight size={18}/>
              </button>
            </form>
            
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-2"><Check size={16} className="text-green-400"/> Gratis pengecekan</span>
              <span className="flex items-center gap-2"><Check size={16} className="text-green-400"/> Hasil instant</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">⭐ Keunggulan Kami</h2>
            <p className="text-slate-600">Kenapa Memilih AeroNet?</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <FeatureItem 
              icon={<Zap className="w-10 h-10 text-yellow-500"/>}
              title="Kecepatan Maksimal"
              desc="Internet super cepat dengan teknologi fiber optik terbaru."
            />
            <FeatureItem 
              icon={<ShieldCheck className="w-10 h-10 text-green-500"/>}
              title="Koneksi Stabil"
              desc="Garansi uptime 99.9% dengan infrastruktur jaringan yang kuat."
            />
            <FeatureItem 
              icon={<Headphones className="w-10 h-10 text-blue-500"/>}
              title="Support 24/7"
              desc="Tim customer service profesional siap membantu Anda kapan saja."
            />
            <FeatureItem 
              icon={<MapPin className="w-10 h-10 text-red-500"/>}
              title="Jangkauan Luas"
              desc="Coverage area yang luas di seluruh Indonesia dengan ekspansi berkelanjutan."
            />
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">💬 Apa Kata Pengguna?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Budi Santoso"
              role="Freelance Designer"
              quote="Internet dari AeroNet sangat cepat dan stabil! Sangat membantu pekerjaan saya sebagai freelancer."
            />
            <TestimonialCard 
              name="Siti Rahma"
              role="Ibu Rumah Tangga"
              quote="Harga terjangkau dengan kualitas bagus. Anak-anak bisa sekolah online dengan lancar."
            />
            <TestimonialCard 
              name="Ahmad Fauzi"
              role="Pemilik Cafe"
              quote="Customer service sangat helpful dan proses instalasi cepat. Pelanggan cafe saya juga puas!"
            />
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                <Globe className="w-6 h-6 text-blue-500" />
                AERONET
              </div>
              <p className="mb-6 leading-relaxed">Penyedia layanan internet terpercaya dengan jangkauan luas di seluruh Indonesia.</p>
              <div className="flex flex-col gap-2">
                <a href="tel:080012345678" className="hover:text-white transition">📞 0800-1234-5678</a>
                <a href="mailto:support@aeronet.id" className="hover:text-white transition">✉️ support@aeronet.id</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Produk</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="hover:text-blue-400">Internet Fiber</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Paket Mobile</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Internet Bisnis</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Enterprise Solutions</Link></li>
                <li><Link href="#" className="hover:text-blue-400">IoT Services</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Bantuan</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="hover:text-blue-400">FAQ</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Cara Berlangganan</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Panduan Instalasi</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Status Jaringan</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Lapor Gangguan</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Tentang AeroNet</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="hover:text-blue-400">Tentang Kami</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Karir</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Berita & Media</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Blog</Link></li>
                <li><Link href="#" className="hover:text-blue-400">Investor Relations</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2024 AERONET Telekomunikasi Indonesia. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white">Kebijakan Privasi</Link>
              <Link href="#" className="hover:text-white">Syarat & Ketentuan</Link>
              <Link href="#" className="hover:text-white">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* --- COMPONENTS --- */

function PricingCard({ name, price, features, isPopular = false }: { name: string, price: string, features: string[], isPopular?: boolean }) {
  return (
    <div className={`relative rounded-3xl p-8 border ${isPopular ? 'border-blue-600 shadow-2xl scale-105 bg-white z-10' : 'border-slate-200 bg-white hover:border-blue-300 transition'}`}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
          POPULER
        </div>
      )}
      <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-sm text-slate-500">Rp</span>
        <span className="text-4xl font-extrabold text-slate-900">{price}</span>
        <span className="text-sm text-slate-500">/bulan</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-600">
            <Check size={18} className="text-blue-600 flex-shrink-0" />
            <span className="text-sm font-medium">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-xl font-bold transition ${isPopular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}>
        Lihat Detail
      </button>
    </div>
  )
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition text-center">
      <div className="inline-flex p-3 bg-slate-50 rounded-xl mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-slate-900">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function TestimonialCard({ name, role, quote }: { name: string, role: string, quote: string }) {
  return (
    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
      <div className="flex gap-1 mb-4">
        {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400"/>)}
      </div>
      <p className="text-slate-700 italic mb-6">"{quote}"</p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-slate-900">{name}</div>
          <div className="text-xs text-slate-500 uppercase tracking-wide">{role}</div>
        </div>
      </div>
    </div>
  )
}