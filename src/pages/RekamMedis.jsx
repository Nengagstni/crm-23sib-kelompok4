import React, { useState, useEffect } from "react";

// Data dummy awal untuk pengujian lokal (SEKARANG ARRAY objek)
const initialLocalData = [
  {
    id: "local_1", // ID lokal untuk identifikasi
    nama: "Diana Rahma",
    nomorRekamMedis: "1002983001",
    email: "diana23@gmail.com",
    whatsapp: "081234567891",
    tanggalKunjungan: "2024-06-11", // Format YYYY-MM-DD untuk input tipe date
    jenisPerawatan: "Behel",
    dokter: "drg. Sonya Juita",
    diagnosaUtama: "Gigi atas lebih maju dari gigi bawah",
    obatMaterial: "--",
    catatanDokter: "Hindari makanan yang keras",
    jenisTindakan: "Pemasangan Bracket",
    tindakanObatMaterial: "Metal self-ligating",
    dosisTindakan: "1 tablet paracetamol (500 mg)",
    statusTindakan: "Selesai",
    tanggalResep: "2024-06-11",
    namaObat: "Paracetamol (500 mg)",
    dosisFrekuensi: "Setelah pemasangan behel",
  },
  {
    id: "local_2",
    nama: "Budi Santoso",
    nomorRekamMedis: "1002983002",
    email: "budi.s@gmail.com",
    whatsapp: "081298765432",
    tanggalKunjungan: "2024-06-15",
    jenisPerawatan: "Pembersihan Karang Gigi",
    dokter: "drg. Amelia Putri",
    diagnosaUtama: "Penumpukan plak dan karang gigi",
    obatMaterial: "Fluoride gel",
    catatanDokter: "Saran sikat gigi 2x sehari",
    jenisTindakan: "Scaling",
    tindakanObatMaterial: "Ultrasonic scaler",
    dosisTindakan: "Tanpa obat",
    statusTindakan: "Selesai",
    tanggalResep: "2024-06-15",
    namaObat: "Mouthwash antiseptik",
    dosisFrekuensi: "2x sehari selama 1 minggu",
  },
];

const RekamMedis = () => {
  // state untuk semua data rekam medis (ARRAY)
  const [data, setData] = useState(initialLocalData);
  // state untuk rekam medis yang sedang ditampilkan di kartu detail
  const [selectedRekamMedis, setSelectedRekamMedis] = useState(null);
  // state untuk mengelola data form (untuk edit/tambah)
  const [form, setForm] = useState(null);
  // Untuk mengontrol visibilitas form/modal
  const [isFormOpen, setIsFormOpen] = useState(false);
  // Status untuk pesan pengguna (misalnya, sukses/error)
  const [message, setMessage] = useState('');

  // Set rekam medis pertama sebagai default saat komponen dimuat
  useEffect(() => {
    if (data.length > 0 && !selectedRekamMedis) {
      setSelectedRekamMedis(data[0]);
    }
  }, [data, selectedRekamMedis]);

  // Fungsi untuk merender bagian kartu rekam medis
  const renderSection = (title, contentRows) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#1d5b5c] mb-3">{title}</h3>
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

  // Fungsi untuk menangani penghapusan rekam medis
  const handleDelete = (idToDelete) => {
    // Konfirmasi sebelum menghapus
    if (!window.confirm("Apakah Anda yakin ingin menghapus catatan ini?")) {
      return;
    }

    const updatedData = data.filter((item) => item.id !== idToDelete);
    setData(updatedData);
    setMessage("Catatan berhasil dihapus!");

    // Jika yang dihapus adalah yang sedang ditampilkan, kosongkan selectedRekamMedis atau pilih yang lain
    if (selectedRekamMedis && selectedRekamMedis.id === idToDelete) {
      setSelectedRekamMedis(updatedData.length > 0 ? updatedData[0] : null);
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
      nomorRekamMedis: "",
      email: "",
      whatsapp: "",
      tanggalKunjungan: "",
      jenisPerawatan: "",
      dokter: "",
      diagnosaUtama: "",
      obatMaterial: "",
      catatanDokter: "",
      jenisTindakan: "",
      tindakanObatMaterial: "",
      dosisTindakan: "",
      statusTindakan: "",
      tanggalResep: "",
      namaObat: "",
      dosisFrekuensi: "",
    });
    setIsFormOpen(true); // Tampilkan form
    // Tidak perlu scroll otomatis karena modal akan di tengah
  };

  // Fungsi untuk menangani penyerahan form (menambah atau memperbarui data)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id) { // Jika form.id ada, artinya ini adalah operasi edit
      const updatedData = data.map((item) =>
        item.id === form.id ? form : item
      );
      setData(updatedData);
      setSelectedRekamMedis(form); // Update kartu detail dengan data yang diedit
      setMessage("Catatan berhasil diperbarui!");
    } else { // Jika form.id tidak ada, artinya ini adalah operasi tambah baru
      const newRecord = { ...form, id: Date.now().toString() }; // Generate ID baru
      setData([...data, newRecord]); // Tambahkan data baru ke array
      setSelectedRekamMedis(newRecord); // Tampilkan yang baru ditambahkan di kartu detail
      setMessage("Catatan berhasil ditambahkan!");
    }
    setIsFormOpen(false); // Tutup form setelah submit
    setForm(null); // Bersihkan form
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-gray-100 min-h-screen font-inter">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#1d5b5c] rounded-lg p-4 shadow-lg bg-white">Manajemen Rekam Medis Pasien</h2>

      {message && (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6 rounded-lg shadow-md" role="alert">
          <p className="font-bold">Info</p>
          <p>{message}</p>
        </div>
      )}

      {/* Tombol untuk Menambah Rekam Medis Baru */}
      <div className="text-center mb-8">
        <button
          onClick={handleAddNew}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center justify-center mx-auto transform transition duration-200 hover:scale-105"
        >
          ➕ Tambah Rekam Medis Baru
        </button>
      </div>

      {/* Form Tambah/Edit Rekam Medis (Muncul sebagai modal/overlay) */}
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
              {form?.id ? "Edit Data Rekam Medis" : "Tambah Data Rekam Medis Baru"}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <input
                  type="text"
                  placeholder="Nama"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1d5b5c] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.nama || ""}
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="No. Rekam Medis"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1d5b5c] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.nomorRekamMedis || ""}
                  onChange={(e) => setForm({ ...form, nomorRekamMedis: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1d5b5c] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.email || ""}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="No. Whatsapp"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1d5b5c] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.whatsapp || ""}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  required
                />
                <input
                  type="date"
                  placeholder="Tanggal Kunjungan"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1d5b5c] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.tanggalKunjungan || ""}
                  onChange={(e) => setForm({ ...form, tanggalKunjungan: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Jenis Perawatan"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1d5b5c] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.jenisPerawatan || ""}
                  onChange={(e) => setForm({ ...form, jenisPerawatan: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Dokter"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1d5b5c] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.dokter || ""}
                  onChange={(e) => setForm({ ...form, dokter: e.target.value })}
                  required
                />
                {/* Bidang Diagnosa */}
                <input
                  type="text"
                  placeholder="Diagnosa Utama"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1d5b5c] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.diagnosaUtama || ""}
                  onChange={(e) => setForm({ ...form, diagnosaUtama: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Obat/Material Digunakan (Diagnosa)"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1d5b5c] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.obatMaterial || ""}
                  onChange={(e) => setForm({ ...form, obatMaterial: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Catatan Dokter (Diagnosa)"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1d5b5c] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.catatanDokter || ""}
                  onChange={(e) => setForm({ ...form, catatanDokter: e.target.value })}
                />
                {/* Bidang Tindakan Perawatan */}
                <input
                  type="text"
                  placeholder="Jenis Tindakan"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1d5b5c] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.jenisTindakan || ""}
                  onChange={(e) => setForm({ ...form, jenisTindakan: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Obat/Material (Tindakan)"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1d5b5c] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.tindakanObatMaterial || ""}
                  onChange={(e) => setForm({ ...form, tindakanObatMaterial: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Dosis (Tindakan)"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1d5b5c] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.dosisTindakan || ""}
                  onChange={(e) => setForm({ ...form, dosisTindakan: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Status (Tindakan)"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1d5b5c] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.statusTindakan || ""}
                  onChange={(e) => setForm({ ...form, statusTindakan: e.target.value })}
                />
                {/* Bidang Resep Obat */}
                <input
                  type="date"
                  placeholder="Tanggal Resep"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1d5b5c] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.tanggalResep || ""}
                  onChange={(e) => setForm({ ...form, tanggalResep: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Nama Obat (Resep)"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1d5b5c] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.namaObat || ""}
                  onChange={(e) => setForm({ ...form, namaObat: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Dosis & Frekuensi (Resep)"
                  className="border border-gray-300 focus:ring-2 focus:ring-[#1d5b5c] focus:border-transparent p-3 rounded-md transition duration-200 ease-in-out shadow-sm"
                  value={form?.dosisFrekuensi || ""}
                  onChange={(e) => setForm({ ...form, dosisFrekuensi: e.target.value })}
                />
              </div>
              <div className="mt-8 flex justify-center gap-4">
                <button
                  type="submit"
                  className="bg-[#1d5b5c] hover:bg-[#154647] text-white font-bold px-6 py-3 rounded-lg shadow-md transform transition duration-200 hover:scale-105"
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

      {/* Bagian Tabel Data dan Kartu Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {/* Tabel Daftar Pasien */}
        <div className="overflow-x-auto rounded-lg shadow-lg bg-white h-96"> {/* Tinggi tetap agar tidak memanjang */}
          <h3 className="text-xl font-semibold text-gray-800 p-4 bg-gray-50 border-b border-gray-200">Daftar Pasien</h3>
          <table className="w-full text-sm">
            <thead className="bg-[#1d5b5c] text-white">
              <tr>
                <th className="p-3 text-left">Nama</th>
                <th className="p-3 text-left">No. RM</th>
                <th className="p-3 text-left">Kunjungan</th>
                <th className="p-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item) => (
                  <tr
                    key={item.id}
                    className={`text-left border-t border-gray-200 hover:bg-gray-50 cursor-pointer ${selectedRekamMedis?.id === item.id ? 'bg-blue-50' : ''}`}
                    onClick={() => setSelectedRekamMedis(item)}
                  >
                    <td className="p-3">{item.nama}</td>
                    <td className="p-3">{item.nomorRekamMedis}</td>
                    <td className="p-3">{item.tanggalKunjungan}</td>
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
                    Belum ada data. Tambahkan data baru di atas!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Kartu Detail Rekam Medis (tampilan seperti gambar) */}
        <div className="lg:sticky lg:top-6 self-start">
          {selectedRekamMedis ? (
            <div className="bg-white rounded-lg shadow-xl p-6">
              {renderSection("Data Pasien", [
                { label: "Nama Pasien", value: selectedRekamMedis.nama },
                { label: "Nomor Rekam Medis", value: selectedRekamMedis.nomorRekamMedis },
                { label: "Email", value: selectedRekamMedis.email },
                { label: "Nomor Whatsapp", value: selectedRekamMedis.whatsapp },
              ])}

              {renderSection("Riwayat Kunjungan", [
                { label: "Tanggal Kunjungan", value: selectedRekamMedis.tanggalKunjungan },
                { label: "Jenis Perawatan", value: selectedRekamMedis.jenisPerawatan },
                { label: "Dokter Penanggungjawab", value: selectedRekamMedis.dokter },
              ])}

              {renderSection("Diagnosa", [
                { label: "Diagnosa Utama", value: selectedRekamMedis.diagnosaUtama || 'Tidak ada data' },
                { label: "Obat/Material yang Digunakan", value: selectedRekamMedis.obatMaterial || 'Tidak ada data' },
                { label: "Catatan Dokter", value: selectedRekamMedis.catatanDokter || 'Tidak ada data' },
              ])}

              {renderSection("Tindakan Perawatan", [
                { label: "Jenis Tindakan", value: selectedRekamMedis.jenisTindakan || 'Tidak ada data' },
                { label: "Obat/Material", value: selectedRekamMedis.tindakanObatMaterial || 'Tidak ada data' },
                { label: "Dosis", value: selectedRekamMedis.dosisTindakan || 'Tidak ada data' },
                { label: "Status", value: selectedRekamMedis.statusTindakan || 'Tidak ada data' },
              ])}

              {renderSection("Resep Obat", [
                { label: "Tanggal Resep", value: selectedRekamMedis.tanggalResep || 'Tidak ada data' },
                { label: "Nama Obat", value: selectedRekamMedis.namaObat || 'Tidak ada data' },
                { label: "Dosis & Frekuensi", value: selectedRekamMedis.dosisFrekuensi || 'Tidak ada data' },
              ])}

              {/* Tombol Aksi untuk rekam medis yang ditampilkan */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={() => handleEdit(selectedRekamMedis)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center transform transition duration-200 hover:scale-105"
                >
                  <span className="mr-2">Edit</span> ✏️
                </button>
                <button
                  onClick={() => handleDelete(selectedRekamMedis.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center transform transition duration-200 hover:scale-105"
                >
                  <span className="mr-2">Hapus</span> 🗑️
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg p-8 bg-white rounded-lg shadow-md">
              Pilih data rekam medis dari daftar di samping untuk melihat detailnya.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RekamMedis;
