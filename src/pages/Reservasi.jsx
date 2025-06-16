import React, { useState } from 'react';

const Reservasi = () => {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    tanggal: '',
    layanan: '',
    catatan: ''
  });

  const [dataReservasi, setDataReservasi] = useState([
    { id: 1, nama: 'Andi Putra', email: 'andi@gmail.com', tanggal: '2025-06-10', layanan: 'Behel Gigi', catatan: 'Konsultasi dulu' },
    { id: 2, nama: 'Rina Lestari', email: 'rina@gmail.com', tanggal: '2025-06-12', layanan: 'Pemutihan Gigi', catatan: 'Pagi saja' },
    { id: 3, nama: 'Budi Santoso', email: 'budi@gmail.com', tanggal: '2025-06-15', layanan: 'Pembersihan Karang Gigi', catatan: '-' },
    { id: 4, nama: 'Sari Dewi', email: 'sari@gmail.com', tanggal: '2025-06-18', layanan: 'Tambal Gigi', catatan: 'Area belakang' },
    { id: 5, nama: 'Rangga Pratama', email: 'rangga@gmail.com', tanggal: '2025-06-20', layanan: 'Gigi Palsu', catatan: 'Rahang bawah' }
  ]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservasi berhasil dikirim!");
    const newReservasi = { id: dataReservasi.length + 1, ...form };
    setDataReservasi([...dataReservasi, newReservasi]);
    setForm({ nama: '', email: '', tanggal: '', layanan: '', catatan: '' });
  };

  return (
    <div className="min-h-screen bg-[#1D5B5C] p-8 md:p-16 font-sans">
      <h1 className="text-4xl font-extrabold text-white mb-12 text-center drop-shadow-md">
        Formulir Reservasi <span className="text-yellow-300">Gaia Dental Clinic</span>
      </h1>

      {/* Card dengan background kuning */}
      <div className="max-w-lg mx-auto rounded-2xl shadow-lg p-8 mb-14" style={{ backgroundColor: '#EFD070' }}>
        <h2 className="text-2xl font-semibold text-[#1D5B5C] mb-6 border-b pb-2"> {/* Ubah warna teks menjadi hijau */}
          Isi Data Reservasi
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-800 font-medium mb-1">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap"
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="contoh@email.com"
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-1">Tanggal Reservasi</label>
            <input
              type="date"
              name="tanggal"
              value={form.tanggal}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-1">Pilih Layanan</label>
            <select
              name="layanan"
              value={form.layanan}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            >
              <option value="">-- Pilih Jenis Perawatan --</option>
              <option>Pembersihan Karang Gigi</option>
              <option>Behel Gigi</option>
              <option>Veneer Gigi</option>
              <option>Pemutihan Gigi</option>
              <option>Perawatan Saluran Akar</option>
              <option>Tambal Gigi</option>
              <option>Gigi Palsu</option>
              <option>Pencabutan Gigi</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-1">Catatan Tambahan</label>
            <textarea
              name="catatan"
              value={form.catatan}
              onChange={handleChange}
              rows="4"
              placeholder="Masukkan catatan tambahan (opsional)"
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1D5B5C] text-white font-semibold py-3 rounded-xl hover:bg-[#174746] transition" // Ubah warna tombol menjadi hijau
          >
            Kirim Reservasi
          </button>
        </form>
      </div>

      {/* Tabel Reservasi */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-[#1D5B5C] mb-6 border-b pb-2"> {/* Ubah warna teks menjadi hijau */}
          Daftar Reservasi
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full rounded-2xl overflow-hidden">
            <thead className="bg-purple-200 text-purple-900 text-left">
              <tr>
                <th className="px-6 py-4 font-medium">#</th>
                <th className="px-6 py-4 font-medium">Nama</th>
                <th className="px-6 py-4 font-medium">Email</th>
                <th className="px-6 py-4 font-medium">Tanggal</th>
                <th className="px-6 py-4 font-medium">Layanan</th>
                <th className="px-6 py-4 font-medium">Catatan</th>
              </tr>
            </thead>
            <tbody>
              {dataReservasi.map((data, index) => (
                <tr
                  key={data.id}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-purple-50'}
                >
                  <td className="px-6 py-4 border-t border-gray-200">{index + 1}</td>
                  <td className="px-6 py-4 border-t border-gray-200 text-[#1D5B5C]">{data.nama}</td> {/* Ubah warna teks menjadi hijau */}
                  <td className="px-6 py-4 border-t border-gray-200 text-[#1D5B5C]">{data.email}</td> {/* Ubah warna teks menjadi hijau */}
                  <td className="px-6 py-4 border-t border-gray-200 text-[#1D5B5C]">{data.tanggal}</td> {/* Ubah warna teks menjadi hijau */}
                  <td className="px-6 py-4 border-t border-gray-200 text-[#1D5B5C]">{data.layanan}</td> {/* Ubah warna teks menjadi hijau */}
                  <td className="px-6 py-4 border-t border-gray-200 text-[#1D5B5C]">{data.catatan}</td> {/* Ubah warna teks menjadi hijau */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reservasi;
