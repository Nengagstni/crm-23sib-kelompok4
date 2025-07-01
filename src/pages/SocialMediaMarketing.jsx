import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const SocialMediaMarketing = () => {
  const promos = [
    {
      title: 'Promo Whitening Gigi',
      description: 'Dapatkan senyum cerah dengan diskon 20% untuk layanan pemutihan gigi selama bulan ini!',
      image: 'https://gaiadentalclinic.id/wp-content/uploads/2023/04/Promo-Whitening.jpg',
    },
    {
      title: 'Paket Behel Lengkap',
      description: 'Paket behel lengkap mulai dari Rp 2.999.000 termasuk konsultasi dan kontrol rutin.',
      image: 'https://gaiadentalclinic.id/wp-content/uploads/2023/04/Promo-Behel.jpg',
    },
    {
      title: 'Pembersihan Karang Gigi',
      description: 'Nikmati gigi bersih dan sehat hanya Rp 149.000! Gratis konsultasi dokter gigi.',
      image: 'https://gaiadentalclinic.id/wp-content/uploads/2023/04/promo-scaling.jpg',
    },
  ];

  const sharePromo = (platform, promo) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${promo.title} - ${promo.description}`);

    let shareUrl = '';
    if (platform === 'wa') {
      shareUrl = `https://wa.me/?text=${text}%20${url}`;
    } else if (platform === 'fb') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === 'ig') {
      alert('Instagram tidak mendukung direct share link. Silakan salin secara manual.');
      return;
    }

    window.open(shareUrl, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-6xl mx-auto p-6 mt-10 flex-grow">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Social Media Marketing</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {promos.map((promo, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-5">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{promo.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{promo.description}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => sharePromo('wa', promo)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded flex items-center gap-1 text-sm"
                >
                  <FaWhatsapp /> WA
                </button>
                <button
                  onClick={() => sharePromo('fb', promo)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded flex items-center gap-1 text-sm"
                >
                  <FaFacebook /> FB
                </button>
                <button
                  onClick={() => sharePromo('ig', promo)}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded flex items-center gap-1 text-sm"
                >
                  <FaInstagram /> IG
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
     
    </div>
  );
};

export default SocialMediaMarketing;
