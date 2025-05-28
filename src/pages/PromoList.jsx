import React, { useState } from "react";

const PromoList = () => {
  const [promos, setPromos] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    validUntil: "",
  });
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const localUrl = URL.createObjectURL(file);
      setPreviewImage(localUrl);
      setForm((prev) => ({ ...prev, image: localUrl }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPromo = {
      id: Date.now(),
      ...form,
    };
    setPromos([...promos, newPromo]);
    resetForm();
  };

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      image: "",
      price: "",
      validUntil: "",
    });
    setPreviewImage(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Manajemen Promo Klinik Gigi Gaia</h2>

      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-6 mb-10">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Tambah Promo Baru</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Judul Promo"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Deskripsi"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={3}
            required
          ></textarea>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="w-full max-h-52 object-cover rounded-md mt-2"
            />
          )}

          <input
            type="text"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Harga Promo"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="date"
            name="validUntil"
            value={form.validUntil}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200"
          >
            Tambahkan Promo
          </button>
        </form>
      </div>

      {/* Tampilkan Promo */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {promos.map((promo) => (
          <div
            key={promo.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-700">{promo.title}</h4>
              <p className="text-gray-600 text-sm mt-1">{promo.description}</p>
              <div className="mt-2 text-blue-600 font-bold">{promo.price}</div>
              <div className="text-sm text-gray-500">
                Berlaku hingga: {promo.validUntil}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoList;
