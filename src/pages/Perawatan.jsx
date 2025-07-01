import React from 'react';
import { useNavigate } from 'react-router-dom';

const availableTreatments = [
  {
    id: 'pt_1',
    name: 'Pembersihan Karang Gigi',
    price: '350.000',
    image: 'https://tse2.mm.bing.net/th/id/OIP.fo_-7FxZc-DUhT3To5tneAHaE7?pid=Api&P=0&h=180',
  },
  {
    id: 'pt_2',
    name: 'Behel Gigi',
    price: '4.000.000',
    image: 'https://tse3.mm.bing.net/th/id/OIP.RuIzE37HD4F_4CJtfE9QTgHaE5?pid=Api&P=0&h=180',
  },
  {
    id: 'pt_3',
    name: 'Perawatan Saluran Akar Gigi',
    price: '800.000',
    image: 'https://tse4.mm.bing.net/th/id/OIP.FEOJTHoDqv78NVv5rCyIEwHaE8?pid=Api&P=0&h=180',
  },
  {
    id: 'pt_4',
    name: 'Veneer Gigi',
    price: '2.000.000/Gigi',
    image: 'https://tse4.mm.bing.net/th/id/OIP.u_le5-MeJjatFRkSQk7vIgHaE8?pid=Api&P=0&h=180',
  },
  {
    id: 'pt_5',
    name: 'Tambal Gigi',
    price: '100.000/Gigi',
    image: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/09/08082018/Tambal-Gigi-1.jpg',
  },
  {
    id: 'pt_6',
    name: 'Gigi Palsu',
    price: '1.000.000',
    image: 'https://tse2.mm.bing.net/th/id/OIP.wwAOI_8W5qVlnFUilDa4KAHaE5?pid=Api&P=0&h=180',
  },
  {
    id: 'pt_7',
    name: 'Pencabutan Gigi',
    price: '300.000',
    image: 'https://tse3.mm.bing.net/th/id/OIP.6fZdcqVr_GjDmdSpSxJabgHaEK?pid=Api&P=0&h=180',
  },
  {
    id: 'pt_8',
    name: 'Pembersihan Gigi Anak',
    price: '250.000',
    image: 'https://imaya.clinic/wp-content/uploads/2023/11/pexels-nadezhda-moryak-7800568-1024x683.jpg',
  },
];

const Perawatan = () => {
  const navigate = useNavigate();

  const colors = {
    primaryDark: "#1D5B5C",
    primaryMedium: "#3A7E7F",
    accentGold: "#EFD070",
    accentGoldDark: "#B88E00",
    softBackground: "#F9FAFB",
    cardBackground: "#FFFFFF",
    formBackground: "#FFFDF5",
    textMuted: "#6B7280",
    borderLight: "#D1D5DB",
    buttonPrimaryHover: "#144D4E",
    buttonAccentHover: "#FFD94D",
    deleteRed: "#D64545",
    deleteRedHover: "#FF5C5C",
    infoBlue: "#3B82F6",
    infoBlueBg: "#DBEAFE",
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: colors.softBackground }}>
      <div className="w-full py-10 shadow-lg text-white text-center rounded-b-3xl" style={{ backgroundColor: colors.primaryDark }}>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">PERAWATAN</h1>
        <p className="text-lg mt-2 opacity-90">Jelajahi berbagai pilihan perawatan gigi terbaik kami.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {availableTreatments.map((treatment) => (
          <div
            key={treatment.id}
            className="relative flex flex-col rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
            style={{ backgroundColor: colors.accentGold, border: `2px solid ${colors.accentGoldDark}` }}
          >
            <div className="w-full h-56 relative overflow-hidden rounded-t-2xl">
              <img
                src={treatment.image}
                alt={treatment.name}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
            </div>

            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: colors.primaryDark }}>{treatment.name}</h2>
                <p className="text-xl font-semibold mb-4" style={{ color: colors.buttonPrimaryHover }}>Rp. {treatment.price}</p>
              </div>
              <button
                className="w-full py-3 rounded-full font-bold text-lg flex items-center justify-center gap-2 mt-4 bg-[#1D5B5C] hover:bg-[#144D4E] text-white shadow-md transform transition duration-300 hover:scale-105 active:scale-95"
                onClick={() => navigate('/reservasi')}
              >
                Reservasi Sekarang
                <span className="ml-2 text-xl">➡️</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center py-12 text-gray-600" style={{ backgroundColor: colors.softBackground }}>
        <p>&copy; {new Date().getFullYear()} Klinik Gigi Sehat. Semua Hak Dilindungi.</p>
      </div>
    </div>
  );
};

export default Perawatan;