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
    <div className="max-w-6xl mx-auto p-6 mt-10 rounded-2xl shadow-md" style={{ backgroundColor: '#EFD070' }}>
      <h1
        className="text-2xl font-bold mb-6 text-center"
        style={{ color: '#1D5B5C' }}
      >
        Jenis Perawatan Gigi
      </h1>

      {/* Form Tambah/Edit */}
      <form onSubmit={handleSubmit} className="mb-10 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium" style={{ color: '#1D5B5C' }}>
              Nama Perawatan
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md p-2"
              placeholder="Contoh: Behel Gigi"
              style={{ border: '1px solid #1D5B5C', backgroundColor: '#FFF9E6', color: '#1D5B5C' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium" style={{ color: '#1D5B5C' }}>
              Icon/Emoji
            </label>
            <input
              type="text"
              name="icon"
              value={formData.icon}
              onChange={handleChange}
              className="w-full rounded-md p-2"
              placeholder="Contoh: 😁"
              style={{ border: '1px solid #1D5B5C', backgroundColor: '#FFF9E6', color: '#1D5B5C' }}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium" style={{ color: '#1D5B5C' }}>
            Deskripsi
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full rounded-md p-2"
            rows="3"
            placeholder="Deskripsi perawatan"
            style={{ border: '1px solid #1D5B5C', backgroundColor: '#FFF9E6', color: '#1D5B5C' }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium" style={{ color: '#1D5B5C' }}>
            Link Gambar (Opsional)
          </label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full rounded-md p-2"
            placeholder="https://example.com/gambar.jpg"
            style={{ border: '1px solid #1D5B5C', backgroundColor: '#FFF9E6', color: '#1D5B5C' }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: editIndex !== null ? '#1D5B5C' : '#EFD070',
            color: editIndex !== null ? '#EFD070' : '#1D5B5C',
            transition: 'background-color 0.3s',
          }}
          className="mt-3 px-4 py-2 rounded-md font-semibold"
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = editIndex !== null ? '#164B4B' : '#FFD94D';
            e.currentTarget.style.color = editIndex !== null ? '#FFF' : '#14514F';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = editIndex !== null ? '#1D5B5C' : '#EFD070';
            e.currentTarget.style.color = editIndex !== null ? '#EFD070' : '#1D5B5C';
          }}
        >
          {editIndex !== null ? 'Simpan Perubahan' : 'Tambah Jenis Perawatan'}
        </button>
      </form>

      {/* List Perawatan */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl shadow group transition-transform transform hover:scale-[1.02] duration-300 p-5"
            style={{ background: 'linear-gradient(to bottom right, #FFF9E6, #EFD070)' }}
          >
            {/* Ribbon Icon */}
            <div
              className="absolute -top-4 -left-4 rounded-full w-12 h-12 flex items-center justify-center shadow"
              style={{ backgroundColor: '#1D5B5C', color: '#EFD070', border: '2px solid #EFD070' }}
            >
              {item.icon}
            </div>

            {/* Gambar */}
            {item.image && (
              <img
                src={item.image}
                alt={`Gambar ${item.name}`}
                className="w-full h-40 object-cover rounded-md shadow mb-4"
                style={{ border: '2px solid #1D5B5C' }}
              />
            )}

            <h2 className="text-lg font-semibold" style={{ color: '#1D5B5C' }}>
              {item.name}
            </h2>
            <p className="text-sm mt-1 mb-4" style={{ color: '#14514F' }}>
              {item.description}
            </p>

            <div className="flex justify-end gap-3 text-sm">
              <button
                onClick={() => handleEdit(index)}
                className="flex items-center gap-1 font-medium"
                title="Edit"
                style={{ color: '#EFD070' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFD94D')}
                onMouseLeave={e => (e.currentTarget.style.color = '#EFD070')}
              >
                ✏️ <span className="hidden sm:inline">Edit</span>
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="flex items-center gap-1 font-medium"
                title="Hapus"
                style={{ color: '#B73E3E' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FF5C5C')}
                onMouseLeave={e => (e.currentTarget.style.color = '#B73E3E')}
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
