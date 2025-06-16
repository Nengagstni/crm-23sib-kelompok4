import React from "react";

const PromoList = () => {
  const promos = [
    {
      id: 1,
      title: "Promo Behel",
      image:
        "https://gaiadentalclinic.id/wp-content/uploads/2025/06/Desktop_Promo_Behel_Juni_2025-scaled.png",
      validUntil: "30 Juni 2025",
    },
    {
      id: 2,
      title: "Promo Spesial",
      image:
        "https://gaiadentalclinic.id/wp-content/uploads/2025/06/Desktop_Promo_Bleaching_Juni_2025-scaled.png",
      validUntil: "30 Juni 2025",
    },
    {
      id: 3,
      title: "Promo Happy Hour",
      image:
        "https://gaiadentalclinic.id/wp-content/uploads/2025/06/Desktop_Promo_Happy_Hour_Juni_2025-scaled.png",
      validUntil: "30 Juni 2025",
    },
  ];

  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-teal-700">
        Promo Gaia Dental Clinic
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {promos.map((promo) => (
          <div
            key={promo.id}
            className="bg-white rounded-xl shadow-md overflow-hidden text-center"
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold">{promo.title}</h4>
              <p className="text-sm text-gray-500 mt-1">Periode Promo</p>
              <p className="text-gray-700 text-sm mb-3">
                Berlaku Sampai {promo.validUntil}
              </p>
              <button className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-1 rounded-md text-sm">
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoList;
