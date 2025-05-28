import React from 'react';

const Profile = () => {
  const doctor = {
    name: 'drg. Annisa Oktafia',
    photo: 'https://gaiadentalclinic.id/wp-content/uploads/2024/08/Drg-ANNISA.png',
    clinic: 'Klinik Gigi Gaia, Pekanbaru',
    description:
      'drg. Annisa Oktavia, akrab dianggil dokter Icha, merupakan alumni Universitas Muhammadiyah Yogyakarta  lulusan tahun 2023. Memiliki berbagai pengalaman dalam melakukan perawatan gigi mulai dari penambalan gigi, pencabutan gigi, pemasangan behel dan perawatan lainnya. drg. Annisa berkomitmen akan selalu memberikan pelayanan yang berkualitas dan maksimal. “Eat Wisely, Smile Nicely.”',
    contact: {
      phone: '0812-3456-7890',
      email: 'annisa.oktafia@klinikgigigaia.com',
    },
    specialties: [
      'Konservasi Gigi',
      'Perawatan Saluran Akar',
      'Estetika Gigi',
      'Bleaching',
      'Penambalan Estetik',
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={doctor.photo}
          alt="Foto Dokter"
          className="w-36 h-36 rounded-full object-cover border-4 border-blue-500"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800">{doctor.name}</h1>
          <p className="text-gray-600 mt-1">{doctor.clinic}</p>
          <p className="text-sm text-gray-500 mt-2">{doctor.description}</p>

          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-700">Spesialisasi</h2>
            <ul className="flex flex-wrap gap-2 mt-2">
              {doctor.specialties.map((spec, index) => (
                <li
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-700">Kontak</h2>
            <p className="text-gray-600 mt-1">📞 {doctor.contact.phone}</p>
            <p className="text-gray-600">📧 {doctor.contact.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
