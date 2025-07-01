import React from "react";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom

const PromoList = () => {
  const promos = [
    {
      id: 1,
      title: "Promo Behel",
      image:
        "https://gaiadentalclinic.id/wp-content/uploads/2025/06/Desktop_Promo_Behel_Juni_2025-scaled.png",
      validUntil: "30 Agustus 2025", // DIUBAH ke Agustus
      path: "/PromoBehel",
    },
    {
      id: 2,
      title: "Promo Spesial",
      image:
        "https://gaiadentalclinic.id/wp-content/uploads/2025/06/Desktop_Promo_Bleaching_Juni_2025-scaled.png",
      validUntil: "30 Agustus 2025", // DIUBAH ke Agustus
      path: "/PromoSpesial",
    },
    {
      id: 3,
      title: "Promo Happy Hour",
      image:
        "https://gaiadentalclinic.id/wp-content/uploads/2025/06/Desktop_Promo_Happy_Hour_Juni_2025-scaled.png",
      validUntil: "30 Agustus 2025", // DIUBAH ke Agustus
      path: "/HappyHour",
    },
  ];

  const currentDate = new Date();
  // Untuk parsing tanggal, penting formatnya konsisten.
  // "30 Agustus 2025" bisa langsung diparsing oleh Date constructor.
  // Pastikan format string tanggal sesuai dengan yang dapat dipahami oleh new Date().
  // Misalnya, jika ada masalah, ubah menjadi "Aug 30, 2025"
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-teal-700">
        Promo Gaia Dental Clinic
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {promos.map((promo) => {
          const promoEndDate = new Date(promo.validUntil); // Langsung parsing string tanggal
          const isPromoExpired = currentDate > promoEndDate;

          return (
            <div
              key={promo.id}
              className="bg-white rounded-xl shadow-md overflow-hidden text-center flex flex-col"
            >
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full object-contain h-48 sm:h-64 md:h-72"
              />
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold">{promo.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">Periode Promo</p>
                  <p className={`text-sm mb-3 ${isPromoExpired ? 'text-red-600 font-bold' : 'text-green-600 font-bold'}`}> {/* Warna hijau jika aktif */}
                    Berlaku Sampai {promo.validUntil}
                    {isPromoExpired && <span className="ml-2">(Telah Berakhir)</span>}
                  </p>
                </div>
                
                <Link
                  to={promo.path}
                  className={`block w-full py-2 rounded-md text-sm font-medium transition duration-300
                    ${isPromoExpired ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#165A5A] hover:bg-[#1D5B5C]'}
                    text-white mt-auto`}
                  aria-disabled={isPromoExpired}
                  onClick={(e) => isPromoExpired && e.preventDefault()}
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PromoList;