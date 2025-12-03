"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Globe, 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  UploadCloud, 
  Info,
  Clock,
  CheckCircle2,
  Zap,
  Search,
  ArrowRight
} from 'lucide-react';

// Data FAQ (Sesuai input)
const faqData = [
  {
    question: "Bagaimana cara berlangganan paket internet AeroNet?",
    answer: "Anda dapat berlangganan paket internet AeroNet melalui website kami dengan mengisi formulir pendaftaran, atau menghubungi customer service kami di 0800-123-4567. Proses pendaftaran sangat mudah dan cepat, hanya membutuhkan KTP dan bukti alamat tempat tinggal."
  },
  {
    question: "Berapa lama waktu instalasi setelah mendaftar?",
    answer: "Waktu instalasi biasanya 1-3 hari kerja setelah pendaftaran disetujui. Tim teknisi kami akan menghubungi Anda untuk mengatur jadwal instalasi yang sesuai dengan ketersediaan Anda. Instalasi gratis untuk semua paket."
  },
  {
    question: "Apa yang harus dilakukan jika internet saya lambat?",
    answer: "Jika mengalami koneksi lambat, coba restart router Anda terlebih dahulu. Pastikan tidak ada perangkat yang menggunakan bandwidth berlebihan. Jika masalah berlanjut, hubungi customer service kami atau laporkan melalui fitur \"Lapor Gangguan\" di bawah ini untuk penanganan lebih lanjut."
  },
  {
    question: "Bagaimana cara mengubah atau upgrade paket saya?",
    answer: "Anda dapat mengubah atau upgrade paket melalui dashboard pelanggan Anda, atau hubungi customer service kami. Perubahan paket akan berlaku pada periode billing berikutnya. Tidak ada biaya tambahan untuk upgrade paket."
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer: "Kami menerima berbagai metode pembayaran termasuk transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (GoPay, OVO, Dana, ShopeePay), dan kartu kredit. Pembayaran otomatis juga tersedia untuk kemudahan Anda."
  }
];

// Data Tiket Dummy
const ticketData = [
  { id: "#TK-12345", date: "25 Nov 2025", status: "Selesai", color: "bg-green-100 text-green-700" },
  { id: "#TK-12344", date: "23 Nov 2025", status: "Diproses", color: "bg-blue-100 text-blue-700" },
  { id: "#TK-12343", date: "20 Nov 2025", status: "Menunggu", color: "bg-yellow-100 text-yellow-700" },
  { id: "#TK-12342", date: "18 Nov 2025", status: "Selesai", color: "bg-green-100 text-green-700" },
];

export default function HelpPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
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
            <Link href="/coverage" className="hover:text-blue-600 transition">Cek Coverage</Link>
            <Link href="/support" className="text-blue-600 font-semibold">Bantuan</Link>
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

      {/* --- HERO SECTION --- */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-3xl opacity-20 translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Customer Support
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Pusat Bantuan</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
            Temukan jawaban atau laporkan kendala layanan Anda. Tim support kami siap membantu Anda 24/7.
          </p>

          {/* Stats Cards */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-2xl border border-white/5 backdrop-blur-sm">
              <Phone className="text-blue-400" size={24} />
              <div className="text-left">
                <div className="font-bold text-lg">Support 24/7</div>
                <div className="text-xs text-slate-400">Selalu siap membantu</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-2xl border border-white/5 backdrop-blur-sm">
              <Zap className="text-yellow-400" size={24} />
              <div className="text-left">
                <div className="font-bold text-lg">Respon Cepat</div>
                <div className="text-xs text-slate-400">Handling 2 Jam</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-2xl border border-white/5 backdrop-blur-sm">
              <CheckCircle2 className="text-green-400" size={24} />
              <div className="text-left">
                <div className="font-bold text-lg">Solusi Terpercaya</div>
                <div className="text-xs text-slate-400">Teknisi Ahli</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Pertanyaan yang Sering Diajukan</h2>
            <p className="text-slate-600">Temukan jawaban cepat untuk pertanyaan umum seputar layanan AeroNet</p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 ${activeAccordion === index ? 'border-blue-500 bg-blue-50/50 shadow-md' : 'border-slate-200 hover:border-blue-300'}`}
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-bold text-lg ${activeAccordion === index ? 'text-blue-700' : 'text-slate-800'}`}>
                    {item.question}
                  </span>
                  {activeAccordion === index ? (
                    <ChevronUp className="text-blue-600" />
                  ) : (
                    <ChevronDown className="text-slate-400" />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <p className="text-slate-600 font-medium mb-2">Tidak menemukan jawaban yang Anda cari?</p>
            <button className="text-blue-600 font-bold hover:underline flex items-center justify-center gap-1 mx-auto">
              Hubungi Customer Service Kami <ArrowRight size={16}/>
            </button>
          </div>
        </div>
      </section>

      {/* --- FORM LAPOR GANGGUAN & CONTACT --- */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* LEFT: FORM */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Lapor Gangguan</h2>
              <p className="text-slate-600 mb-8">Sampaikan kendala teknis yang Anda alami dan tim kami akan segera menindaklanjuti</p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Pilih Jenis Gangguan</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white text-slate-600">
                    <option>Internet Mati Total</option>
                    <option>Koneksi Lambat / Tidak Stabil</option>
                    <option>Router Rusak / Lampu Merah</option>
                    <option>Masalah Billing / Pembayaran</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Ceritakan kendala yang Anda alami</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Jelaskan secara detail kendala yang Anda alami, kapan mulai terjadi, dan apakah ada pesan error..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Unggah bukti (opsional)</label>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition cursor-pointer group">
                    <UploadCloud className="w-10 h-10 text-slate-400 mx-auto mb-3 group-hover:text-blue-500 transition" />
                    <p className="text-sm text-slate-600 font-medium">Klik atau drag file ke sini</p>
                    <p className="text-xs text-slate-400 mt-1">Format: JPG, PNG (Max 5MB)</p>
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-blue-50 p-4 rounded-xl flex gap-3 text-sm text-blue-800 border border-blue-100">
                  <Info size={20} className="flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <span className="font-bold">Tips:</span> Sertakan screenshot atau foto untuk mempercepat proses penanganan. Tim support akan merespons dalam 1-2 jam.
                  </p>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-blue-600/20">
                  Kirim Laporan
                </button>
              </form>
            </div>

            {/* RIGHT: CONTACT & TICKET */}
            <div className="space-y-8">
              
              {/* Contact Cards */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Hubungi Kami</h3>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-green-500 hover:bg-green-50 transition group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <MessageCircle size={20} />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-slate-900">Via WhatsApp</div>
                        <div className="text-xs text-slate-500">Respon lebih cepat</div>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-slate-300 group-hover:text-green-600 transition" />
                  </button>

                  <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        <Phone size={20} />
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-slate-900">Call Center 24/7</div>
                        <div className="text-xs text-slate-500">Bicara dengan agent</div>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-slate-300 group-hover:text-blue-600 transition" />
                  </button>
                </div>
                <div className="mt-6 text-center text-sm text-slate-500">
                  <p>Atau email kami di</p>
                  <a href="mailto:support@aeronet.id" className="font-bold text-blue-600 hover:underline">support@aeronet.id</a>
                </div>
              </div>

              {/* Ticket Status */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">Status Tiket</h3>
                  <Link href="#" className="text-xs font-bold text-blue-600 hover:underline">Lihat Semua</Link>
                </div>
                
                <div className="space-y-3">
                  {ticketData.map((ticket, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition border border-slate-100">
                      <div>
                        <div className="text-sm font-bold text-slate-900">{ticket.id}</div>
                        <div className="text-xs text-slate-500">{ticket.date}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-bold ${ticket.color}`}>
                        {ticket.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
                <Globe className="w-6 h-6 text-blue-500" />
                AERONET
              </div>
              <p className="mb-6 leading-relaxed text-sm">Penyedia layanan internet terpercaya dengan jangkauan luas di seluruh Indonesia.</p>
            </div>
            {/* Footer links omitted for brevity as they are repetitive */}
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© 2024 AERONET Telekomunikasi Indonesia. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}