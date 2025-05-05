import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-24 pb-8 md:pt-32 md:pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Content - Text and CTA */}
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Wujudkan <span className="text-teal-600">Keluarga Sejahtera</span> Bersama Kami
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              SmartFamily hadir untuk membantu keluarga Indonesia merencanakan masa depan yang lebih baik 
              melalui edukasi, perencanaan keuangan, dan konsultasi keluarga.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 md:pt-4 justify-center md:justify-start">
              <Link 
                href="/program/simulasi-anggaran"
                className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 sm:py-3 px-5 sm:px-6 rounded-full transition-colors shadow-md flex items-center justify-center text-sm sm:text-base"
              >
                Mulai Konsultasi Keluarga
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              <Link 
                href="/program/konsultasi-keluarga"
                className="border border-teal-600 text-teal-600 hover:bg-teal-50 font-medium py-2.5 sm:py-3 px-5 sm:px-6 rounded-full transition-colors flex items-center justify-center text-sm sm:text-base"
              >
                Coba Simulasi Anggaran
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-6 md:pt-8 flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <div className="bg-teal-100 p-1.5 rounded-full">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-xs sm:text-sm text-gray-600">Terpercaya</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-teal-100 p-1.5 rounded-full">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <span className="text-xs sm:text-sm text-gray-600">Aman & Privat</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-teal-100 p-1.5 rounded-full">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <span className="text-xs sm:text-sm text-gray-600">Solusi Cepat</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image and Floating Card - Hidden on mobile */}
          <div className="hidden md:block md:w-1/2 relative">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/keluarga.jpg"
                alt="Keluarga bahagia"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg flex items-center gap-4">
              <div className="bg-teal-50 p-3 rounded-full">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">10,000+ Keluarga</p>
                <p className="text-xs text-gray-500">Telah kami bantu</p>
              </div>
            </div>
            
            {/* Floating Consultation Card */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-teal-50 p-2 rounded-full">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Konsultasi Online</p>
                  <p className="text-xs text-gray-500">Jadwalkan sekarang</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
