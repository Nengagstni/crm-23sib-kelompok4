import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Pastikan Link sudah diimport
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Komponen ContentManagement yang terintegrasi
const ContentManagement = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Bagian Pelayanan */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-white py-12 px-6 gap-6">
        <img
          src="/assets/pelayanan.png" // Ganti sesuai file Anda
          alt="Layanan Pelanggan"
          className="w-80 rounded-xl shadow-lg"
        />
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-4">Pelayanan Sepenuh Hati 200%</h2>
          <p className="text-gray-700 mb-6">
            Kami selalu berusaha memberikan pelayanan yang melebihi ekspektasi
            pasien. Kebahagiaan pasien adalah kebahagiaan kami.
          </p>
          {/* Menggunakan komponen Link */}
          <Link
            to="/profil-kami" // Ganti dengan path rute yang sesuai di aplikasi Anda
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md inline-block"
          >
            Profil Kami
          </Link>
        </div>
      </section>

      {/* Bagian Fasilitas */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-white py-12 px-6 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-4">
            Fasilitas Nyaman, Alat Standar Internasional
          </h2>
          <p className="text-gray-700 mb-6">
            Kami percaya dengan fasilitas dan alat yang modern, setiap pasien
            akan dengan senang hati datang ke klinik untuk merawat giginya. Tidak
            takut lagi deh datang ke dokter gigi!
          </p>
          {/* Menggunakan komponen Link */}
          <Link
            to="/fasilitas-kami" // Ganti dengan path rute yang sesuai di aplikasi Anda
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md inline-block"
          >
            Fasilitas Kami
          </Link>
        </div>
        <img
          src="/assets/fasilitas.png" // Ganti sesuai file Anda
          alt="Fasilitas Klinik"
          className="w-80 rounded-xl shadow-lg"
        />
      </section>

      {/* Bagian Tim Profesional */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-white py-12 px-6 gap-6">
        <img
          src="/assets/tim-profesional.png" // Ganti sesuai file Anda
          alt="Tim Medis Profesional"
          className="w-80 rounded-xl shadow-lg"
        />
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-4">Dokter dan Perawat yang Profesional</h2>
          <p className="text-gray-700 mb-6">
            Setiap tenaga medis yang melayani, dipastikan sudah memiliki
            sertifikasi lengkap agar hasil kerja sesuai standar terbaik untuk
            setiap pasien.
          </p>
          {/* Menggunakan komponen Link */}
          <Link
            to="/tim-kami" // Ganti dengan path rute yang sesuai di aplikasi Anda
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md inline-block"
          >
            Tim Kami
          </Link>
        </div>
      </section>
    </main>
  );
};

const clinics = [
  {
    name: 'GAIA Dental Pekanbaru',
    address: 'Jl. Riau No.26, Pekanbaru, Riau',
    phone: '+62-812-3000-2677',
  },
  {
    name: 'Padang Veteran',
    address: 'Jl. Veteran No.74 D, Padang Barat, Padang',
    phone: '0812-7755-1334',
  },
  {
    name: 'Padang Simpang Haru',
    address: 'Jl. Andalas No.6, Padang Timur, Padang',
    phone: '0812-7788-2522',
  },
  {
    name: 'Bukittinggi',
    address: 'Jl. Raya Kapas Panji, Agam',
    phone: '0812-7788-2522',
  },
];

const services = [
  'Pembersihan Karang Gigi',
  'Behel Gigi (Orthodonti)',
  'Veneer Gigi',
  'Pemutihan Gigi (Bleaching)',
  'Perawatan Saluran Akar',
  'Tambal Gigi',
];

const sliderImages = [
  'https://gaiadentalclinic.id/wp-content/uploads/2023/08/1.-Lobby-A-1074x800.jpg',
  'https://gaiadentalclinic.id/wp-content/uploads/2023/08/2.-Lobby-B-1074x800.jpg',
  'https://gaiadentalclinic.id/wp-content/uploads/2023/08/3.-Ruang-Tindakan-A-1074x800.jpg',
];

const Home = () => {
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
    clinic: '',
    date: '',
    time: '',
    complaint: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservasi dikirim, tim kami akan menghubungi segera.');
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* Hero */}
      {/* Anda bisa menambahkan konten bagian Hero di sini jika ada */}

      {/* Tentang Kami dengan Slider */}
      <section className="bg-[#F7F7F7] py-12 w-full">
        <div className="max-w-5xl mx-auto px-4">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-xl"
          >
            {sliderImages.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`slide-${i}`}
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <p className="mt-6 text-gray-700 text-left">
            GAIA Dental Clinic adalah salah satu klinik dokter gigi terbaik di Sumatera yang berkomitmen
            memberikan pelayanan, kualitas kerja, dan fasilitas yang melebihi ekspektasi pasien.
          </p>
        </div>
      </section>

      {/* Layanan */}
      <section className="w-full py-12 bg-white">
        <h3 className="text-2xl font-semibold text-[#1D5B5C] text-center mb-6">Layanan Kami</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto px-4">
          {services.map((s, i) => (
            <li
              key={i}
              className="bg-white text-center p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* Bagian-bagian Manajemen Konten */}
      <ContentManagement /> {/* Di sinilah komponen ContentManagement dirender */}

      {/* Klinik */}
      <section className="bg-[#FDF9EE] py-12">
        <h3 className="text-2xl font-semibold text-[#1D5B5C] text-center mb-6">Lokasi Klinik Kami</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
          {clinics.map((c, i) => (
            <div
              key={i}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white"
            >
              <h4 className="font-semibold text-lg">{c.name}</h4>
              <p className="text-gray-600">{c.address}</p>
              <p className="text-gray-600 mt-1">{c.phone}</p>
              <button
                onClick={() => nav('/reservasi')}
                className="mt-4 px-4 py-2 bg-[#EFD070] rounded-full font-semibold hover:bg-yellow-500 transition"
              >
                Reservasi
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;