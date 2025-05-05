import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-16 md:py-18 px-4 bg-gradient-to-b from-white to-teal-50/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Tentang <span className="text-teal-600">SmartFamily</span>
          </h2>
          <div className="w-20 h-1.5 bg-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Membantu keluarga Indonesia merencanakan masa depan yang lebih baik melalui
            pendekatan holistik terhadap kesejahteraan keluarga.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with decorative elements */}
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/keluarga2.jpeg" 
                alt="Keluarga merencanakan masa depan"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-teal-200 rounded-lg -z-10"></div>
            
            
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              Misi Kami untuk Keluarga Indonesia
            </h3>
            
            <p className="text-gray-600">
              SmartFamily didirikan dengan tujuan membantu keluarga Indonesia mencapai 
              kesejahteraan finansial dan keharmonisan hubungan melalui pendekatan yang 
              komprehensif dan sesuai dengan nilai-nilai keluarga Indonesia.
            </p>
            
            <div className="space-y-4 pt-2">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-2 rounded-full mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Perencanaan Keuangan</h4>
                  <p className="text-gray-600 text-sm">
                    Membantu keluarga merencanakan anggaran, mengelola utang, dan mempersiapkan masa depan anak.
                  </p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-2 rounded-full mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Konsultasi Keluarga</h4>
                  <p className="text-gray-600 text-sm">
                    Layanan konsultasi dengan pakar keluarga untuk mengatasi tantangan dalam hubungan keluarga.
                  </p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-2 rounded-full mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Edukasi Berkelanjutan</h4>
                  <p className="text-gray-600 text-sm">
                    Menyediakan materi edukasi tentang parenting, keuangan keluarga, dan gizi untuk keluarga yang sehat.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Link 
                href="/tentang-kami" 
                className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
              >
                Pelajari lebih lanjut tentang kami
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
