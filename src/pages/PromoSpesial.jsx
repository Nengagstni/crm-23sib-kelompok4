import React from 'react';
import { Link } from 'react-router-dom'; // Import Link untuk tombol navigasi

const PromoSpesial = () => {
  const promoEndDate = new Date('2025-08-30'); // Asumsi promo ini juga berakhir 30 Agustus 2025
  const currentDate = new Date();
  const isPromoExpired = currentDate > promoEndDate;

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full">
        {/* Promo Image Section (PROMO BLEACHING etc.) */}
        <div className="relative w-full h-auto">
          {/* Pastikan path gambar ini benar atau letakkan di folder public
              Menggunakan URL dari PromoList sebelumnya yang cocok dengan gambar ini */}
          <img
            src="https://gaiadentalclinic.id/wp-content/uploads/2025/06/Desktop_Promo_Bleaching_Juni_2025-scaled.png"
            alt="Promo Bleaching & Lainnya"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Promo Content Section */}
        <div className="p-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <p className="mb-4 font-bold text-gray-800">Lebih Mudah, Lebih Hemat!</p>
          <p className="mb-4">Perawatan Gigi di Seluruh Cabang GAIA Dental Clinic.</p>
          <p className="mb-6">Manfaatkan berbagai PROMO perawatan hanya untuk Sahabat GAIA:</p>

          {/* 1. Tampil Cantik dengan Gigi yang Lebih Putih */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-2">1. Tampil cantik dengan gigi yang lebih putih melalui perawatan Veneer</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Veneer Indirect hanya 3 jt per gigi + GRATIS konsultasi dan pemeriksaan lengkap dengan kamera intraoral</li>
              <li>Veneer Direct hanya Rp 700.000 per gigi + GRATIS konsultasi dan pemeriksaan lengkap dengan kamera intraoral</li>
            </ul>
          </div>

          {/* 2. Kembalikan warna gigi cerah alami */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-2">2. Kembalikan warna gigi cerah alami! Sahabat secara instan dengan Sparkling White Bleaching (pemutihan gigi) hanya Rp 1.750.000</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>GRATIS Scaling</li>
              <li>GRATIS Pengolesan Gel Anti Linu</li>
            </ul>
          </div>

          {/* 3. Perawatan Gigi Anak */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-2">3. Perawatan Gigi Anak hanya Rp 250.000</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>GRATIS konsultasi dan pemeriksaan lengkap dengan kamera intraoral</li>
              <li>GRATIS pembersihan plak gigi pada anak</li>
              <li>GRATIS pemberian vitamin gigi anak (fluoride)</li>
            </ul>
          </div>

          {/* 4. Scaling Couple */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-2">4. Scaling Couple (pembersihan karang gigi) bersama pasangan/sahabat hanya Rp 599.000</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Ketebalan apapun</li>
              <li>GRATIS konsultasi dan pemeriksaan lengkap dengan kamera intraoral</li>
              <li>GRATIS Polishing</li>
            </ul>
          </div>

          <p className="mb-4">
            Dapatkan promo ini hanya hingga akhir bulan ini Sahabat*.
          </p>
          <p className="mb-8">
            Yukk buruan reservasi Sahabat sebelum promonya berakhir!!
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

export default PromoSpesial;