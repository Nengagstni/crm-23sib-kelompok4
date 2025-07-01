import React from 'react';
import { Link } from 'react-router-dom'; // Import Link untuk tombol navigasi

const PromoHappyHour = () => {
  const promoEndDate = new Date('2025-08-30'); // Asumsi promo ini juga berakhir 30 Agustus 2025
  const currentDate = new Date();
  const isPromoExpired = currentDate > promoEndDate;

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full">
        {/* Promo Image Section (HAPPY HOUR) */}
        <div className="relative w-full h-auto">
          {/* Pastikan path gambar ini benar atau letakkan di folder public
              Menggunakan URL dari PromoList sebelumnya yang cocok dengan gambar ini */}
          <img
            src="https://gaiadentalclinic.id/wp-content/uploads/2025/06/Desktop_Promo_Happy_Hour_Juni_2025-scaled.png"
            alt="Happy Hour Promo"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Promo Content Section */}
        <div className="p-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <p className="mb-4 font-bold text-gray-800">HAPPY HOUR IS BACK!!</p>
          <p className="mb-4">
            Hai Sahabat GAIA, balik lagi nih dengan perawatan gigi super yang ramah dikantong! Apalagi diskonnya sampai 1 juta Sahabat 😉
          </p>
          <p className="mb-6">
            Ini nih yang gak boleh dilewatin, tersedia promo Happy Hour untuk perawatan scaling dan bleaching setiap Selasa s/d Jum'at dari jam 09.00-13.00 dengan tarif "dibawah normal", pas bangetkan untuk kita-kita yang ingin tambah berhemat. Setelah lewat jam satu siang, harga akan kembali normal lho Sahabat!
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

export default PromoHappyHour;