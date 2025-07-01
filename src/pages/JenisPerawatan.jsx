// JenisPerawatan.jsx
import React, { useState } from 'react';

const JenisPerawatan = () => {
  // Define a comprehensive color palette for better aesthetics
  const colors = {
    primaryDark: "#1D5B5C",      // Main dark teal/green
    primaryMedium: "#3A7E7F",     // Slightly lighter primary for accents
    accentGold: "#EFD070",       // Main gold/yellow accent
    accentGoldDark: "#B88E00",    // Darker gold for better text contrast
    softBackground: "#F9FAFB",   // Very light off-white for main background
    cardBackground: "#FFFFFF",    // Pure white for cards
    formBackground: "#FFFDF5",    // Light cream for input fields
    textMuted: "#6B7280",         // Soft gray for secondary text
    borderLight: "#D1D5DB",       // Light gray for borders
    buttonPrimaryHover: "#144D4E",// Darker primary for button hover
    buttonAccentHover: "#FFD94D", // Lighter accent for button hover
    deleteRed: "#D64545",         // Distinct red for delete
    deleteRedHover: "#FF5C5C",    // Lighter red for delete hover
    infoBlue: "#3B82F6",          // Info message blue
    infoBlueBg: "#DBEAFE",        // Info message background
  };

  const [data, setData] = useState([
    {
      id: 'jp_1', // Tambahkan ID untuk identifikasi unik
      name: 'Pembersihan Karang Gigi',
      icon: '🦷',
      description:
        'Menghilangkan plak dan karang yang menumpuk di permukaan gigi.',
      image:
        'https://gaiadentalclinic.id/wp-content/uploads/2023/08/GAIA-1.png',
    },
    {
      id: 'jp_2',
      name: 'Pemutihan Gigi',
      icon: '✨',
      description: 'Prosedur untuk memutihkan dan mencerahkan warna gigi.',
      image:
        'https://gaiadentalclinic.id/wp-content/uploads/2023/08/GAIA-1-10.png',
    },
    {
      id: 'jp_3',
      name: 'Pemasangan Behel Gigi',
      icon: '😁',
      description: 'Perawatan ortodontik untuk meratakan posisi gigi dan rahang.',
      image:
        'https://gaiadentalclinic.id/wp-content/uploads/2023/08/GAIA-1-3.png',
    },
  ]);

  const [formData, setFormData] = useState(null); // Ubah menjadi null secara default
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk mengontrol visibilitas modal
  const [message, setMessage] = useState(''); // State untuk pesan notifikasi

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.icon || !formData.description) {
      alert('Nama Perawatan, Icon/Emoji, dan Deskripsi wajib diisi!');
      return;
    }

    if (formData.id) { // Jika formData.id ada, artinya ini adalah operasi edit
      const updatedData = data.map((item) =>
        item.id === formData.id ? formData : item
      );
      setData(updatedData);
      setMessage("Jenis perawatan berhasil diperbarui!");
    } else { // Jika formData.id tidak ada, artinya ini adalah operasi tambah baru
      const newItem = { ...formData, id: Date.now().toString() }; // Generate ID baru
      setData([...data, newItem]);
      setMessage("Jenis perawatan berhasil ditambahkan!");
    }

    setIsModalOpen(false); // Tutup modal setelah submit
    setFormData(null); // Bersihkan form
  };

  const handleEdit = (item) => {
    setFormData(item); // Isi form dengan data item yang akan diedit
    setIsModalOpen(true); // Buka modal
  };

  const handleDelete = (idToDelete) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus jenis perawatan ini?")) {
      return;
    }
    const updated = data.filter((item) => item.id !== idToDelete);
    setData(updated);
    setMessage("Jenis perawatan berhasil dihapus!");
    // Pastikan modal ditutup dan form dikosongkan jika item yang sedang diedit dihapus
    if (formData && formData.id === idToDelete) {
      setIsModalOpen(false);
      setFormData(null);
    }
  };

  const handleAddNew = () => {
    setFormData({ // Set form dengan nilai kosong/default untuk entri baru
      name: '',
      icon: '',
      description: '',
      image: '',
    });
    setIsModalOpen(true); // Buka modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData(null); // Pastikan form dikosongkan saat modal ditutup
  };

  return (
    <div className={`max-w-6xl mx-auto p-8 mt-10 rounded-3xl shadow-xl transition-all duration-300`}
         style={{ backgroundColor: colors.softBackground, border: `1px solid ${colors.borderLight}` }}>
      
      <h1 className="text-3xl font-extrabold mb-8 text-center" style={{ color: colors.primaryDark }}>
        Manajemen Jenis Perawatan Gigi
      </h1>

      {/* Pesan Notifikasi */}
      {message && (
        <div className={`bg-[${colors.infoBlueBg}] border-l-4 border-[${colors.infoBlue}] text-[${colors.infoBlue}] p-4 mb-8 rounded-lg shadow-md flex items-center justify-between animate-fadeIn`} role="alert">
          <div>
            <p className="font-bold">Informasi</p>
            <p>{message}</p>
          </div>
          <button
            onClick={() => setMessage('')}
            className={`text-[${colors.infoBlue}] hover:text-[${colors.primaryDark}] text-xl font-bold ml-4 transition-colors duration-200`}
            aria-label="Tutup pesan"
          >
            &times;
          </button>
        </div>
      )}

      {/* Tombol untuk Menambah Jenis Perawatan Baru */}
      <div className="text-center mb-10">
        <button
          onClick={handleAddNew}
          className={`bg-[${colors.primaryMedium}] hover:bg-[${colors.buttonPrimaryHover}] text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center justify-center mx-auto transform transition duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[${colors.primaryMedium}] focus:ring-opacity-50`}
        >
          <span className="text-2xl mr-3 leading-none">➕</span> Tambah Jenis Perawatan Baru
        </button>
      </div>

      {/* Form Tambah/Edit sebagai Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 overflow-auto animate-fade-in-down">
          <div className={`bg-[${colors.cardBackground}] rounded-2xl shadow-2xl p-8 w-full max-w-2xl my-8 relative animate-scale-in`}>
            <button
              onClick={handleCloseModal}
              className={`absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-3xl font-bold transition-colors duration-200`}
              aria-label="Tutup"
            >
              &times;
            </button>
            <h3 className={`text-2xl font-bold text-[${colors.primaryDark}] mb-7 text-center border-b-2 pb-3 border-[${colors.accentGold}]`}>
              {formData?.id ? "Edit Jenis Perawatan" : "Tambah Jenis Perawatan Baru"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className={`block text-sm font-medium mb-1 text-[${colors.textMuted}]`}>
                    Nama Perawatan
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData?.name || ''}
                    onChange={handleChange}
                    className={`w-full rounded-lg p-3 focus:ring-2 focus:ring-[${colors.primaryMedium}] focus:border-transparent transition-all duration-200 bg-[${colors.formBackground}] text-[${colors.primaryDark}]`}
                    placeholder="Contoh: Behel Gigi"
                    style={{ border: `1px solid ${colors.borderLight}` }}
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 text-[${colors.textMuted}]`}>
                    Icon/Emoji
                  </label>
                  <input
                    type="text"
                    name="icon"
                    value={formData?.icon || ''}
                    onChange={handleChange}
                    className={`w-full rounded-lg p-3 focus:ring-2 focus:ring-[${colors.primaryMedium}] focus:border-transparent transition-all duration-200 bg-[${colors.formBackground}] text-[${colors.primaryDark}]`}
                    placeholder="Contoh: 😁"
                    style={{ border: `1px solid ${colors.borderLight}` }}
                    required
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-1 text-[${colors.textMuted}]`}>
                  Deskripsi
                </label>
                <textarea
                  name="description"
                  value={formData?.description || ''}
                  onChange={handleChange}
                  className={`w-full rounded-lg p-3 focus:ring-2 focus:ring-[${colors.primaryMedium}] focus:border-transparent transition-all duration-200 bg-[${colors.formBackground}] text-[${colors.primaryDark}]`}
                  rows="3"
                  placeholder="Deskripsi perawatan"
                  style={{ border: `1px solid ${colors.borderLight}` }}
                  required
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-1 text-[${colors.textMuted}]`}>
                  Link Gambar (Opsional)
                </label>
                <input
                  type="url"
                  name="image"
                  value={formData?.image || ''}
                  onChange={handleChange}
                  className={`w-full rounded-lg p-3 focus:ring-2 focus:ring-[${colors.primaryMedium}] focus:border-transparent transition-all duration-200 bg-[${colors.formBackground}] text-[${colors.primaryDark}]`}
                  placeholder="https://example.com/gambar.jpg"
                  style={{ border: `1px solid ${colors.borderLight}` }}
                />
              </div>

              <div className="mt-8 flex justify-center gap-4">
                <button
                  type="submit"
                  className={`bg-[${colors.primaryDark}] hover:bg-[${colors.buttonPrimaryHover}] text-white font-bold px-8 py-3 rounded-lg shadow-md transform transition duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[${colors.primaryDark}] focus:ring-opacity-50`}
                >
                  {formData?.id ? "Simpan Perubahan" : "Tambah Perawatan"}
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className={`bg-gray-500 hover:bg-gray-600 text-white font-bold px-8 py-3 rounded-lg shadow-md transform transition duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50`}
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      ---

      {/* List Perawatan */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-2xl shadow-lg group transition-all duration-300 overflow-hidden transform hover:scale-[1.02] p-6 pb-4`}
              style={{
                background: `linear-gradient(to bottom right, ${colors.formBackground}, ${colors.accentGold})`,
                border: `1px solid ${colors.borderLight}`
              }}
            >
              {/* Ribbon Icon */}
              <div
                className={`absolute -top-4 -left-4 rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-2xl font-bold z-10`}
                style={{ backgroundColor: colors.primaryDark, color: colors.accentGold, border: `3px solid ${colors.accentGold}` }}
              >
                {item.icon}
              </div>

              {/* Gambar */}
              {item.image && (
                <img
                  src={item.image}
                  alt={`Gambar ${item.name}`}
                  className="w-full h-44 object-cover rounded-md shadow-inner mb-5 mt-4 border"
                  style={{ border: `2px solid ${colors.primaryMedium}` }}
                />
              )}

              <h2 className="text-xl font-bold mb-2" style={{ color: colors.primaryDark }}>
                {item.name}
              </h2>
              <p className="text-sm mt-1 mb-5 leading-relaxed" style={{ color: colors.textMuted }}>
                {item.description}
              </p>

              <div className="flex justify-end gap-4 text-sm mt-auto">
                <button
                  onClick={() => handleEdit(item)} // Mengirim item langsung ke handleEdit
                  className={`flex items-center gap-1 font-medium px-3 py-2 rounded-md transition-colors duration-200`}
                  title="Edit"
                  style={{ color: colors.primaryMedium, backgroundColor: 'transparent' }}
                  onMouseEnter={e => { e.currentTarget.style.color = colors.primaryDark; e.currentTarget.style.backgroundColor = colors.accentGold; }}
                  onMouseLeave={e => { e.currentTarget.style.color = colors.primaryMedium; e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  ✏️ <span className="hidden sm:inline">Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className={`flex items-center gap-1 font-medium px-3 py-2 rounded-md transition-colors duration-200`}
                  title="Hapus"
                  style={{ color: colors.deleteRed, backgroundColor: 'transparent' }}
                  onMouseEnter={e => { e.currentTarget.style.color = colors.deleteRedHover; e.currentTarget.style.backgroundColor = colors.accentGold; }}
                  onMouseLeave={e => { e.currentTarget.style.color = colors.deleteRed; e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  🗑️ <span className="hidden sm:inline">Hapus</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className={`col-span-full text-center text-[${colors.textMuted}] text-lg p-8 bg-[${colors.cardBackground}] rounded-xl shadow-md border border-[${colors.borderLight}]`}>
            Belum ada jenis perawatan. Silakan tambahkan yang baru!
          </div>
        )}
      </div>
    </div>
  );
};

export default JenisPerawatan;