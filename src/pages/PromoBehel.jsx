import React from 'react';
import { Link } from 'react-router-dom'; // Import Link untuk tombol navigasi

const PromoBehel = () => {
  const promoEndDate = new Date('2025-08-30'); // Sesuaikan dengan tanggal akhir promo yang sebenarnya
  const currentDate = new Date();
  const isPromoExpired = currentDate > promoEndDate;

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full">
        {/* Promo Image Section */}
        <div className="relative w-full h-auto">
          {/* Pastikan path gambar ini benar atau letakkan di folder public */}
          <img
            src="https://gaiadentalclinic.id/wp-content/uploads/2025/06/Desktop_Promo_Behel_Juni_2025-scaled.png"
            alt="Special Promo Behel"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Promo Content Section */}
        <div className="p-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <p className="mb-4">
            Pemasangan Behel di GAIA Dental Clinic ditangani langsung oleh Dokter Gigi yang profesional, berpengalaman, dan ahli di bidangnya loh Sahabat. Dokter Gigi GAIA juga telah berhasil menangani ratusan kasus dengan hasil yang optimal. Pilihan jenis behel yang tersedia di GAIA Dental Clinic pun lengkap dan berkualitas tinggi (Made in USA) dengan menggunakan alat canggih dan terkini.
          </p>
          <p className="mb-6 font-bold">
            LIMITED OFFER: Discount up to 45% + voucher Bleaching discount 60%*
          </p>

          <ol className="list-decimal list-inside mb-6 space-y-1">
            <li>GRATIS pemeriksaan dan konsultasi</li>
            <li>GRATIS scaling (pembersihan karang gigi)</li>
            <li>GRATIS cetak rahang</li>
            <li>GRATIS paket sikat gigi</li>
            <li>HARGA SPESIAL bleaching discount 60% (opsional)</li>
          </ol>

          <p className="mb-4">
            Nah, Sahabat bisa intip nih berbagai jenis Behel yang tersedia di GAIA Dental Clinic:
          </p>

          {/* 1. Behel Metal */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-2">1. Behel Metal</h3>
            <p className="mb-2">
              Terbuat dari Bahan Metal, anti karat berkualitas tinggi, berbentuk kotak kecil yang melekat pada permukaan gigi, dan karet warna-warni ikonik pada bagian bracketnya.
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Metal Bronze</li>
              <li>Metal Silver</li>
              <li>Metal Gold</li>
              <li>Metal Diamond</li>
            </ul>
          </div>

          {/* 2. Behel Sapphire */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-2">2. Behel Sapphire</h3>
            <p>
              Jenis behel dengan efektivitas yang baik dan daya cengkram yang kuat. Behel ini bersifat transparan/ bening sehingga terlihat lebih mewah dan cocok untuk Sahabat yang ingin tampil lebih gaya karena tidak terlalu menarik perhatian dengan telah didesain menyerupai warna gigi.
            </p>
          </div>

          {/* 3. Behel Self-Ligating */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-2">3. Behel Self-Ligating</h3>
            <p>
              Jenis Behel terbaru yang dapat bergerak lebih cepat dan tidak menggunakan karet elastis untuk mengikat kawat bracket gigi, hal ini berkat desain dengan slot khusus yang dapat menjaga kawat tetap stabil sehingga membuat pergerakan rahang maupun gigi juga lebih fleksibel.
            </p>
          </div>

          <p className="mb-8">
            Sahabat bisa buat janji untuk Konsultasi GRATIS dengan Dokter Sekarang!! Ditunggu yaa..
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              to="/PromoList" // Mengarahkan kembali ke halaman daftar promo
              className="bg-[#EFD070] text-[#1D5B5C] font-bold py-3 px-8 rounded-lg border border-[#EFD070] hover:bg-opacity-90 text-center transition duration-300"
            >
              Cek Promo Lainnya
            </Link>
            <a
              href="https://wa.me/6281234567890" // Ganti dengan nomor WhatsApp klinik
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#165A5A] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-[#1D5B5C] text-center transition duration-300"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBehel;