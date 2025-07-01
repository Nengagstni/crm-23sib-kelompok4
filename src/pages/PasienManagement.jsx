import React, { useState, useEffect } from "react";

// Data dummy awal untuk pengujian lokal (ARRAY objek)
const initialLocalPasienData = [
  {
    id: "pasien_1",
    nama: "Aditya Pratama",
    nomorTelepon: "081211223344",
    email: "aditya.p@example.com",
    alamat: "Jl. Merdeka No. 10, Jakarta",
    tanggalLahir: "1990-05-10",
    riwayatKunjunganTerakhir: "2024-06-20",
    catatanIntake: "Pasien baru, keluhan sakit gigi geraham bawah.",
  },
  {
    id: "pasien_2",
    nama: "Putri Lestari",
    nomorTelepon: "087855667788",
    email: "putri.l@example.com",
    alamat: "Perumahan Indah Blok C5, Bandung",
    tanggalLahir: "1988-11-25",
    riwayatKunjunganTerakhir: "2024-05-12",
    catatanIntake: "Pasien lama, cek rutin setelah perawatan saluran akar.",
  },
  {
    id: "pasien_3",
    nama: "Rio Saputra",
    nomorTelepon: "082199887766",
    email: "rio.s@example.com",
    alamat: "Gang Mawar No. 3, Surabaya",
    tanggalLahir: "1995-03-01",
    riwayatKunjunganTerakhir: "2024-04-01",
    catatanIntake: "Konsultasi untuk behel, gigi berjejal.",
  },
];

const PasienManagement = () => {
  // state untuk semua data pasien (ARRAY)
  const [dataPasien, setDataPasien] = useState(initialLocalPasienData);
  // state untuk pasien yang sedang ditampilkan di kartu detail
  const [selectedPasien, setSelectedPasien] = useState(null);
  // state untuk mengelola data form (untuk edit/tambah)
  const [form, setForm] = useState(null);
  // Untuk mengontrol visibilitas form/modal
  const [isFormOpen, setIsFormOpen] = useState(false);
  // Status untuk pesan pengguna (misalnya, sukses/error)
  const [message, setMessage] = useState('');

  // Set pasien pertama sebagai default yang dipilih saat komponen dimuat
  useEffect(() => {
    if (dataPasien.length > 0 && !selectedPasien) {
      setSelectedPasien(dataPasien[0]);
    }
  }, [dataPasien, selectedPasien]);

  // Fungsi untuk merender bagian kartu detail pasien
  const renderSection = (title, contentRows) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#1D5B5C] mb-3">{title}</h3> {/* Warna utama */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        {contentRows.map((row, index) => (
          <div key={index} className={`flex ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-100 last:border-b-0`}>
            <div className="w-1/3 p-3 text-sm font-medium text-gray-700 bg-gray-100 border-r border-gray-200">{row.label}</div>
            <div className="w-2/3 p-3 text-sm text-gray-800">{row.value}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // Fungsi untuk menangani penghapusan pasien
  const handleDelete = (idToDelete) => {
    // Konfirmasi sebelum menghapus
    if (!window.confirm("Apakah Anda yakin ingin menghapus data pasien ini?")) {
      return;
    }

    const updatedData = dataPasien.filter((item) => item.id !== idToDelete);
    setDataPasien(updatedData);
    setMessage("Data pasien berhasil dihapus!");

    // Jika yang dihapus adalah yang sedang ditampilkan, kosongkan selectedPasien atau pilih yang pertama
    if (selectedPasien && selectedPasien.id === idToDelete) {
      setSelectedPasien(updatedData.length > 0 ? updatedData[0] : null);
    }
  };

  // Fungsi untuk membuka form dalam mode edit
  const handleEdit = (item) => {
    setForm(item); // Isi form dengan data item yang akan diedit
    setIsFormOpen(true); // Tampilkan form
  };

  // Fungsi untuk membuka form dalam mode tambah baru
  const handleAddNew = () => {
    setForm({ // Set form dengan nilai kosong/default untuk entri baru
      nama: "",
      nomorTelepon: "",
      email: "",
      alamat: "",
      tanggalLahir: "",
      riwayatKunjunganTerakhir: "",
      catatanIntake: "",
    });
    setIsFormOpen(true); // Tampilkan form
    // Tidak perlu scroll otomatis karena modal akan di tengah
  };

  // Fungsi untuk menangani penyerahan form (menambah atau memperbarui data)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id) { // Jika form.id ada, artinya ini adalah operasi edit
      const updatedData = dataPasien.map((item) =>
        item.id === form.id ? form : item
      );
      setDataPasien(updatedData);
      setSelectedPasien(form); // Update kartu detail dengan data yang diedit
      setMessage("Data pasien berhasil diperbarui!");
    } else { // Jika form.id tidak ada, artinya ini adalah operasi tambah baru
      const newRecord = { ...form, id: `pasien_${Date.now()}` }; // Generate ID baru
      setDataPasien([...dataPasien, newRecord]); // Tambahkan data baru ke array
      setSelectedPasien(newRecord); // Tampilkan yang baru ditambahkan di kartu detail
      setMessage("Data pasien berhasil ditambahkan!");
    }
    setIsFormOpen(false); // Tutup form setelah submit
    setForm(null); // Bersihkan form
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-gray-100 min-h-screen font-inter">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#1D5B5C] rounded-lg p-4 shadow-lg bg-white">Manajemen Data Pasien (CRM)</h2>

      {message && (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6 rounded-lg shadow-md" role="alert">
          <p className="font-bold">Info</p>
          <p>{message}</p>
        </div>
      )}

      {/* Tombol untuk Menambah Data Pasien Baru */}
      <div className="text-center mb-8">
        <button
          onClick={handleAddNew}
          className="bg-[#1D5B5C] hover:bg-[#154647] text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center justify-center mx-auto transform transition duration-200 hover:scale-105"
        >
          ➕ Tambah Data Pasien Baru
        </button>
      </div>

      {/* Form Tambah/Edit Data Pasien (Muncul sebagai modal/overlay) */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-3xl my-8 relative">
            <button
              onClick={() => { setIsFormOpen(false); setForm(null); }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              {form?.id ? "Edit Data Pasien" : "Tambah Data Pasien Baru"}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1D5B5C] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.nama || ""}
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Nomor Telepon"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1D5B5C] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.nomorTelepon || ""}
                  onChange={(e) => setForm({ ...form, nomorTelepon: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1D5B5C] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.email || ""}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Alamat Lengkap"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1D5B5C] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm col-span-full"
                  value={form?.alamat || ""}
                  onChange={(e) => setForm({ ...form, alamat: e.target.value })}
                  required
                />
                <input
                  type="date"
                  placeholder="Tanggal Lahir"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1D5B5C] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.tanggalLahir || ""}
                  onChange={(e) => setForm({ ...form, tanggalLahir: e.target.value })}
                  required
                />
                <input
                  type="date"
                  placeholder="Riwayat Kunjungan Terakhir"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1D5B5C] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.riwayatKunjunganTerakhir || ""}
                  onChange={(e) => setForm({ ...form, riwayatKunjunganTerakhir: e.target.value })}
                />
                <textarea
                  placeholder="Catatan Form Intake"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1D5B5C] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm col-span-full h-24 resize-y"
                  value={form?.catatanIntake || ""}
                  onChange={(e) => setForm({ ...form, catatanIntake: e.target.value })}
                ></textarea>
              </div>
              <div className="mt-8 flex justify-center gap-4">
                <button
                  type="submit"
                  className="bg-[#1D5B5C] hover:bg-[#154647] text-white font-bold px-6 py-3 rounded-lg shadow-md transform transition duration-200 hover:scale-105"
                >
                  {form?.id ? "Update Data" : "Tambah Data"}
                </button>
                <button
                  type="button"
                  onClick={() => { setIsFormOpen(false); setForm(null); }}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold px-6 py-3 rounded-lg shadow-md transform transition duration-200 hover:scale-105"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bagian Tabel Daftar Pasien dan Kartu Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {/* Tabel Daftar Pasien */}
        <div className="overflow-x-auto rounded-lg shadow-lg bg-white h-96"> {/* Tinggi tetap agar tidak memanjang */}
          <h3 className="text-xl font-semibold text-gray-800 p-4 bg-gray-50 border-b border-gray-200">Daftar Pasien</h3>
          <table className="w-full text-sm">
            <thead className="bg-[#1D5B5C] text-white"> {/* Warna utama */}
              <tr>
                <th className="p-3 text-left">Nama</th>
                <th className="p-3 text-left">Telepon</th>
                <th className="p-3 text-left">Kunjungan Terakhir</th>
                <th className="p-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataPasien.length > 0 ? (
                dataPasien.map((item) => (
                  <tr
                    key={item.id}
                    className={`text-left border-t border-gray-200 hover:bg-gray-50 cursor-pointer ${selectedPasien?.id === item.id ? 'bg-[#EFD070]/30 border-l-4 border-[#1D5B5C]' : ''}`} /* Warna aksen untuk baris terpilih */
                    onClick={() => setSelectedPasien(item)}
                  >
                    <td className="p-3">{item.nama}</td>
                    <td className="p-3">{item.nomorTelepon}</td>
                    <td className="p-3">{item.riwayatKunjunganTerakhir}</td>
                    <td className="p-3 space-x-2 text-center">
                      <button
                        onClick={(e) => { e.stopPropagation(); handleEdit(item); }}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md shadow-sm transform transition duration-200 hover:scale-110"
                        title="Edit"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md shadow-sm transform transition duration-200 hover:scale-110"
                        title="Hapus"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">
                    Belum ada data pasien. Tambahkan data baru di atas!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Kartu Detail Pasien */}
        <div className="lg:sticky lg:top-6 self-start">
          {selectedPasien ? (
            <div className="bg-white rounded-lg shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-center text-[#1D5B5C]">Detail Data Pasien</h2> {/* Warna utama */}

              {renderSection("Informasi Kontak", [
                { label: "Nama Lengkap", value: selectedPasien.nama },
                { label: "Nomor Telepon", value: selectedPasien.nomorTelepon },
                { label: "Email", value: selectedPasien.email },
                { label: "Alamat", value: selectedPasien.alamat },
              ])}

              {renderSection("Detail Tambahan", [
                { label: "Tanggal Lahir", value: selectedPasien.tanggalLahir },
                { label: "Riwayat Kunjungan Terakhir", value: selectedPasien.riwayatKunjunganTerakhir || 'Belum ada kunjungan' },
              ])}

              {renderSection("Catatan Intake", [
                { label: "Catatan", value: selectedPasien.catatanIntake || 'Tidak ada catatan' },
              ])}

              {/* Tombol Aksi untuk pasien yang ditampilkan */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={() => handleEdit(selectedPasien)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center transform transition duration-200 hover:scale-105"
                >
                  <span className="mr-2">Edit</span> ✏️
                </button>
                <button
                  onClick={() => handleDelete(selectedPasien.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center transform transition duration-200 hover:scale-105"
                >
                  <span className="mr-2">Hapus</span> 🗑️
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg p-8 bg-white rounded-lg shadow-md">
              Pilih data pasien dari daftar di samping untuk melihat detailnya atau tambahkan data baru.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasienManagement;
