// src/pages/FasilitasKami.jsx
import React from 'react';

const fasilitas = [
  {
    title: 'Ruang Tunggu yang Nyaman',
    description: `Ruang tunggu di GAIA Dental Clinic dibuat dengan konsep desain interior yang modern, minimalis, namun tetap mengedepankan kenyamanan.`,
    image: 'https://gaiadentalclinic.id/wp-content/uploads/2023/08/1.-Lobby-A-1536x1144.jpg', // ganti dengan path sesuai lokasi file kamu
    reverse: false,
  },
  {
    title: 'Peralatan Dental Standar Internasional',
    description: `GAIA Dental Clinic sebagai one stop solution permasalahan gigi dan mulut Sahabat, memiliki ruang perawatan yang dilengkapi dengan alat modern dan berstandar internasional, seperti kamera intra oral yang mampu memperlihatkan kondisi rongga mulut pasien secara detail, foto rontgen periapikal untuk menganalisa jaringan penyangga gigi, saluran akar gigi, dan tulang, serta alat electrosurgery untuk tindakan pembedahan serta alat canggih lainnya.`,
    image: 'https://gaiadentalclinic.id/wp-content/uploads/2023/05/Dental-Chair-Dental-A-1536x1152.jpg',
    reverse: true,
  },
  {
    title: 'Kemudahan Transaksi & Kerjasama Dengan Asuransi',
    description: `GAIA Dental Clinic telah bekerja sama dengan berbagai partner penyedia asuransi dan korporasi dalam rangka memastikan kemudahan pasien untuk mendapatkan perawatan gigi berkualitas oleh dokter gigi kami yang profesional.`,
    image: 'https://gaiadentalclinic.id/wp-content/uploads/2023/05/Meja-resepsionis-1536x1152.jpg',
    reverse: false,
  },
];

export default function FasilitasKami() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-12">Fasilitas Kami</h1>
      {fasilitas.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            item.reverse ? 'md:flex-row-reverse' : ''
          } items-center gap-10 mb-20`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full md:w-1/2 rounded-2xl shadow-lg"
          />
          <div className="md:w-1/2 text-justify">
            <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
