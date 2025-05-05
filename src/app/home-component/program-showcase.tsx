"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProgramShowcase = () => {
  const [activeTab, setActiveTab] = useState<'simulasi' | 'konsultasi'>('simulasi');

  const programs = [
    {
      id: 'simulasi',
      title: "Simulasi Anggaran Keluarga",
      subtitle: "Rencanakan keuangan keluarga dengan lebih baik",
      description: "Alat simulasi interaktif yang membantu Anda membuat anggaran keluarga yang realistis, mengidentifikasi area penghematan, dan merencanakan masa depan finansial keluarga dengan lebih baik.",
      image: "/images/keuangan.png",
      features: [
        "Analisis pengeluaran dan pemasukan bulanan",
        "Rekomendasi alokasi dana berdasarkan prioritas keluarga",
        "Simulasi tabungan pendidikan anak dan dana pensiun",
        "Laporan keuangan yang dapat diunduh"
      ],
      cta: "Coba Simulasi Sekarang",
      link: "/program/simulasi-anggaran",
      testimonial: {
        quote: "Simulasi anggaran ini membantu keluarga kami melihat dengan jelas ke mana uang kami pergi dan bagaimana kami bisa menabung lebih banyak untuk pendidikan anak.",
        author: "Keluarga Santoso",
        location: "Jakarta"
      }
    },
    {
      id: 'konsultasi',
      title: "Konsultasi Keluarga",
      subtitle: "Solusi untuk tantangan keluarga Anda",
      description: "Layanan konsultasi dengan pakar keluarga berpengalaman yang membantu Anda mengatasi berbagai tantangan dalam hubungan keluarga, parenting, dan perencanaan masa depan.",
      image: "/images/konsultasi.png",
      features: [
        "Konsultasi one-on-one dengan konselor bersertifikat",
        "Sesi terstruktur untuk mengatasi masalah spesifik",
        "Rencana tindak lanjut yang dapat diimplementasikan",
        "Akses ke sumber daya edukasi eksklusif"
      ],
      cta: "Jadwalkan Konsultasi",
      link: "/program/konsultasi-keluarga",
      testimonial: {
        quote: "Konsultasi dengan pakar SmartFamily membantu kami menemukan cara berkomunikasi yang lebih baik dan menyelesaikan konflik dengan lebih konstruktif.",
        author: "Keluarga Wijaya",
        location: "Surabaya"
      }
    }
  ];

  const currentProgram = programs.find(program => program.id === activeTab);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Program <span className="text-teal-600">Unggulan</span> Kami
          </h2>
          <div className="w-20 h-1.5 bg-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Solusi komprehensif untuk membantu keluarga Indonesia mencapai kesejahteraan finansial
            dan keharmonisan hubungan melalui pendekatan yang praktis dan terpersonalisasi.
          </p>
        </div>

        {/* Program Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-full">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => setActiveTab(program.id as 'simulasi' | 'konsultasi')}
                className={`py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                  activeTab === program.id
                    ? "bg-teal-600 text-white shadow-md"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                {program.title}
              </button>
            ))}
          </div>
        </div>

        {/* Program Content */}
        {currentProgram && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl h-[350px] lg:h-[450px]">
                <Image
                  src={currentProgram.image}
                  alt={currentProgram.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              {/* Testimonial Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-5 rounded-lg shadow-lg max-w-xs z-20 hidden lg:block">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm italic text-gray-600">"{currentProgram.testimonial.quote}"</p>
                  <div className="text-xs text-gray-500">
                    <span className="font-semibold">{currentProgram.testimonial.author}</span> • {currentProgram.testimonial.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <h3 className="text-xl text-teal-600 font-medium mb-2">{currentProgram.subtitle}</h3>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{currentProgram.title}</h2>
                <p className="text-gray-600 mb-8">{currentProgram.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Fitur Utama:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentProgram.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-teal-100 p-1.5 rounded-full mt-0.5 flex-shrink-0">
                        <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-teal-600 mb-1">
                    {activeTab === 'simulasi' ? '94%' : '89%'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {activeTab === 'simulasi' 
                      ? 'Pengguna merasa lebih percaya diri mengelola keuangan' 
                      : 'Keluarga melaporkan peningkatan komunikasi'}
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-teal-600 mb-1">
                    {activeTab === 'simulasi' ? '10K+' : '100+'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {activeTab === 'simulasi' 
                      ? 'Keluarga telah menggunakan simulasi kami' 
                      : 'Sesi konsultasi dilakukan setiap bulan'}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link 
                  href={currentProgram.link}
                  className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-md"
                >
                  {currentProgram.cta}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramShowcase;
