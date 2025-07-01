import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ← Wajib untuk redirect

const Signin = () => {
  const navigate = useNavigate(); // ← Hook dari react-router-dom
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  // ✅ Fungsi login
  const handleLogin = () => {
    // Simpan status login ke localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email); // Opsional

    // Redirect ke halaman admin
    navigate('/dashboard');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });

    // Simulasi validasi
    if (email && password) {
      alert('Login berhasil');
      handleLogin(); // ✅ Panggil handleLogin di sini
    } else {
      alert('Email dan password wajib diisi!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F5F3]">
      <div className="flex w-full max-w-5xl rounded-xl overflow-hidden shadow-lg bg-[#0F5555]">
        {/* Kiri: Form Login */}
        <div className="w-full md:w-1/2 p-10 text-white flex flex-col justify-center">
          <img
            src="https://gaiadentalclinic.id/wp-content/uploads/2023/03/gaia-logo-side-2-1400x408.png"
            alt="GAIA DENTAL CLINIC"
            className="w-60 mb-10"
          />
          <h2 className="text-3xl font-bold text-yellow-400 mb-2">Login</h2>
          <p className="text-sm text-white mb-6">Silakan isi rincian Anda untuk mengakses akun Anda.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 mt-1 rounded bg-white text-black focus:outline-none"
                placeholder="harby@example.com"
              />
            </div>

            <div>
              <label className="block text-sm">Kata Sandi</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 mt-1 rounded bg-white text-black focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-sm mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                  className="accent-yellow-400"
                />
                Ingatkan Saya
              </label>
              <a href="#" className="text-yellow-400 hover:underline">
                Lupa Kata Sandi?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500 mt-4"
            >
              Sign in
            </button>
          </form>
        </div>

        {/* Kanan: Gambar */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center p-6">
          <div className="border-[20px] border-yellow-300 rounded-[60px]">
            <img
              src="https://i.pinimg.com/736x/fa/6f/64/fa6f649e87f904b3a254e9dcf9575ea0.jpg"
              alt="Tooth Family"
              className="object-cover w-[300px] h-[300px] rounded-[40px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
