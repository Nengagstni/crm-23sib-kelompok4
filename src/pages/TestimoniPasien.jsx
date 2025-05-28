import React, { useState } from "react";

const initialTestimonials = [
  {
    id: 1,
    name: "Andi Saputra",
    feedback: "Pelayanan sangat ramah dan cepat. Saya merasa nyaman selama pemeriksaan.",
    date: "10 Mei 2025",
    photo: "https://i.pravatar.cc/100?img=1"
  },
  {
    id: 2,
    name: "Siti Rahma",
    feedback: "Dokternya sangat profesional dan informatif. Sangat saya rekomendasikan.",
    date: "18 Mei 2025",
    photo: "https://i.pravatar.cc/100?img=2"
  },
  {
    id: 3,
    name: "Budi Santoso",
    feedback: "Tempatnya bersih dan fasilitas lengkap. Saya puas dengan pelayanan klinik ini.",
    date: "25 Mei 2025",
    photo: "https://i.pravatar.cc/100?img=3"
  }
];

const PatientTestimonials = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [newTestimoni, setNewTestimoni] = useState({
    name: "",
    feedback: "",
    date: "",
    photo: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTestimoni((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      ...newTestimoni,
      id: testimonials.length + 1,
      photo: newTestimoni.photo || "https://i.pravatar.cc/100?u=" + newTestimoni.name
    };
    setTestimonials([...testimonials, newEntry]);
    setNewTestimoni({ name: "", feedback: "", date: "", photo: "" });
    setShowForm(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-6">Apa Kata Pasien Kami?</h2>

        <div className="text-center mb-10">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Tutup Formulir" : "Tambah Testimoni"}
          </button>
        </div>

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-white max-w-xl mx-auto p-6 mb-10 rounded-xl shadow-lg space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Nama"
              value={newTestimoni.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
            <input
              type="date"
              name="date"
              value={newTestimoni.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
            <input
              type="text"
              name="photo"
              placeholder="URL Foto (Opsional)"
              value={newTestimoni.photo}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
            />
            <textarea
              name="feedback"
              placeholder="Isi Testimoni"
              value={newTestimoni.feedback}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Simpan Testimoni
            </button>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, feedback, date, photo }) => (
            <div key={id} className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={photo}
                  alt={name}
                  className="w-14 h-14 rounded-full border-2 border-blue-500"
                />
                <div>
                  <h4 className="font-bold text-lg text-blue-800">{name}</h4>
                  <p className="text-sm text-gray-500">{date}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic border-l-4 border-blue-300 pl-4">
                “{feedback}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;
