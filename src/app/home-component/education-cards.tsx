"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const EducationCards = () => {
  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Education card data
  const educationCards = [
    {
      id: 1,
      title: "Parenting Efektif",
      description: "Teknik komunikasi positif dan pola asuh yang mendukung perkembangan anak secara optimal.",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      image: "/images/parenting-efektif.jpg",
      tips: [
        "Luangkan waktu berkualitas bersama anak setiap hari",
        "Dengarkan dengan aktif saat anak berbicara",
        "Tetapkan batasan yang jelas dan konsisten"
      ],
      link: "/edukasi-keluarga/parenting"
    },
    {
      id: 2,
      title: "Gizi Seimbang untuk Anak",
      description: "Panduan nutrisi seimbang untuk mendukung tumbuh kembang anak yang optimal.",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      image: "/images/gizi-anak.jpg",
      tips: [
        "Sediakan 5 porsi buah dan sayur setiap hari",
        "Batasi makanan olahan dan tinggi gula",
        "Pastikan asupan protein yang cukup untuk pertumbuhan"
      ],
      link: "/edukasi-keluarga/gizi-anak"
    },
    {
      id: 3,
      title: "Manajemen Keuangan Keluarga",
      description: "Strategi mengelola keuangan keluarga untuk mencapai stabilitas dan kesejahteraan finansial.",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      image: "/images/manajemen-keuangan.png",
      tips: [
        "Buat anggaran bulanan dan patuhi dengan disiplin",
        "Siapkan dana darurat minimal 3-6 bulan pengeluaran",
        "Ajarkan literasi keuangan pada anak sejak dini"
      ],
      link: "/edukasi-keluarga/keuangan-keluarga"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Edukasi <span className="text-teal-600">Keluarga</span>
          </h2>
          <div className="w-20 h-1.5 bg-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Tingkatkan pengetahuan dan keterampilan Anda dalam membangun keluarga yang sehat, 
            harmonis, dan sejahtera melalui materi edukasi dari para ahli.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationCards.map((card) => (
            <div 
              key={card.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className={`transition-transform duration-500 ${hoveredCard === card.id ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{card.title}</h3>
                <p className="text-gray-600 mb-5">{card.description}</p>
                
                {/* Tips List */}
                <div className="space-y-2 mb-6">
                  {card.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="bg-teal-100 p-1 rounded-full mt-1 flex-shrink-0">
                        <svg className="w-3 h-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600">{tip}</p>
                    </div>
                  ))}
                </div>

                {/* Card Footer */}
                <Link 
                  href={card.link}
                  className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
                >
                  Pelajari lebih lanjut
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/edukasi-keluarga"
            className="inline-flex items-center justify-center bg-white border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium py-3 px-8 rounded-full transition-colors"
          >
            Lihat Semua Edukasi
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EducationCards;
