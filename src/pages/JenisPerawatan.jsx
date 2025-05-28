// JenisPerawatan.jsx
import React, { useState } from 'react';

const JenisPerawatan = () => {
  const [data, setData] = useState([
    {
      name: 'Pembersihan Karang Gigi',
      icon: '🦷',
      description:
        'Menghilangkan plak dan karang yang menumpuk di permukaan gigi.',
      image:
        'https://images.unsplash.com/photo-1588776814546-f92e996a3f1a?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Pemutihan Gigi',
      icon: '✨',
      description: 'Prosedur untuk memutihkan dan mencerahkan warna gigi.',
      image:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80',
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
      const updated = [...data];
      updated[editIndex] = formData;
      setData(updated);
      setEditIndex(null);
    } else {
      setData([...data, formData]);
    }

    setFormData({ name: '', icon: '', description: '', image: '' });
  };

  const handleEdit = (index) => {
    setFormData(data[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
    if (editIndex === index) {
      setEditIndex(null);
      setFormData({ name: '', icon: '', description: '', image: '' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-purple-700 mb-6 text-center">Jenis Perawatan Gigi</h1>

      {/* Form Tambah/Edit */}
      <form onSubmit={handleSubmit} className="mb-10 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nama Perawatan</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Contoh: Behel Gigi"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Icon/Emoji</label>
            <input
              type="text"
              name="icon"
              value={formData.icon}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Contoh: 😁"
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
            placeholder="Deskripsi perawatan"
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
            placeholder="https://example.com/gambar.jpg"
          />
        </div>

        <button
          type="submit"
          className={`mt-3 ${
            editIndex !== null ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-purple-600 hover:bg-purple-700'
          } text-white px-4 py-2 rounded-md`}
        >
          {editIndex !== null ? 'Simpan Perubahan' : 'Tambah Jenis Perawatan'}
        </button>
      </form>

      {/* List Perawatan */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-purple-50 to-white p-5 rounded-2xl shadow group transition-transform transform hover:scale-[1.02] duration-300"
          >
            {/* Ribbon Icon */}
            <div className="absolute -top-4 -left-4 bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow">
              {item.icon}
            </div>

            {/* Gambar */}
            {item.image && (
              <img
                src={item.image}
                alt={`Gambar ${item.name}`}
                className="w-full h-40 object-cover rounded-md shadow mb-4"
              />
            )}

            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
            <p className="text-gray-600 text-sm mt-1 mb-4">{item.description}</p>

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

export default JenisPerawatan;
