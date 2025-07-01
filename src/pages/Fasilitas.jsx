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
      image: 'https://gaiadentalclinic.id/wp-content/uploads/2023/05/Dental-Chair-Dental-A-1536x1152.jpg',
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
      <h1 className="text-2xl font-bold text-[#1D5B5C] mb-6 text-center">Fasilitas Kami</h1>

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
            editIndex !== null
              ? 'bg-[#EFD070] hover:bg-yellow-400 text-[#1D5B5C]'
              : 'bg-[#1D5B5C] hover:bg-[#174646] text-white'
          } px-4 py-2 rounded-md`}
        >
          {editIndex !== null ? 'Simpan Perubahan' : 'Tambahkan Fasilitas'}
        </button>
      </form>

      {/* Daftar Fasilitas */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fasilitas.map((facility, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-[#EFD070]/20 to-white border border-[#EFD070]/30 p-5 rounded-2xl shadow group transition-transform transform hover:scale-[1.02] duration-300"
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

            <h2 className="text-lg font-bold text-[#1D5B5C]">{facility.name}</h2>
            <p className="text-gray-700 text-sm mt-1 mb-4">{facility.description}</p>

            <div className="flex justify-end gap-3 text-sm">
              <button
                onClick={() => handleEdit(index)}
                className="text-[#EFD070] hover:text-yellow-400 flex items-center gap-1"
                title="Edit"
              >
                ✏️ <span className="hidden sm:inline">Edit</span>
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="text-[#1D5B5C] hover:text-red-600 flex items-center gap-1"
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
