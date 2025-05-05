import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../home-component/navbar"

// Define article content
const articles = {
  "parenting": {
    title: "Parenting Efektif: Membangun Hubungan yang Kuat dengan Anak",
    image: "/images/parenting-efektif.jpg",
    publishDate: "15 Mei 2023",
    author: "Dr. Siti Nurhayati",
    authorRole: "Psikolog Anak & Keluarga",
    summary: "Teknik komunikasi positif dan pola asuh yang mendukung perkembangan anak secara optimal.",
    content: [
      {
        type: "paragraph",
        content: "Menjadi orang tua adalah peran yang paling menantang sekaligus paling berharga dalam hidup. Bagaimana kita berinteraksi dengan anak-anak kita setiap hari memiliki dampak mendalam pada perkembangan mereka, baik secara emosional, sosial, maupun kognitif. Parenting efektif bukan tentang menjadi sempurna, tetapi tentang membangun hubungan yang kuat berdasarkan cinta, kepercayaan, dan komunikasi yang terbuka."
      },
      {
        type: "heading",
        content: "Komunikasi Positif: Kunci Hubungan yang Kuat"
      },
      {
        type: "paragraph",
        content: "Komunikasi adalah fondasi dari hubungan orang tua-anak yang sehat. Ketika kita berkomunikasi dengan anak-anak kita, penting untuk tidak hanya berbicara tetapi juga mendengarkan dengan aktif. Ini berarti memberikan perhatian penuh, mempertahankan kontak mata, dan merespons dengan cara yang menunjukkan bahwa kita benar-benar memahami apa yang mereka katakan."
      },
      {
        type: "tips",
        title: "Tips Komunikasi Efektif dengan Anak:",
        items: [
          "Berlutut atau duduk sehingga Anda berada di level mata anak saat berbicara",
          "Gunakan pertanyaan terbuka yang tidak bisa dijawab dengan 'ya' atau 'tidak'",
          "Validasi perasaan mereka dengan frasa seperti 'Aku mengerti kamu merasa...'",
          "Hindari interupsi saat anak berbicara"
        ]
      },
      {
        type: "paragraph",
        content: "Selain mendengarkan, cara kita berbicara dengan anak-anak juga sangat penting. Bahasa positif dan penegasan dapat membangun kepercayaan diri anak, sementara kritik yang berlebihan dan kata-kata negatif dapat merusak harga diri mereka. Cobalah untuk mengganti pernyataan negatif dengan petunjuk positif. Misalnya, alih-alih berkata 'Jangan berlari di dalam rumah', katakan 'Tolong jalan pelan-pelan di dalam rumah'."
      },
      {
        type: "heading",
        content: "Menetapkan Batasan yang Jelas dan Konsisten"
      },
      {
        type: "paragraph",
        content: "Anak-anak membutuhkan batasan untuk merasa aman dan memahami dunia di sekitar mereka. Batasan yang jelas dan konsisten membantu anak-anak belajar tentang perilaku yang tepat dan mengembangkan disiplin diri. Namun, penting untuk menetapkan batasan dengan cara yang penuh kasih dan menghormati."
      },
      {
        type: "paragraph",
        content: "Ketika menetapkan aturan, jelaskan alasan di baliknya dengan cara yang dapat dipahami anak. Ini membantu mereka memahami bahwa aturan ada untuk melindungi mereka, bukan untuk membatasi kebebasan mereka. Konsistensi juga sangat penting - aturan yang diterapkan secara tidak konsisten hanya akan membingungkan anak dan mengurangi efektivitasnya."
      },
      {
        type: "quote",
        content: "Disiplin yang efektif bukan tentang hukuman, tetapi tentang mengajarkan anak-anak bagaimana mengelola perilaku mereka sendiri dan membuat pilihan yang baik."
      },
      {
        type: "heading",
        content: "Meluangkan Waktu Berkualitas"
      },
      {
        type: "paragraph",
        content: "Dalam kehidupan yang sibuk saat ini, meluangkan waktu berkualitas dengan anak-anak bisa menjadi tantangan. Namun, momen-momen bersama ini sangat penting untuk membangun ikatan yang kuat. Waktu berkualitas tidak harus berarti kegiatan yang rumit atau mahal - yang terpenting adalah perhatian penuh dan keterlibatan aktif."
      },
      {
        type: "tips",
        title: "Ide untuk Waktu Berkualitas Bersama Anak:",
        items: [
          "Membaca buku bersama sebelum tidur",
          "Memasak atau memanggang bersama",
          "Bermain game papan atau kartu keluarga",
          "Berjalan-jalan di alam atau taman",
          "Mengerjakan proyek seni atau kerajinan"
        ]
      },
      {
        type: "paragraph",
        content: "Yang terpenting, jadikan waktu bersama anak sebagai prioritas. Matikan perangkat elektronik, singkirkan gangguan, dan berikan anak Anda perhatian penuh. Momen-momen sederhana ini akan membangun kenangan yang berharga dan memperkuat hubungan Anda dengan anak."
      },
      {
        type: "heading",
        content: "Menjadi Teladan yang Baik"
      },
      {
        type: "paragraph",
        content: "Anak-anak belajar lebih banyak dari apa yang mereka lihat daripada apa yang mereka dengar. Sebagai orang tua, kita adalah model peran utama bagi anak-anak kita. Mereka mengamati bagaimana kita mengelola emosi, menyelesaikan konflik, dan berinteraksi dengan orang lain. Dengan menjadi teladan yang baik, kita mengajarkan nilai-nilai dan keterampilan hidup yang penting."
      },
      {
        type: "paragraph",
        content: "Ini juga berarti mengakui ketika kita membuat kesalahan. Meminta maaf kepada anak ketika kita salah mengajarkan mereka tentang tanggung jawab dan menunjukkan bahwa tidak apa-apa untuk tidak sempurna. Ini membantu membangun lingkungan yang aman di mana anak-anak merasa nyaman untuk belajar dari kesalahan mereka sendiri."
      },
      {
        type: "conclusion",
        content: "Parenting efektif adalah perjalanan, bukan tujuan. Tidak ada orang tua yang sempurna, dan setiap anak adalah individu unik dengan kebutuhan dan kepribadian yang berbeda. Yang terpenting adalah membangun hubungan yang penuh kasih dan saling menghormati, di mana anak-anak merasa aman, dihargai, dan didukung. Dengan komunikasi yang terbuka, batasan yang jelas, waktu berkualitas, dan teladan yang baik, kita dapat membantu anak-anak kita tumbuh menjadi individu yang percaya diri, penuh kasih, dan bertanggung jawab."
      }
    ]
  },
  "gizi-anak": {
    title: "Gizi Seimbang untuk Anak: Fondasi Kesehatan Seumur Hidup",
    image: "/images/gizi-anak.jpg",
    publishDate: "3 Juni 2023",
    author: "Dr. Ahmad Fauzi",
    authorRole: "Ahli Gizi Anak",
    summary: "Panduan nutrisi seimbang untuk mendukung tumbuh kembang anak yang optimal.",
    content: [
      {
        type: "paragraph",
        content: "Nutrisi yang tepat selama masa kanak-kanak tidak hanya mendukung pertumbuhan dan perkembangan yang optimal, tetapi juga meletakkan dasar untuk kesehatan jangka panjang. Pola makan yang dibentuk pada masa kanak-kanak sering bertahan hingga dewasa, menjadikan periode ini sangat penting untuk membangun kebiasaan makan yang sehat."
      },
      {
        type: "heading",
        content: "Kebutuhan Nutrisi Dasar Anak"
      },
      {
        type: "paragraph",
        content: "Anak-anak membutuhkan nutrisi yang sama seperti orang dewasa, tetapi dalam proporsi yang berbeda sesuai dengan tahap pertumbuhan mereka. Nutrisi penting ini meliputi protein, karbohidrat, lemak, vitamin, mineral, dan air. Setiap nutrisi memainkan peran penting dalam pertumbuhan dan perkembangan anak."
      },
      {
        type: "list",
        title: "Nutrisi Penting untuk Pertumbuhan Anak:",
        items: [
          {
            title: "Protein",
            description: "Penting untuk pertumbuhan dan perbaikan jaringan tubuh. Sumber yang baik termasuk daging tanpa lemak, ikan, telur, kacang-kacangan, dan produk susu."
          },
          {
            title: "Karbohidrat",
            description: "Sumber energi utama untuk aktivitas fisik dan fungsi otak. Pilih karbohidrat kompleks seperti biji-bijian utuh, buah-buahan, dan sayuran."
          },
          {
            title: "Lemak Sehat",
            description: "Penting untuk perkembangan otak dan penyerapan vitamin. Sumber yang baik termasuk alpukat, ikan berlemak, kacang-kacangan, dan minyak zaitun."
          },
          {
            title: "Kalsium",
            description: "Krusial untuk pertumbuhan tulang dan gigi yang kuat. Ditemukan dalam produk susu, sayuran hijau, dan makanan yang diperkaya kalsium."
          },
          {
            title: "Zat Besi",
            description: "Penting untuk perkembangan kognitif dan produksi sel darah merah. Sumber termasuk daging merah, kacang-kacangan, dan sayuran berdaun hijau."
          }
        ]
      },
      {
        type: "heading",
        content: "Menyusun Piring Makan Seimbang untuk Anak"
      },
      {
        type: "paragraph",
        content: "Cara sederhana untuk memastikan anak mendapatkan nutrisi seimbang adalah dengan mengikuti panduan 'piring makan seimbang'. Setengah piring harus terdiri dari buah-buahan dan sayuran, seperempat protein, dan seperempat karbohidrat kompleks. Tambahkan sedikit lemak sehat dan produk susu atau alternatifnya untuk melengkapi makanan."
      },
      {
        type: "tips",
        title: "Tips Menyajikan Makanan Sehat untuk Anak:",
        items: [
          "Sediakan berbagai warna buah dan sayur untuk memastikan beragam nutrisi",
          "Libatkan anak dalam perencanaan dan persiapan makanan",
          "Jadilah contoh dengan makan makanan sehat bersama anak",
          "Hindari menggunakan makanan sebagai hadiah atau hukuman",
          "Perkenalkan makanan baru berulang kali - mungkin butuh 10-15 kali sebelum anak menerimanya"
        ]
      },
      {
        type: "heading",
        content: "Tantangan Umum dan Solusinya"
      },
      {
        type: "paragraph",
        content: "Banyak orang tua menghadapi tantangan dalam memberi makan anak-anak mereka. Pemilih makanan, penolakan terhadap sayuran, dan preferensi untuk makanan olahan adalah masalah umum. Namun, dengan kesabaran dan strategi yang tepat, tantangan ini dapat diatasi."
      },
      {
        type: "paragraph",
        content: "Untuk anak yang pemilih, cobalah melibatkan mereka dalam persiapan makanan. Anak-anak lebih cenderung mencoba makanan yang telah mereka bantu siapkan. Sajikan sayuran dengan cara yang menarik, seperti dipotong dalam bentuk yang menyenangkan atau disajikan dengan saus dip sehat. Dan ingat, dibutuhkan waktu untuk mengembangkan selera - jangan menyerah!"
      },
      {
        type: "quote",
        content: "Kebiasaan makan sehat yang dibentuk pada masa kanak-kanak dapat bertahan seumur hidup, memberikan dasar untuk kesehatan dan kesejahteraan jangka panjang."
      },
      {
        type: "heading",
        content: "Membatasi Makanan Olahan dan Gula"
      },
      {
        type: "paragraph",
        content: "Makanan olahan dan minuman manis sering tinggi kalori tetapi rendah nutrisi. Konsumsi berlebihan dapat menyebabkan kenaikan berat badan, masalah gigi, dan bahkan meningkatkan risiko penyakit kronis seperti diabetes tipe 2. Meskipun tidak perlu menghilangkan makanan ini sepenuhnya, membatasinya adalah bagian penting dari diet sehat."
      },
      {
        type: "tips",
        title: "Cara Mengurangi Makanan Olahan dan Gula:",
        items: [
            "Baca label makanan dan pilih produk dengan gula dan sodium rendah",
            "Ganti minuman manis dengan air atau susu",
            "Tawarkan buah segar sebagai camilan dan makanan penutup",
            "Masak lebih banyak makanan di rumah sehingga Anda dapat mengontrol bahan-bahannya",
            "Ajarkan anak tentang pilihan makanan sehat dan mengapa itu penting"
          ]
        },
        {
          type: "heading",
          content: "Jadwal Makan yang Teratur"
        },
        {
          type: "paragraph",
          content: "Anak-anak berkembang dengan baik dalam rutinitas, dan ini berlaku juga untuk pola makan. Jadwal makan yang teratur membantu memastikan anak mendapatkan nutrisi yang mereka butuhkan dan mencegah kebiasaan ngemil yang tidak sehat. Idealnya, anak-anak harus makan tiga kali sehari dengan dua atau tiga camilan sehat di antaranya."
        },
        {
          type: "paragraph",
          content: "Sarapan sangat penting karena menyediakan energi dan nutrisi untuk memulai hari. Penelitian menunjukkan bahwa anak-anak yang sarapan secara teratur memiliki performa lebih baik di sekolah dan cenderung memiliki berat badan yang lebih sehat. Pastikan sarapan mencakup protein, karbohidrat kompleks, dan buah atau sayuran."
        },
        {
          type: "conclusion",
          content: "Memberikan nutrisi yang tepat untuk anak-anak kita adalah salah satu hal terpenting yang dapat kita lakukan sebagai orang tua. Dengan menyediakan berbagai makanan bergizi, membatasi makanan olahan dan gula, dan menjadi contoh kebiasaan makan yang sehat, kita dapat membantu anak-anak kita tumbuh menjadi individu yang sehat dan kuat. Ingat, tujuannya bukan kesempurnaan tetapi kemajuan - setiap langkah kecil menuju pola makan yang lebih sehat adalah langkah dalam arah yang benar."
        }
      ]
    },
    "keuangan-keluarga": {
      title: "Manajemen Keuangan Keluarga: Membangun Fondasi Finansial yang Kokoh",
      image: "/images/manajemen-keuangan.png",
      publishDate: "22 Juni 2023",
      author: "Budi Santoso, M.M.",
      authorRole: "Perencana Keuangan Keluarga",
      summary: "Strategi mengelola keuangan keluarga untuk mencapai stabilitas dan kesejahteraan finansial.",
      content: [
        {
          type: "paragraph",
          content: "Mengelola keuangan keluarga dengan bijak adalah keterampilan penting yang dapat membawa ketenangan pikiran dan keamanan finansial jangka panjang. Namun, bagi banyak keluarga, manajemen keuangan bisa menjadi sumber stres dan konflik. Dengan pemahaman yang tepat dan penerapan prinsip-prinsip keuangan yang sehat, setiap keluarga dapat membangun fondasi finansial yang kokoh untuk masa depan yang lebih cerah."
        },
        {
          type: "heading",
          content: "Membuat Anggaran Keluarga yang Efektif"
        },
        {
          type: "paragraph",
          content: "Anggaran adalah peta jalan keuangan keluarga Anda. Tanpa anggaran yang jelas, sangat mudah untuk kehilangan arah dan menghabiskan lebih dari yang Anda hasilkan. Anggaran yang efektif membantu Anda melacak pendapatan dan pengeluaran, mengidentifikasi area di mana Anda dapat menghemat, dan memastikan bahwa Anda menyisihkan uang untuk tujuan jangka panjang."
        },
        {
          type: "tips",
          title: "Langkah-langkah Membuat Anggaran Keluarga:",
          items: [
            "Hitung total pendapatan bulanan dari semua sumber",
            "Daftar semua pengeluaran tetap (sewa/KPR, utilitas, asuransi, dll.)",
            "Alokasikan dana untuk pengeluaran variabel (makanan, transportasi, hiburan)",
            "Sisihkan minimal 10-20% pendapatan untuk tabungan dan investasi",
            "Tinjau dan sesuaikan anggaran secara berkala"
          ]
        },
        {
          type: "paragraph",
          content: "Banyak keluarga menemukan bahwa metode 50/30/20 adalah cara sederhana namun efektif untuk mengatur anggaran: 50% pendapatan untuk kebutuhan, 30% untuk keinginan, dan 20% untuk tabungan dan pelunasan utang. Namun, rasio ini dapat disesuaikan berdasarkan situasi keuangan dan tujuan spesifik keluarga Anda."
        },
        {
          type: "heading",
          content: "Membangun Dana Darurat"
        },
        {
          type: "paragraph",
          content: "Kehidupan penuh dengan kejutan, dan tidak semua kejutan itu menyenangkan. Mobil rusak, masalah kesehatan mendadak, atau kehilangan pekerjaan dapat membebani keuangan keluarga jika Anda tidak siap. Dana darurat adalah jaring pengaman finansial Anda - uang yang disisihkan khusus untuk situasi tak terduga."
        },
        {
          type: "paragraph",
          content: "Idealnya, dana darurat Anda harus mencakup 3-6 bulan pengeluaran hidup. Ini memberikan bantalan yang cukup untuk mengatasi sebagian besar krisis tanpa harus beralih ke utang berbunga tinggi. Simpan dana darurat Anda di rekening yang mudah diakses seperti tabungan atau deposito, bukan di investasi yang berisiko atau sulit dicairkan."
        },
        {
          type: "quote",
          content: "Dana darurat bukan pengeluaran - itu adalah investasi dalam ketenangan pikiran dan keamanan finansial keluarga Anda."
        },
        {
          type: "heading",
          content: "Mengelola dan Mengurangi Utang"
        },
        {
          type: "paragraph",
          content: "Utang dapat menjadi beban berat bagi keuangan keluarga, terutama utang berbunga tinggi seperti kartu kredit. Mengelola dan secara aktif mengurangi utang adalah komponen penting dari kesehatan keuangan. Mulailah dengan membuat daftar semua utang Anda, termasuk saldo, suku bunga, dan pembayaran minimum."
        },
        {
          type: "list",
          title: "Strategi Pelunasan Utang yang Efektif:",
          items: [
            {
              title: "Metode Bola Salju",
              description: "Bayar utang dengan saldo terkecil terlebih dahulu sambil membayar minimum untuk yang lain. Setelah utang pertama lunas, tambahkan jumlah pembayarannya ke utang berikutnya."
            },
            {
              title: "Metode Avalanche",
              description: "Fokus pada utang dengan suku bunga tertinggi terlebih dahulu untuk meminimalkan jumlah total bunga yang dibayarkan."
            },
            {
              title: "Konsolidasi Utang",
              description: "Gabungkan beberapa utang berbunga tinggi menjadi satu pinjaman dengan bunga lebih rendah."
            },
            {
              title: "Negosiasi dengan Kreditur",
              description: "Beberapa kreditur mungkin bersedia menurunkan suku bunga atau menawarkan rencana pembayaran yang lebih fleksibel."
            }
          ]
        },
        {
          type: "heading",
          content: "Merencanakan untuk Masa Depan"
        },
        {
          type: "paragraph",
          content: "Manajemen keuangan yang baik tidak hanya tentang menangani kebutuhan saat ini, tetapi juga merencanakan masa depan. Ini termasuk menyiapkan dana pendidikan anak, merencanakan pensiun, dan memastikan keluarga Anda terlindungi melalui asuransi yang memadai."
        },
        {
          type: "paragraph",
          content: "Mulailah menabung untuk pendidikan anak-anak Anda sejak dini. Bahkan jumlah kecil yang disisihkan secara teratur dapat tumbuh secara signifikan dari waktu ke waktu berkat kekuatan bunga majemuk. Untuk pensiun, manfaatkan program pensiun yang disponsori pemberi kerja dan pertimbangkan untuk membuka rekening pensiun pribadi."
        },
        {
          type: "tips",
          title: "Jenis Asuransi yang Harus Dipertimbangkan Keluarga:",
          items: [
            "Asuransi kesehatan untuk melindungi dari biaya medis yang tinggi",
            "Asuransi jiwa untuk memberikan dukungan finansial jika terjadi hal terburuk",
            "Asuransi cacat untuk menggantikan pendapatan jika Anda tidak dapat bekerja",
            "Asuransi properti untuk melindungi rumah dan harta benda Anda",
            "Asuransi kendaraan untuk melindungi dari kerusakan dan kewajiban"
          ]
        },
        {
          type: "heading",
          content: "Mengajarkan Literasi Keuangan pada Anak"
        },
        {
          type: "paragraph",
          content: "Salah satu hadiah terbesar yang dapat Anda berikan kepada anak-anak Anda adalah pemahaman yang kuat tentang keuangan. Anak-anak yang belajar tentang uang sejak dini cenderung menjadi orang dewasa yang bertanggung jawab secara finansial. Mulailah dengan konsep-konsep dasar seperti menabung, membedakan antara kebutuhan dan keinginan, dan nilai kerja keras."
        },
        {
          type: "paragraph",
          content: "Saat anak-anak tumbuh, perkenalkan konsep yang lebih kompleks seperti bunga, investasi, dan kredit. Libatkan mereka dalam diskusi keuangan keluarga yang sesuai usia dan beri mereka kesempatan untuk membuat keputusan keuangan mereka sendiri. Pengalaman praktis ini sangat berharga untuk membangun keterampilan manajemen uang yang akan mereka gunakan seumur hidup."
        },
        {
          type: "conclusion",
          content: "Mengelola keuangan keluarga dengan efektif membutuhkan perencanaan, disiplin, dan komunikasi yang terbuka. Dengan membuat anggaran yang realistis, membangun dana darurat, mengelola utang dengan bijak, merencanakan masa depan, dan mengajarkan anak-anak tentang uang, Anda dapat menciptakan stabilitas finansial dan kesejahteraan bagi keluarga Anda. Ingat, perjalanan menuju kesehatan keuangan adalah maraton, bukan sprint - langkah-langkah kecil yang konsisten dari waktu ke waktu akan menghasilkan hasil yang signifikan."
        }
      ]
    }
  };
  
  // Article detail page component
  export default function ArticleDetailPage({
    params,
  }: {
    params: { category: string };
  }) {
    const { category } = params;
    
    // Check if the article exists
    if (!articles[category as keyof typeof articles]) {
      notFound();
    }
    
    const article = articles[category as keyof typeof articles];
  
    return (
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Header */}
        <div className="mb-8">
          <Link 
            href="/edukasi-keluarga" 
            className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-6"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Kembali ke Edukasi Keluarga
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span className="mr-4">{article.publishDate}</span>
            <span>Oleh: {article.author}, {article.authorRole}</span>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        
        {/* Article Summary */}
        <div className="bg-teal-50 border-l-4 border-teal-500 p-5 rounded-r-lg mb-10">
          <p className="text-lg text-gray-700 italic">{article.summary}</p>
        </div>
        
        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {article.content.map((section, index) => {
            switch (section.type) {
              case "paragraph":
                return <p key={index} className="mb-6 text-gray-700">{section.content}</p>;
              
              case "heading":
                return <h2 key={index} className="text-2xl font-bold text-gray-800 mt-10 mb-6">{section.content}</h2>;
              
              case "quote":
                return (
                  <blockquote key={index} className="border-l-4 border-teal-500 pl-4 italic my-8 text-gray-700">
                    {section.content}
                  </blockquote>
                );
              
              case "tips":
                return (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg my-8">
                    <h3 className="font-bold text-gray-800 mb-4">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items?.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2">
                          <div className="bg-teal-100 p-1 rounded-full mt-1 flex-shrink-0">
                            <svg className="w-3 h-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="text-gray-700">{typeof tip === 'string' ? tip : tip.description}</span>
                        </li>
                      ))}                    </ul>
                  </div>
                );
              
              case "list":
                return (
                  <div key={index} className="my-8">
                    <h3 className="font-bold text-gray-800 mb-4">{section.title}</h3>
                    <div className="space-y-4">
                      {section.items?.map((item, itemIndex) => (
                        typeof item === 'string' ? (
                          <div key={itemIndex} className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                            <p className="text-gray-700">{item}</p>
                          </div>
                        ) : (
                          <div key={itemIndex} className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                            <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                            <p className="text-gray-700">{item.description}</p>
                          </div>
                        )
                      ))}                    </div>
                  </div>
                );
              
              case "conclusion":
                return (
                  <div key={index} className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Kesimpulan</h2>
                    <p className="text-gray-700">{section.content}</p>
                  </div>
                );
              
              default:
                return null;
            }
          })}                           </div>
                           
                           {/* Author Info */}
                           {/* <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                             <h3 className="text-xl font-bold text-gray-800 mb-2">Tentang Penulis</h3>
                             <p className="text-gray-700">
                               <strong>{article.author}</strong> adalah {article.authorRole} dengan pengalaman lebih dari 15 tahun. 
                               Beliau berdedikasi untuk membantu keluarga Indonesia membangun kehidupan yang lebih baik melalui 
                               pendidikan dan pemberdayaan.
                             </p>
                           </div> */}
                           
                           {/* Related Articles */}
                           <div className="mt-12">
                             <h3 className="text-xl font-bold text-gray-800 mb-6">Artikel Terkait</h3>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               {Object.entries(articles)
                                 .filter(([key]) => key !== category)
                                 .map(([key, relatedArticle]) => (
                                   <Link 
                                     href={`/edukasi-keluarga/${key}`} 
                                     key={key}
                                     className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                                   >
                                     <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
                                       <Image
                                         src={relatedArticle.image}
                                         alt={relatedArticle.title}
                                         fill
                                         style={{ objectFit: "cover" }}
                                       />
                                     </div>
                                     <div>
                                       <h4 className="font-semibold text-gray-800 mb-1">{relatedArticle.title}</h4>
                                       <p className="text-sm text-gray-600 line-clamp-2">{relatedArticle.summary}</p>
                                     </div>
                                   </Link>
                                 ))}
                             </div>
                           </div>
                         </article>
                       );
                     }
                     