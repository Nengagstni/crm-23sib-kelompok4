import React, { useState } from 'react';

const Fasilitas = () => {
  const [fasilitas, setFasilitas] = useState([
    {
      name: 'Ruang Tunggu Nyaman',
      icon: '🛋️',
      description:
        'Ruang tunggu dengan desain modern dan minimalis, dilengkapi AC, Wi-Fi, dan minuman gratis untuk kenyamanan pasien.',
      image: 'https://gaiadentalclinic.id/wp-content/uploads/2023/04/BKT-Interior-scaled.jpg',
    },
    {
      name: 'Peralatan Dental Standar Internasional',
      icon: '🦷',
      description:
        'Menggunakan teknologi terkini seperti kamera intra oral, foto rontgen periapikal, dan alat electrosurgery.',
      image: 'data:image/jpeg;base64,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',
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    icon: '',
    description: '',
    image: '',
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.icon || !formData.description) {
      alert('Semua field wajib diisi!');
      return;
    }

    if (editIndex !== null) {
      const updated = [...fasilitas];
      updated[editIndex] = formData;
      setFasilitas(updated);
      setEditIndex(null);
    } else {
      setFasilitas([...fasilitas, formData]);
    }

    setFormData({ name: '', icon: '', description: '', image: '' });
  };

  const handleEdit = (index) => {
    setFormData(fasilitas[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = fasilitas.filter((_, i) => i !== index);
    setFasilitas(updated);
    if (editIndex === index) {
      setEditIndex(null);
      setFormData({ name: '', icon: '', description: '', image: '' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Fasilitas Kami</h1>

      {/* Form Tambah/Edit Fasilitas */}
      <form onSubmit={handleSubmit} className="mb-10 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nama Fasilitas</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Contoh: Area Bermain Anak"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Emoji/Icon</label>
            <input
              type="text"
              name="icon"
              value={formData.icon}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Contoh: 🎮"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            rows="3"
            placeholder="Deskripsi fasilitas"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Link Gambar (Opsional)</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <button
          type="submit"
          className={`mt-3 ${
            editIndex !== null ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'
          } text-white px-4 py-2 rounded-md`}
        >
          {editIndex !== null ? 'Simpan Perubahan' : 'Tambahkan Fasilitas'}
        </button>
      </form>

      {/* Daftar Fasilitas */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fasilitas.map((facility, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl shadow group transition-transform transform hover:scale-[1.02] duration-300"
          >
            {/* Ribbon Icon */}
            <div className="absolute -top-4 -left-4 bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow">
              {facility.icon}
            </div>

            {/* Image (optional) */}
            {facility.image && (
              <img
                src={facility.image}
                alt={`Gambar ${facility.name}`}
                className="w-full h-40 object-cover rounded-md shadow mb-4"
              />
            )}

            <h2 className="text-lg font-semibold text-gray-800">{facility.name}</h2>
            <p className="text-gray-600 text-sm mt-1 mb-4">{facility.description}</p>

            <div className="flex justify-end gap-3 text-sm">
              <button
                onClick={() => handleEdit(index)}
                className="text-yellow-600 hover:text-yellow-700 flex items-center gap-1"
                title="Edit"
              >
                ✏️ <span className="hidden sm:inline">Edit</span>
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-600 hover:text-red-700 flex items-center gap-1"
                title="Hapus"
              >
                🗑️ <span className="hidden sm:inline">Hapus</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fasilitas;
