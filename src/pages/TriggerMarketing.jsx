import React, { useState } from 'react';

const daysOfWeek = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

const TriggerMarketing = () => {
  const [formData, setFormData] = useState({
    namaPromo: '',
    hari: 'Selasa',
    jam: '',
    tanggalMulai: '',
    tanggalSelesai: '',
    foto: null,
    previewFoto: null,
  });

  const [triggerList, setTriggerList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'foto') {
      const file = files[0];
      if (file) {
        setFormData({
          ...formData,
          foto: file,
          previewFoto: URL.createObjectURL(file),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...triggerList];
      updated[editIndex] = formData;
      setTriggerList(updated);
      setEditIndex(null);
    } else {
      setTriggerList([...triggerList, formData]);
    }
    setFormData({
      namaPromo: '',
      hari: 'Selasa',
      jam: '',
      tanggalMulai: '',
      tanggalSelesai: '',
      foto: null,
      previewFoto: null,
    });
  };

  const handleEdit = (index) => {
    setFormData(triggerList[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = triggerList.filter((_, i) => i !== index);
    setTriggerList(updated);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-[#1D5B5C]">Trigger Marketing / Event Promo</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="text-[#1D5B5C] font-medium">Nama Promo</label>
            <input
              type="text"
              name="namaPromo"
              value={formData.namaPromo}
              onChange={handleChange}
              className="border border-[#1D5B5C] p-3 rounded focus:ring-2 focus:ring-[#EFD070]"
              placeholder="Contoh: Happy Hour Scaling"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#1D5B5C] font-medium">Hari</label>
            <select
              name="hari"
              value={formData.hari}
              onChange={handleChange}
              className="border border-[#1D5B5C] p-3 rounded focus:ring-2 focus:ring-[#EFD070]"
            >
              {daysOfWeek.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-[#1D5B5C] font-medium">Jam</label>
            <input
              type="time"
              name="jam"
              value={formData.jam}
              onChange={handleChange}
              className="border border-[#1D5B5C] p-3 rounded focus:ring-2 focus:ring-[#EFD070]"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="text-[#1D5B5C] font-medium">Tanggal Mulai</label>
            <input
              type="date"
              name="tanggalMulai"
              value={formData.tanggalMulai}
              onChange={handleChange}
              className="border border-[#1D5B5C] p-3 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[#1D5B5C] font-medium">Tanggal Selesai</label>
            <input
              type="date"
              name="tanggalSelesai"
              value={formData.tanggalSelesai}
              onChange={handleChange}
              className="border border-[#1D5B5C] p-3 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[#1D5B5C] font-medium">Upload Foto Promo</label>
            <input
              type="file"
              name="foto"
              accept="image/*"
              onChange={handleChange}
              className="border border-[#1D5B5C] p-2 rounded"
            />
            {formData.previewFoto && (
              <img
                src={formData.previewFoto}
                alt="Preview"
                className="mt-2 rounded shadow h-24 object-cover"
              />
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className={`${
              editIndex !== null ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-[#1D5B5C] hover:bg-[#164949]'
            } text-white px-4 py-2 rounded transition`}
          >
            {editIndex !== null ? 'Simpan Perubahan' : 'Tambah Promo'}
          </button>
          {editIndex !== null && (
            <button
              type="button"
              onClick={() => {
                setFormData({
                  namaPromo: '',
                  hari: 'Selasa',
                  jam: '',
                  tanggalMulai: '',
                  tanggalSelesai: '',
                  foto: null,
                  previewFoto: null,
                });
                setEditIndex(null);
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Batal Edit
            </button>
          )}
        </div>
      </form>

      <h3 className="text-xl font-semibold text-[#1D5B5C] mb-4">Daftar Promo</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {triggerList.map((item, index) => (
          <div key={index} className="border p-4 rounded-xl shadow space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-[#1D5B5C]">{item.namaPromo}</h4>
              <div className="space-x-2">
                <button onClick={() => handleEdit(index)} className="text-yellow-600 hover:underline">✏️</button>
                <button onClick={() => handleDelete(index)} className="text-red-600 hover:underline">🗑️</button>
              </div>
            </div>
            <div className="text-sm text-gray-700">
              <p><strong>Hari:</strong> {item.hari}</p>
              <p><strong>Jam:</strong> {item.jam}</p>
              <p><strong>Periode:</strong> {item.tanggalMulai} → {item.tanggalSelesai}</p>
            </div>
            {item.previewFoto && (
              <img src={item.previewFoto} alt="Promo" className="w-full rounded-lg h-32 object-cover" />
            )}
          </div>
        ))}
        {triggerList.length === 0 && (
          <div className="col-span-2 text-center text-gray-500">
            Belum ada promo ditambahkan.
          </div>
        )}
      </div>
    </div>
  );
};

export default TriggerMarketing;
