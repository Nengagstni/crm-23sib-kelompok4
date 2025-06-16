import React, { useState } from "react";

const initialTestimonials = [
  {
    id: 1,
    name: "Andi Saputra",
    feedback: "Pelayanan sangat ramah dan cepat. Saya merasa nyaman selama pemeriksaan.",
    date: "10 Mei 2025",
    photo: "https://i.pravatar.cc/100?img=1",
    rating: 5
  },
  {
    id: 2,
    name: "Siti Rahma",
    feedback: "Dokternya sangat profesional dan informatif. Sangat saya rekomendasikan.",
    date: "18 Mei 2025",
    photo: "https://i.pravatar.cc/100?img=2",
    rating: 4
  },
  {
    id: 3,
    name: "Budi Santoso",
    feedback: "Tempatnya bersih dan fasilitas lengkap. Saya puas dengan pelayanan klinik ini.",
    date: "25 Mei 2025",
    photo: "https://i.pravatar.cc/100?img=3",
    rating: 4
  }
];

const PatientTestimonials = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [newTestimoni, setNewTestimoni] = useState({
    name: "",
    feedback: "",
    date: "",
    photo: "",
    rating: 5
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
      rating: parseInt(newTestimoni.rating),
      photo: newTestimoni.photo || "https://i.pravatar.cc/100?u=" + newTestimoni.name
    };
    setTestimonials([...testimonials, newEntry]);
    setNewTestimoni({ name: "", feedback: "", date: "", photo: "", rating: 5 });
    setShowForm(false);
  };

  const renderStars = (count) => {
    return "★★★★★☆☆☆☆☆".slice(5 - count, 10 - count);
  };

  return (
    <section className="min-h-screen bg-[#F9FAF9] py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-[#1D5B5C] mb-6">
          Apa Kata Pasien Kami?
        </h2>

        <div className="text-center mb-10">
          <button
            className="bg-[#1D5B5C] text-white px-6 py-2 rounded-full hover:bg-[#174b4c] transition"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Tutup Formulir" : "Tambah Testimoni"}
          </button>
        </div>

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-white max-w-xl mx-auto p-6 mb-10 rounded-xl shadow-lg space-y-4 border border-[#EFD070]"
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
            <select
              name="rating"
              value={newTestimoni.rating}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
              required
            >
              <option value="5">5 - Sangat Puas</option>
              <option value="4">4 - Puas</option>
              <option value="3">3 - Cukup</option>
              <option value="2">2 - Kurang</option>
              <option value="1">1 - Tidak Puas</option>
            </select>
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
              className="w-full bg-[#EFD070] text-[#1D5B5C] font-bold py-2 rounded hover:bg-yellow-400 transition"
            >
              Simpan Testimoni
            </button>
          </form>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, feedback, date, photo, rating }) => (
            <div
              key={id}
              className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[#EFD070]"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={photo}
                  alt={name}
                  className="w-14 h-14 rounded-full border-2 border-[#1D5B5C]"
                />
                <div>
                  <h4 className="font-bold text-lg text-[#1D5B5C]">{name}</h4>
                  <p className="text-sm text-gray-500">{date}</p>
                </div>
              </div>
              <p className="text-yellow-500 text-lg mb-2">
                {renderStars(rating)}
              </p>
              <p className="text-gray-700 leading-relaxed italic border-l-4 border-[#EFD070] pl-4">
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
