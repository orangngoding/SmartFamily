import Navbar from "../home-component/navbar";
import Footer from "../home-component/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Tentang Kami | SmartFamily",
  description: "Mengenal lebih dekat tentang SmartFamily dan misi kami untuk kesejahteraan keluarga Indonesia",
};

export default function TentangKami() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teal-50 to-white py-16 md:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Tentang <span className="text-teal-600">SmartFamily</span>
              </h1>
              <div className="w-24 h-1.5 bg-teal-500 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Membangun masa depan keluarga Indonesia yang lebih baik melalui
                pendekatan holistik terhadap kesejahteraan keluarga.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/keluarga2.jpeg"
                    alt="Tim SmartFamily"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-teal-200 rounded-lg -z-10"></div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Cerita Kami
                </h2>
                <p className="text-gray-600">
                  SmartFamily didirikan pada tahun 2025 oleh sekelompok profesional yang peduli 
                  dengan kesejahteraan keluarga Indonesia. Kami melihat banyak keluarga yang 
                  menghadapi tantangan dalam mengelola keuangan, membangun hubungan yang harmonis, 
                  dan mempersiapkan masa depan anak-anak mereka.
                </p>
                <p className="text-gray-600">
                  Berawal dari keinginan untuk memberikan solusi praktis bagi keluarga Indonesia, 
                  kami membangun platform yang menyediakan layanan konsultasi, perencanaan keuangan, 
                  dan edukasi keluarga yang komprehensif dan terjangkau.
                </p>
                <p className="text-gray-600">
                  Hingga saat ini, SmartFamily telah membantu lebih dari 10.000 keluarga di seluruh 
                  Indonesia untuk mencapai kesejahteraan finansial dan keharmonisan hubungan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 px-4 bg-teal-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Nilai-Nilai Kami
              </h2>
              <div className="w-20 h-1.5 bg-teal-500 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Prinsip-prinsip yang menjadi landasan kami dalam membantu keluarga Indonesia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Value 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Keluarga Adalah Prioritas</h3>
                <p className="text-gray-600">
                  Kami percaya bahwa keluarga adalah unit terpenting dalam masyarakat. Semua layanan kami 
                  dirancang untuk memperkuat ikatan keluarga dan meningkatkan kesejahteraan setiap anggota keluarga.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Integritas & Kepercayaan</h3>
                <p className="text-gray-600">
                  Kami berkomitmen untuk menjaga kepercayaan keluarga Indonesia dengan menyediakan 
                  layanan yang jujur, transparan, dan selalu mengutamakan kepentingan klien kami.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Solusi Praktis</h3>
                <p className="text-gray-600">
                  Kami fokus pada solusi praktis yang dapat diterapkan langsung oleh keluarga 
                  Indonesia. Setiap saran dan rekomendasi kami didasarkan pada realitas kehidupan 
                  sehari-hari keluarga Indonesia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Tim Kami
              </h2>
              <div className="w-20 h-1.5 bg-teal-500 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Bertemu dengan para profesional yang berdedikasi untuk membantu keluarga Indonesia
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Team Member 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/images/topik.png"
                    alt="Foto Tim"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Topique</h3>
                <p className="text-teal-600 mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Berpengalaman 15 tahun dalam bidang perencanaan keuangan keluarga dan 
                  pengembangan program kesejahteraan sosial. (Tampan dan Pemberani)
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/images/ega.png"
                    alt="Foto Tim"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Ega nteng</h3>
                <p className="text-teal-600 mb-3">Kepala Konsultan Keluarga</p>
                <p className="text-gray-600 text-sm">
                  Psikolog keluarga dengan pengalaman lebih dari 10 tahun dalam menangani 
                  berbagai masalah keluarga dan parenting. (Kreatif Dan Menawan)
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/images/galih.png"
                    alt="Foto Tim"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Galih</h3>
                <p className="text-teal-600 mb-3">Kepala Perencanaan Keuangan</p>
                <p className="text-gray-600 text-sm">
                  Ahli perencanaan keuangan bersertifikat dengan spesialisasi dalam 
                  perencanaan keuangan keluarga dan pendidikan anak. (Kuat dan Rajin)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-teal-600 text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Mulai Perjalanan Menuju Keluarga Sejahtera
              </h2>
              <p className="max-w-3xl mx-auto mb-8 text-teal-50">
                Jadwalkan konsultasi gratis dengan tim ahli kami dan temukan solusi 
                terbaik untuk keluarga Anda.
              </p>
              <Link
                href="/program/konsultasi-keluarga"
                className="bg-white text-teal-600 hover:bg-teal-50 font-medium py-3 px-8 rounded-full transition-colors shadow-md inline-flex items-center"
              >
                Konsultasi Sekarang
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
          </section>
      </main>
      <Footer />
    </div>
  );
}
