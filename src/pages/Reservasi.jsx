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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white p-8 md:p-16 font-sans">
      <h1 className="text-4xl font-extrabold text-purple-800 mb-12 text-center drop-shadow-md">
        Formulir Reservasi <span className="text-purple-600">Gaia Dental Clinic</span>
      </h1>

      {/* Form container centered */}
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 mb-14">
        <h2 className="text-2xl font-semibold text-purple-700 mb-6 border-b pb-2">
          Isi Data Reservasi
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="contoh@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Tanggal Reservasi</label>
            <input
              type="date"
              name="tanggal"
              value={form.tanggal}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Pilih Layanan</label>
            <select
              name="layanan"
              value={form.layanan}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
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
            <label className="block text-gray-700 font-medium mb-1">Catatan Tambahan</label>
            <textarea
              name="catatan"
              value={form.catatan}
              onChange={handleChange}
              rows="4"
              placeholder="Masukkan catatan tambahan (opsional)"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-3 rounded-xl hover:bg-purple-700 transition"
          >
            Kirim Reservasi
          </button>
        </form>
      </div>

      {/* Table container centered */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-purple-700 mb-6 border-b pb-2">
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
                  <td className="px-6 py-4 border-t border-gray-200">{data.nama}</td>
                  <td className="px-6 py-4 border-t border-gray-200">{data.email}</td>
                  <td className="px-6 py-4 border-t border-gray-200">{data.tanggal}</td>
                  <td className="px-6 py-4 border-t border-gray-200">{data.layanan}</td>
                  <td className="px-6 py-4 border-t border-gray-200">{data.catatan}</td>
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
