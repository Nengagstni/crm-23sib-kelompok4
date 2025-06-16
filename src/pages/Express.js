import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5001/api/appointments"; // Ganti sesuai alamat backend kamu

const JanjiTemu = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    nama: "",
    tindakan: "",
    tanggal: "",
    jam: "",
    status: "Menunggu",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get(API_URL);
      setAppointments(res.data);
    } catch (err) {
      console.error("Gagal mengambil data:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Data disubmit:", formData);
    try {
      if (isEditing) {
        await axios.put(`${API_URL}/${editId}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }
      fetchAppointments();
      resetForm();
    } catch (err) {
      console.error("Gagal menyimpan:", err);
    }
  };

  const resetForm = () => {
    setFormData({
      nama: "",
      tindakan: "",
      tanggal: "",
      jam: "",
      status: "Menunggu",
    });
    setIsEditing(false);
    setEditId(null);
  };

  const handleEdit = (appointment) => {
    setFormData(appointment);
    setIsEditing(true);
    setEditId(appointment._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchAppointments();
      } catch (err) {
        console.error("Gagal menghapus:", err);
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Janji Temu Pasien</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Nama Pasien"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="tindakan"
            value={formData.tindakan}
            onChange={handleChange}
            placeholder="Tindakan"
            className="border p-2 rounded"
            required
          />
          <input
            type="date"
            name="tanggal"
            value={formData.tanggal}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="time"
            name="jam"
            value={formData.jam}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="Menunggu">Menunggu</option>
            <option value="Selesai">Selesai</option>
            <option value="Batal">Batal</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {isEditing ? "Update" : "Simpan"}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={resetForm}
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Batal Edit
            </button>
          )}
        </div>
      </form>

      <table className="w-full table-auto border border-gray-300 text-sm">
        <thead>
          <tr className="bg-green-100">
            <th className="p-2 border">Nama</th>
            <th className="p-2 border">Tindakan</th>
            <th className="p-2 border">Tanggal</th>
            <th className="p-2 border">Jam</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((apt) => (
            <tr key={apt._id}>
              <td className="p-2 border">{apt.nama}</td>
              <td className="p-2 border">{apt.tindakan}</td>
              <td className="p-2 border">{apt.tanggal}</td>
              <td className="p-2 border">{apt.jam}</td>
              <td className="p-2 border">{apt.status}</td>
              <td className="p-2 border space-x-1">
                <button
                  onClick={() => handleEdit(apt)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(apt._id)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
          {appointments.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-500">
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
