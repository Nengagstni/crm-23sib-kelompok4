import React, { useState } from 'react';

const JanjiTemu = () => {
  const [janjiList, setJanjiList] = useState([
    {
      nama: 'Budi',
      tindakan: 'Scaling',
      tanggal: '2025-06-20',
      jam: '10:00',
      status: 'Menunggu',
    },
  ]);

  const [formData, setFormData] = useState({
    nama: '',
    tindakan: '',
    tanggal: '',
    jam: '',
    status: 'Menunggu',
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nama, tindakan, tanggal, jam } = formData;
    if (!nama || !tindakan || !tanggal || !jam) {
      alert('Semua field wajib diisi!');
      return;
    }

    if (editIndex !== null) {
      const updated = [...janjiList];
      updated[editIndex] = formData;
      setJanjiList(updated);
      setEditIndex(null);
    } else {
      setJanjiList([...janjiList, formData]);
    }

    setFormData({
      nama: '',
      tindakan: '',
      tanggal: '',
      jam: '',
      status: 'Menunggu',
    });
  };

  const handleEdit = (index) => {
    setFormData(janjiList[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = janjiList.filter((_, i) => i !== index);
    setJanjiList(updated);
    if (editIndex === index) {
      setEditIndex(null);
      setFormData({ nama: '', tindakan: '', tanggal: '', jam: '', status: 'Menunggu' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white mt-10 shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Form Janji Temu Pasien</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="nama"
            placeholder="Nama Pasien"
            value={formData.nama}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="tindakan"
            placeholder="Tindakan"
            value={formData.tindakan}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="date"
            name="tanggal"
            value={formData.tanggal}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="time"
            name="jam"
            value={formData.jam}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="Menunggu">Menunggu</option>
            <option value="Selesai">Selesai</option>
            <option value="Batal">Batal</option>
          </select>
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className={`${
              editIndex !== null ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-600 hover:bg-green-700'
            } text-white px-4 py-2 rounded`}
          >
            {editIndex !== null ? 'Simpan Perubahan' : 'Tambah Janji'}
          </button>
          {editIndex !== null && (
            <button
              type="button"
              onClick={() => {
                setFormData({ nama: '', tindakan: '', tanggal: '', jam: '', status: 'Menunggu' });
                setEditIndex(null);
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Batal Edit
            </button>
          )}
        </div>
      </form>

      {/* Tabel Daftar Janji */}
      <table className="w-full text-sm border border-gray-300">
        <thead className="bg-green-100 text-gray-700">
          <tr>
            <th className="border p-2">Nama</th>
            <th className="border p-2">Tindakan</th>
            <th className="border p-2">Tanggal</th>
            <th className="border p-2">Jam</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {janjiList.map((janji, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{janji.nama}</td>
              <td className="border p-2">{janji.tindakan}</td>
              <td className="border p-2">{janji.tanggal}</td>
              <td className="border p-2">{janji.jam}</td>
              <td className="border p-2">{janji.status}</td>
              <td className="border p-2 space-x-1">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-yellow-600 hover:underline"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 hover:underline"
                >
                  🗑️ Hapus
                </button>
              </td>
            </tr>
          ))}
          {janjiList.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center text-gray-500 p-4">
                Tidak ada data janji temu.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default JanjiTemu;
