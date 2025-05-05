"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../home-component/navbar";
import Footer from "../home-component/footer";

const EducationPage = () => {
  // State for category filtering
  const [activeCategory, setActiveCategory] = useState("all");

  // Education article data
  const educationArticles = [
    {
      id: 1,
      title: "Parenting Efektif: Membangun Hubungan yang Kuat dengan Anak",
      description: "Teknik komunikasi positif dan pola asuh yang mendukung perkembangan anak secara optimal.",
      image: "/images/parenting-efektif.jpg",
      category: "parenting",
      author: "Dr. Siti Nurhayati",
      date: "15 Mei 2023",
      readTime: "8 menit",
      slug: "parenting"
    },
    {
      id: 2,
      title: "Gizi Seimbang untuk Anak: Fondasi Kesehatan Seumur Hidup",
      description: "Panduan nutrisi seimbang untuk mendukung tumbuh kembang anak yang optimal dan membangun kebiasaan makan sehat sejak dini.",
      image: "/images/gizi-anak.jpg",
      category: "kesehatan",
      author: "Dr. Ahmad Fauzi",
      date: "3 Juni 2023",
      readTime: "7 menit",
      slug: "gizi-anak"
    },
    {
      id: 3,
      title: "Manajemen Keuangan Keluarga: Membangun Fondasi Finansial yang Kokoh",
      description: "Strategi mengelola keuangan keluarga untuk mencapai stabilitas dan kesejahteraan finansial jangka panjang.",
      image: "/images/manajemen-keuangan.png",
      category: "keuangan",
      author: "Budi Santoso, M.M.",
      date: "22 Juni 2023",
      readTime: "9 menit",
      slug: "keuangan-keluarga"
    },
    
  ];

  // Filter articles based on active category
  const filteredArticles = activeCategory === "all" 
    ? educationArticles 
    : educationArticles.filter(article => article.category === activeCategory);

  // Categories for filter
  const categories = [
    { id: "all", name: "Semua" },
    { id: "parenting", name: "Parenting" },
    { id: "kesehatan", name: "Kesehatan" },
    { id: "keuangan", name: "Keuangan" },
    { id: "hubungan", name: "Hubungan" },
    { id: "pendidikan", name: "Pendidikan" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 to-teal-600 py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Edukasi Keluarga
              </h1>
              <div className="w-20 h-1.5 bg-white mx-auto rounded-full mb-6"></div>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Tingkatkan pengetahuan dan keterampilan Anda dalam membangun keluarga yang sehat, 
                harmonis, dan sejahtera melalui artikel dan panduan dari para ahli.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? "bg-white text-teal-600"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
              Artikel <span className="text-teal-600">Pilihan</span>
            </h2>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src="/images/parenting-efektif.jpg"
                    alt="Parenting Efektif"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-teal-100 text-teal-600 text-xs font-medium px-2.5 py-0.5 rounded">Parenting</span>
                    <span className="text-gray-500 text-sm">15 Mei 2023</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Parenting Efektif: Membangun Hubungan yang Kuat dengan Anak
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Menjadi orang tua adalah peran yang paling menantang sekaligus paling berharga dalam hidup. 
                    Bagaimana kita berinteraksi dengan anak-anak kita setiap hari memiliki dampak mendalam pada 
                    perkembangan mereka, baik secara emosional, sosial, maupun kognitif.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-semibold">
                        SN
                      </div>
                      <span className="text-sm text-gray-600">Dr. Siti Nurhayati</span>
                    </div>
                    <Link 
                      href="/edukasi-keluarga/parenting"
                      className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
                    >
                      Baca selengkapnya
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">
              Artikel <span className="text-teal-600">Edukasi</span>
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
              Temukan berbagai artikel informatif untuk membantu Anda membangun keluarga yang sehat, 
              harmonis, dan sejahtera.
            </p>
            
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Tidak ada artikel dalam kategori ini.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <Link 
                    href={`/edukasi-keluarga/${article.slug}`} 
                    key={article.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-0 left-0 m-4">
                        <span className="bg-teal-100 text-teal-600 text-xs font-medium px-2.5 py-0.5 rounded">
                          {categories.find(cat => cat.id === article.category)?.name || article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                        <span>{article.date}</span>
                        <span>{article.readTime} baca</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-xs font-semibold">
                            {article.author.split(' ').map(name => name[0]).join('')}
                          </div>
                          <span className="text-xs text-gray-600 truncate max-w-[120px]">{article.author}</span>
                        </div>
                        <span className="text-teal-600 font-medium text-sm">Baca artikel</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        {/* <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 md:p-12">
              <div className="md:flex items-center justify-between">
                <div className="md:w-3/5 mb-6 md:mb-0">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Dapatkan Artikel Edukasi Terbaru
                  </h2>
                  <p className="text-white/90">
                    Berlangganan newsletter kami untuk mendapatkan artikel dan tips terbaru 
                    seputar kesejahteraan keluarga langsung ke email Anda.
                  </p>
                </div>
                <div className="md:w-2/5">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Alamat email Anda"
                      className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none"
                    />
                    <button className="bg-white text-teal-600 font-medium px-6 py-3 rounded-r-lg hover:bg-gray-100 transition-colors">
                      Berlangganan
                    </button>
                  </div>
                  <p className="text-white/80 text-sm mt-3">
                    Kami menghargai privasi Anda. Unsubscribe kapan saja.
                  </p>
                </div>
                </div>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default EducationPage;
