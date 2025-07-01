import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'; // Import FaClock icon
import { useNavigate } from 'react-router-dom';
// import Footer from '../components/Footer'; // Uncomment if you have a Footer component

const doctors = [
  {
    name: 'drg. Annisa Oktafia',
    photo: 'https://gaiadentalclinic.id/wp-content/uploads/2024/08/Drg-ANNISA.png',
    clinic: 'Klinik Gigi Gaia, Pekanbaru',
    description:
      'drg. Annisa Oktavia, akrab dipanggil dokter Icha, merupakan alumni Universitas Muhammadiyah Yogyakarta lulusan tahun 2023. Memiliki pengalaman perawatan gigi seperti penambalan, pencabutan, behel dan lainnya.',
    specialties: ['Konservasi Gigi', 'Perawatan Saluran Akar', 'Estetika Gigi', 'Bleaching', 'Penambalan Estetik'],
    phone: '081234567890',
    email: 'annisa.oktafia@klinikgigigaia.com',
    schedule: [
      { day: 'Senin', time: '09:00 - 12:00' },
      { day: 'Rabu', time: '14:00 - 17:00' },
      { day: 'Jumat', time: '09:00 - 12:00' }
    ]
  },
  {
    name: 'drg. Rian Putra',
    photo: 'https://gaiadentalclinic.id/wp-content/uploads/2024/08/Drg-ADHIT.png',
    clinic: 'Klinik Gigi Gaia, Pekanbaru',
    description:
      'drg. Rian merupakan dokter gigi yang fokus pada tindakan bedah minor gigi dan konsultasi perawatan ortodonti modern.',
    specialties: ['Bedah Minor', 'Ortodonti', 'Konsultasi Gigi Anak'],
    phone: '081355557890',
    email: 'rian.putra@klinikgigigaia.com',
    schedule: [
      { day: 'Selasa', time: '10:00 - 13:00' },
      { day: 'Kamis', time: '15:00 - 18:00' },
      { day: 'Sabtu', time: '09:00 - 12:00' }
    ]
  },
  {
    name: 'drg. Melinda Sari',
    photo: 'https://gaiadentalclinic.id/wp-content/uploads/2024/04/drg-sonya.png',
    clinic: 'Klinik Gigi Gaia, Pekanbaru',
    description:
      'drg. Melinda dikenal ramah dan teliti dalam menangani pasien dengan perawatan saluran akar dan scaling rutin.',
    specialties: ['Scaling', 'Perawatan Akar', 'Tambal Estetik'],
    phone: '085212340000',
    email: 'melinda.sari@klinikgigigaia.com',
    schedule: [
      { day: 'Senin', time: '14:00 - 17:00' },
      { day: 'Rabu', time: '09:00 - 12:00' },
      { day: 'Jumat', time: '15:00 - 18:00' }
    ]
  }
];

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen px-4 py-10" style={{ backgroundColor: '#1D5B5C' }}>
        <h1 className="text-center text-3xl font-bold mb-10 text-white drop-shadow-md">
          Tim Dokter Gigi <span className="text-yellow-300">Gaia Dental Clinic</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg max-w-md w-full flex flex-col justify-between p-6 min-h-[600px]"
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
                  <h3 className="font-semibold text-gray-800 mb-1">Jadwal Praktik</h3>
                  {doctor.schedule && doctor.schedule.length > 0 ? (
                    <ul className="text-sm text-gray-800">
                      {doctor.schedule.map((slot, idx) => (
                        <li key={idx} className="flex items-center gap-2 mt-1">
                          <FaClock className="text-green-700" />
                          <span>{slot.day}: {slot.time}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-800 italic">Tidak ada jadwal yang tersedia.</p>
                  )}
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
                  className="w-full bg-[#2D8C87] text-white font-semibold py-3 rounded-xl hover:bg-[#23716C] transition"
                  onClick={() => navigate('/reservasi')}
                >
                  Reservasi Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-1 bg-gradient-to-r from-yellow-300 via-white to-yellow-300 my-12 rounded-full shadow-md mx-auto max-w-6xl"></div>

      {/* <Footer /> */}
    </>
  );
};

export default Profile;