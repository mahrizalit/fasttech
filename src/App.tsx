/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Globe, 
  Smartphone, 
  Search, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  {
    title: "Sistem Enterprise",
    description: "Solusi sistem manajemen terintegrasi untuk meningkatkan efisiensi operasional bisnis Anda.",
    icon: <Monitor className="w-8 h-8" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Pengembangan Website",
    description: "Website modern, responsif, dan berperforma tinggi yang dirancang untuk konversi maksimal.",
    icon: <Globe className="w-8 h-8" />,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Aplikasi Mobile",
    description: "Aplikasi iOS dan Android kustom yang memberikan pengalaman pengguna yang luar biasa.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "bg-sky-50 text-sky-600"
  },
  {
    title: "Optimasi SEO",
    description: "Tingkatkan visibilitas online Anda dan dominasi hasil pencarian dengan strategi SEO kami.",
    icon: <Search className="w-8 h-8" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Keamanan Siber",
    description: "Lindungi aset digital dan data sensitif Anda dengan protokol keamanan tingkat lanjut.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "bg-indigo-50 text-indigo-600"
  }
];

const features = [
  "Tim Ahli Berpengalaman",
  "Dukungan Teknis 24/7",
  "Teknologi Terbaru",
  "Solusi Terukur",
  "Keamanan Terjamin",
  "Pengiriman Tepat Waktu"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold font-display tracking-tight text-primary">
                Fast<span className="text-slate-900">Tech</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Beranda</a>
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Layanan</a>
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Tentang Kami</a>
              <a href="#contact" className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-blue-500/20">
                Hubungi Kami
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-lg">Beranda</a>
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-lg">Layanan</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-lg">Tentang Kami</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-base font-medium text-primary font-bold">Hubungi Kami</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                Konsultan IT Terpercaya
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                Masih Manual dan Rutin? <span className="text-primary">Setiap Hari Boros.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                Kami bantu transformasi digital—sistem dan keamanan siber.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 group">
                  Mulai Proyek Anda <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center justify-center">
                  Lihat Portofolio
                </button>
              </div>
              
              <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
                <div className="font-bold text-xl">TRUSTED BY</div>
                <div className="flex gap-6">
                  {/* Mock logos */}
                  <div className="w-24 h-8 bg-slate-200 rounded animate-pulse"></div>
                  <div className="w-24 h-8 bg-slate-200 rounded animate-pulse"></div>
                  <div className="w-24 h-8 bg-slate-200 rounded animate-pulse"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src="https://picsum.photos/seed/tech/800/600" 
                  alt="Tech Solutions" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl z-20 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Project Success</div>
                    <div className="text-lg font-bold text-slate-900">99.9%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 text-primary rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Security Level</div>
                    <div className="text-lg font-bold text-slate-900">Enterprise</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Layanan Kami</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Solusi IT Komprehensif untuk Kebutuhan Modern</h3>
            <p className="text-slate-600 text-lg">
              Kami menawarkan berbagai layanan teknologi yang dirancang untuk membantu bisnis Anda tetap kompetitif di era digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Pelajari Lebih Lanjut <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://picsum.photos/seed/office1/400/500" alt="Office" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                  <div className="bg-primary p-8 rounded-2xl text-white">
                    <div className="text-4xl font-bold mb-2">10+</div>
                    <div className="text-sm font-medium opacity-80 uppercase tracking-wider">Tahun Pengalaman</div>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="bg-slate-900 p-8 rounded-2xl text-white">
                    <div className="text-4xl font-bold mb-2">250+</div>
                    <div className="text-sm font-medium opacity-80 uppercase tracking-wider">Proyek Selesai</div>
                  </div>
                  <img src="https://picsum.photos/seed/office2/400/500" alt="Team" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Tentang FastTech</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">Membangun Masa Depan Digital Bersama Anda</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                FastTech didirikan dengan visi untuk menjadi mitra teknologi terdepan bagi bisnis di seluruh Indonesia. Kami percaya bahwa teknologi yang tepat dapat mengubah tantangan menjadi peluang pertumbuhan yang signifikan.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-primary rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg">
                Kenali Tim Kami
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl shadow-blue-500/40">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-3xl lg:text-5xl font-bold text-white mb-8">Siap Mengakselerasi Bisnis Anda Secara Digital?</h3>
              <p className="text-blue-100 text-lg mb-10">
                Konsultasikan kebutuhan teknologi Anda dengan tim ahli kami secara gratis hari ini.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-white text-primary rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl">
                  Hubungi Sekarang
                </button>
                <button className="px-10 py-4 bg-primary-dark text-white border border-white/20 rounded-full font-bold hover:bg-blue-800 transition-all">
                  Jadwalkan Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Kontak Kami</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">Mari Berdiskusi Tentang Proyek Anda</h3>
              <p className="text-slate-600 text-lg mb-10">
                Punya pertanyaan atau ingin memulai proyek baru? Tim kami siap membantu Anda menemukan solusi terbaik.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 mb-1">Email Kami</div>
                    <div className="text-slate-600">hello@fasttech.id</div>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 mb-1">Telepon</div>
                    <div className="text-slate-600">+62 (21) 555-0123</div>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 mb-1">Kantor Pusat</div>
                    <div className="text-slate-600">Sudirman Central Business District, Jakarta</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 lg:p-12 rounded-3xl border border-slate-100">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Alamat Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Subjek</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                    <option>Pilih Layanan</option>
                    <option>Sistem Enterprise</option>
                    <option>Website</option>
                    <option>Mobile App</option>
                    <option>SEO</option>
                    <option>Keamanan</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Pesan</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Ceritakan kebutuhan Anda..."></textarea>
                </div>
                <button className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-blue-500/20">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="text-2xl font-bold font-display tracking-tight text-white">
                Fast<span className="text-blue-400">Tech</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Mitra transformasi digital terpercaya yang menghadirkan solusi teknologi inovatif untuk pertumbuhan bisnis berkelanjutan.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Layanan</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Sistem Enterprise</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pengembangan Website</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Aplikasi Mobile</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Optimasi SEO</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Keamanan Siber</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Perusahaan</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tim Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-slate-400 mb-6">Dapatkan update terbaru tentang teknologi dan bisnis.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email Anda" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 outline-none focus:border-primary w-full" />
                <button className="bg-primary px-4 py-2 rounded-lg font-bold hover:bg-primary-dark transition-all">
                  Daftar
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} FastTech IT Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
