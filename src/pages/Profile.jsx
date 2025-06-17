import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const doctors = [
  {
    name: 'drg. Annisa Oktafia',
    photo: 'https://gaiadentalclinic.id/wp-content/uploads/2024/08/Drg-ANNISA.png',
    clinic: 'Klinik Gigi Gaia, Pekanbaru',
    description:
      'drg. Annisa Oktavia, akrab dipanggil dokter Icha, merupakan alumni Universitas Muhammadiyah Yogyakarta lulusan tahun 2023. Memiliki pengalaman perawatan gigi seperti penambalan, pencabutan, behel dan lainnya.',
    specialties: ['Konservasi Gigi', 'Perawatan Saluran Akar', 'Estetika Gigi', 'Bleaching', 'Penambalan Estetik'],
    phone: '081234567890',
    email: 'annisa.oktafia@klinikgigigaia.com'
  },
  {
    name: 'drg. Rian Putra',
    photo: 'https://gaiadentalclinic.id/wp-content/uploads/2024/08/Drg-ADHIT.png',
    clinic: 'Klinik Gigi Gaia, Pekanbaru',
    description:
      'drg. Rian merupakan dokter gigi yang fokus pada tindakan bedah minor gigi dan konsultasi perawatan ortodonti modern.',
    specialties: ['Bedah Minor', 'Ortodonti', 'Konsultasi Gigi Anak'],
    phone: '081355557890',
    email: 'rian.putra@klinikgigigaia.com'
  },
  {
    name: 'drg. Melinda Sari',
    photo: 'https://gaiadentalclinic.id/wp-content/uploads/2024/04/drg-sonya.png',
    clinic: 'Klinik Gigi Gaia, Pekanbaru',
    description:
      'drg. Melinda dikenal ramah dan teliti dalam menangani pasien dengan perawatan saluran akar dan scaling rutin.',
    specialties: ['Scaling', 'Perawatan Akar', 'Tambal Estetik'],
    phone: '085212340000',
    email: 'melinda.sari@klinikgigigaia.com'
  }
];

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 py-10" style={{ backgroundColor: '#1D5B5C' }}>
      <h1 className="text-center text-3xl font-bold text-white mb-10">
        Tim Dokter Gigi Gaia
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg max-w-md w-full flex flex-col justify-between p-6 min-h-[540px]"
            style={{ backgroundColor: '#EFD070' }}
          >
            <div>
              <div className="flex items-center space-x-4">
                <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden flex items-center justify-center bg-gray-100">
                  {doctor.photo ? (
                    <img
                      src={doctor.photo}
                      alt={doctor.name}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-xs text-center px-2">{`Foto ${doctor.name}`}</span>
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{doctor.name}</h2>
                  <p className="text-sm text-gray-700">{doctor.clinic}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-800 text-sm">{doctor.description}</p>

              <div className="mt-4">
                <h3 className="font-semibold text-gray-800 mb-2">Spesialisasi</h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.specialties.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-gray-900 text-sm px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-gray-800 mb-1">Kontak</h3>
                <p className="flex items-center gap-2 text-sm text-gray-800">
                  <FaPhoneAlt className="text-pink-600" /> {doctor.phone}
                </p>
                <p className="flex items-center gap-2 text-sm text-gray-800 mt-1">
                  <FaEnvelope className="text-blue-700" /> {doctor.email}
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                className="bg-[#2D8C87] text-white px-4 py-2 rounded-full hover:bg-[#23716C] transition"
                onClick={() => navigate('/reservasi')}
              >
                Reservasi
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
