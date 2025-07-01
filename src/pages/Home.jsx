import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// --- IMPORTANT: Ensure Font Awesome is linked in your public/index.html ---
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" referrerpolicy="no-referrer" />
// (Replace "..." with the actual integrity hash for security)


// Komponen ContentManagement (didefinisikan secara internal di Home.js)
const ContentManagement = () => {
  return (
    <main className="bg-white text-gray-800 py-16">
      {/* Pelayanan Section */}
      <section className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-xl">
          <img
            src="https://gaiadentalclinic.id/wp-content/uploads/2023/05/CS.png"
            alt="Layanan Pelanggan"
            className="w-full max-w-sm rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Pelayanan Sepenuh Hati <span className="text-yellow-600">200%</span>
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Kami selalu berusaha memberikan pelayanan yang melebihi ekspektasi pasien. Kebahagiaan pasien adalah kebahagiaan kami.
            </p>
            <Link
              to="/TentangKami"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>

      {/* Fasilitas Section */}
      <section className="container mx-auto px-6 mb-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Fasilitas Nyaman, Alat <span className="text-blue-600">Standar Internasional</span>
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Dengan fasilitas dan alat yang modern, pasien akan senang datang ke klinik. Tidak takut lagi deh ke dokter gigi!
            </p>
            <Link
              to="/FasilitasKami"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Lihat Fasilitas
            </Link>
          </div>
          <img
            src="https://gaiadentalclinic.id/wp-content/uploads/2023/05/Foto2-8-1.png"
            alt="Fasilitas Klinik"
            className="w-full max-w-sm rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </section>

      {/* Tim Profesional Section */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-xl">
          <img
            src="https://gaiadentalclinic.id/wp-content/uploads/2023/05/Foto2-6-1.png"
            alt="Tim Medis Profesional"
            className="w-full max-w-sm rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Dokter dan Perawat yang <span className="text-green-600">Profesional</span>
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Tenaga medis kami sudah bersertifikasi lengkap dan berpengalaman, demi hasil kerja yang terbaik untuk setiap pasien.
            </p>
            <Link
              to="/Profile"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Kenali Tim Kami
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

// Data for clinics, services, and slider images
const clinics = [
  {
    name: 'GAIA Dental Pekanbaru',
    address: 'Jl. Riau No.26, Pekanbaru, Riau',
    phone: '+62-812-3000-2677',
    googleMaps: 'https://maps.app.goo.gl/YourPekanbaruClinicLink' // Placeholder for actual map link
  },
  {
    name: 'Padang Veteran',
    address: 'Jl. Veteran No.74 D, Padang Barat, Padang',
    phone: '0812-7755-1334',
    googleMaps: 'https://maps.app.goo.gl/YourPadangVeteranClinicLink'
  },
  {
    name: 'Padang Simpang Haru',
    address: 'Jl. Andalas No.6, Padang Timur, Padang',
    phone: '0812-7788-2522',
    googleMaps: 'https://maps.app.goo.gl/YourPadangSimpangHaruClinicLink'
  },
  {
    name: 'Bukittinggi',
    address: 'Jl. Raya Kapas Panji, Agam',
    phone: '0812-7788-2522',
    googleMaps: 'https://maps.app.goo.gl/YourBukittinggiClinicLink'
  },
];

// Enhanced services data with icons and descriptions
const services = [
  {
    name: 'Pembersihan Karang Gigi',
    icon: 'fas fa-tooth', // Font Awesome icon class
    description: 'Menjaga kebersihan mulut optimal dengan pembersihan karang gigi profesional.'
  },
  {
    name: 'Behel Gigi (Orthodonti)',
    icon: 'fas fa-align-left', // Icon for alignment/braces
    description: 'Koreksi posisi gigi untuk senyum rapi dan gigitan sempurna.'
  },
  {
    name: 'Veneer Gigi',
    icon: 'fas fa-grin-stars', // Icon for beautiful smile
    description: 'Solusi estetik untuk mengubah bentuk dan warna gigi secara instan.'
  },
  {
    name: 'Pemutihan Gigi (Bleaching)',
    icon: 'fas fa-lightbulb', // Icon for brightness
    description: 'Mencerahkan gigi Anda beberapa tingkat lebih putih, aman dan efektif.'
  },
  {
    name: 'Perawatan Saluran Akar',
    icon: 'fas fa-skull-crossbones', // Icon for internal tooth issues (reversed connotation, but common)
    description: 'Mengatasi infeksi dan menyelamatkan gigi yang rusak parah.'
  },
  {
    name: 'Tambal Gigi',
    icon: 'fas fa-fill-drip', // Icon for filling
    description: 'Memperbaiki gigi berlubang atau rusak agar kembali berfungsi normal.'
  },
  {
    name: 'Pencabutan Gigi',
    icon: 'fas fa-minus-circle', // Icon for removal
    description: 'Prosedur aman untuk mencabut gigi yang bermasalah dan tidak dapat dipertahankan.'
  },
  {
    name: 'Gigi Palsu',
    icon: 'fas fa-teeth-open', // Icon for dentures
    description: 'Menggantikan gigi yang hilang untuk mengembalikan fungsi kunyah dan estetika.'
  },
];

const sliderImages = [
  'https://gaiadentalclinic.id/wp-content/uploads/2025/06/HOMEPAGE-1-scaled.png',
  'https://gaiadentalclinic.id/wp-content/uploads/2025/06/HOMEPAGE-2-scaled.png',
  'https://gaiadentalclinic.id/wp-content/uploads/2025/06/coming-soon-3-scaled.png',
  'https://gaiadentalclinic.id/wp-content/uploads/2025/06/Desktop_Promo_Behel_Juni_2025-scaled.png',
];

// Main Home component
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
    console.log("Reservasi Data:", form);
    alert('Reservasi Anda telah diterima! Tim kami akan segera menghubungi Anda untuk konfirmasi.');
    setForm({
      name: '',
      email: '',
      whatsapp: '',
      clinic: '',
      date: '',
      time: '',
      complaint: '',
    });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero Slider Section */}
      <section className="bg-[#F7F7F7] py-12 w-full">
        <div className="w-full px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]} // Added Autoplay
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }} // Autoplay settings
              spaceBetween={30}
              slidesPerView={1}
              className="rounded-2xl shadow-xl"
            >
              {sliderImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`slide-${i}`}
                    className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-[#1D5B5C] mb-2">
                KUNJUNGI KLINIK GIGI
              </h1>
              <p className="text-lg text-[#CCAF3B] font-medium">
                TERDEKAT DENGAN LOKASI SAHABAT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="w-full py-16 bg-gradient-to-b from-white to-teal-50"> {/* Changed gradient end color */}
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Layanan <span className="text-teal-600">Unggulan</span> Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-6"> {/* Adjusted grid for better visual balance */}
          {services.map((service, i) => (
            <Link
              to="/perawatan" // Link all service cards to the /perawatan page
              key={i}
              className="relative bg-white text-center p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-teal-400 transition-all duration-300 ease-in-out
                         transform hover:-translate-y-2 hover:scale-105 group overflow-hidden" // Added transform, group, overflow-hidden
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl"></div> {/* Hover overlay */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="bg-teal-100 rounded-full p-4 mb-5 shadow-inner transition-all duration-300 group-hover:bg-teal-500 group-hover:text-white"> {/* Icon background */}
                  <i className={`${service.icon} text-teal-600 text-5xl transition-all duration-300 group-hover:text-white`}></i>
                </div>
                <h3 className="font-bold text-2xl text-gray-900 mb-3 group-hover:text-teal-800 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-700 text-md leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Content Management Sections (Pelayanan, Fasilitas, Tim Profesional) */}
      <ContentManagement />

      {/* Clinic Locations Section */}
      <section className="bg-gradient-to-t from-blue-50 to-white py-16">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Kunjungi <span className="text-blue-600">Klinik Kami</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
          {clinics.map((c, i) => (
            <div
              key={i}
              className="p-8 border border-blue-100 rounded-2xl shadow-lg bg-white flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <h3 className="font-bold text-2xl text-blue-800 mb-3">{c.name}</h3>
              <p className="text-gray-700 mb-2 leading-relaxed">{c.address}</p>
              <p className="text-blue-600 font-medium mb-4">{c.phone}</p>
              <div className="flex flex-col gap-3 w-full">
                <a
                  href={`tel:${c.phone}`}
                  className="w-full px-5 py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors duration-300 text-center"
                >
                  Hubungi Kami
                </a>
                {c.googleMaps && (
                    <a
                      href={c.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-5 py-2 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors duration-300 text-center"
                    >
                      Lihat di Maps
                    </a>
                )}
                <button
                  onClick={() => nav('/reservasi')}
                  className="w-full px-5 py-2 bg-yellow-500 text-gray-900 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 text-center"
                >
                  Buat Reservasi
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation Form Section */}
      {/* <section className="bg-gray-800 py-16 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
            Pesan Jadwal <span className="text-yellow-400">Anda Sekarang</span>
          </h2>
          <form onSubmit={handleSubmit} className="bg-gray-900 p-10 rounded-2xl shadow-xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 placeholder-gray-400"
                  placeholder="Nama Anda"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 placeholder-gray-400"
                  placeholder="email@contoh.com"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="whatsapp" className="block text-gray-300 text-sm font-bold mb-2">Nomor WhatsApp</label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 placeholder-gray-400"
                  placeholder="Contoh: 081234567890"
                  required
                />
              </div>
              <div>
                <label htmlFor="clinic" className="block text-gray-300 text-sm font-bold mb-2">Pilih Klinik</label>
                <select
                  id="clinic"
                  name="clinic"
                  value={form.clinic}
                  onChange={handleChange}
                  className="shadow border border-gray-700 rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 placeholder-gray-400"
                  required
                >
                  <option value="">-- Pilih Klinik --</option>
                  {clinics.map((c, i) => (
                    <option key={i} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-gray-300 text-sm font-bold mb-2">Tanggal Reservasi</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-gray-300 text-sm font-bold mb-2">Waktu Reservasi</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 placeholder-gray-400"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="complaint" className="block text-gray-300 text-sm font-bold mb-2">Keluhan/Keperluan</label>
              <textarea
                id="complaint"
                name="complaint"
                value={form.complaint}
                onChange={handleChange}
                rows="4"
                className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 placeholder-gray-400"
                placeholder="Contoh: Perawatan gigi berlubang, konsultasi behel, dll."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline text-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Kirim Reservasi
            </button>
          </form>
        </div>
      </section> */}
    </div>
  );
};

export default Home;