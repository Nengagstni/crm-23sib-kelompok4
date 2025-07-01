import { useState } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiTooth } from "react-icons/gi";
import { BiBookOpen } from "react-icons/bi";
import { Settings, LogIn, MessageCircle, Tag, Bell } from "lucide-react"; // Import Bell icon
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import React from "react";

const menuItems = [
  { name: "Home", icon: <AiTwotoneHome />, path: "/Home" },
  { name: "Promo", icon: <Tag />, path: "/PromoList" },
  { name: "Testimoni", icon: <MessageCircle />, path: "/TestimoniPasien" },
  { name: "Fasilitas Kami", icon: <BiBookOpen />, path: "/FasilitasKami" },
  { name: "Profile", icon: <BsFillPeopleFill />, path: "/Profile" },
  { name: "Perawatan", icon: <GiTooth />, path: "/Perawatan" },
  { name: "Asuransi", icon: <GiTooth />, path: "/Asuransi" },
];

const HeaderUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false); // New state for chat overlay

  const isActive = (path) => location.pathname === path;

  const handleAuthClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      navigate("/signin");
    } else {
      setIsLoggedIn(true);
      navigate("/signin");
    }
    setIsMobileMenuOpen(false);
  };

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <header className="w-full z-10">
      {/* Top Header */}
      <div className="bg-[#165A5A] text-white flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4">
        {/* Logo & Slogan */}
        <div className="flex items-center space-x-4">
          <img
            src="https://gaiadentalclinic.id/wp-content/uploads/2023/03/gaia-logo-side-2-1400x408.png"
            alt="Logo"
            className="h-10"
          />
          <div className="text-sm">
            <p className="font-semibold">Your favorite dental clinic in Sumatera.</p>
            <p>We love to see you smile.</p>
          </div>
        </div>

        {/* Jam & Reservasi */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 mt-4 md:mt-0">
          <div className="text-sm text-center md:text-right">
            <p className="font-semibold">Buka Setiap Hari :</p>
            <p>09.00 – 21.00 WIB</p>
          </div>

          {/* Notification Icon */}
          <button onClick={handleChatToggle} className="text-white text-xl ml-4 hover:text-[#EFD070] cursor-pointer">
            <Bell size={24} />
          </button>

          {/* Members Button */}
          <Link
            to="/members" // Path to your Members.jsx page
            className="ml-4 bg-[#EFD070] text-[#1D5B5C] font-bold px-4 py-2 rounded-lg border border-[#EFD070] hover:bg-opacity-90"
          >
            MEMBERS
          </Link>

          <Link
            to="/Reservasi"
            className="mt-2 md:mt-0 bg-[#EFD070] text-[#1D5B5C] font-bold px-4 py-2 rounded-lg border border-[#EFD070] hover:bg-opacity-90"
          >
            RESERVASI
          </Link>

          <div className="flex space-x-3 mt-2 md:mt-0 text-xl">
            <FaInstagram className="hover:text-[#EFD070] cursor-pointer" />
            <FaTiktok className="hover:text-[#EFD070] cursor-pointer" />
            <FaEnvelope className="hover:text-[#EFD070] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-[#EFD070] shadow-md px-4 py-3 flex items-center justify-between relative md:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center w-full space-x-6 lg:space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-base font-medium transition ${
                isActive(item.path)
                  ? "text-[#1D5B5C] font-semibold underline underline-offset-4"
                  : "text-gray-700 hover:text-[#1D5B5C]"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Login button pushed to right */}
          <button
            onClick={handleAuthClick}
            className={`ml-auto flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
              isLoggedIn
                ? "bg-[#1D5B5C] text-white hover:bg-opacity-90"
                : "bg-gray-200 text-[#1D5B5C] hover:bg-gray-300"
            }`}
          >
            <span>{isLoggedIn ? <Settings size={18} /> : <LogIn size={18} />}</span>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#1D5B5C] focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#EFD070] shadow-lg py-4 md:hidden">
            <nav className="flex flex-col space-y-2 px-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                    isActive(item.path)
                      ? "bg-[#1D5B5C] text-white font-semibold"
                      : "text-[#1D5B5C] hover:bg-[#1D5B5C] hover:text-white"
                  }`}
                >
                  <span className="w-5 h-5 flex items-center justify-center">
                    {React.cloneElement(item.icon, { size: 18 })}
                  </span>
                  {item.name}
                </Link>
              ))}
              <button
                onClick={handleAuthClick}
                className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                  isLoggedIn
                    ? "bg-[#1D5B5C] text-white font-semibold"
                    : "text-[#1D5B5C] hover:bg-[#1D5B5C] hover:text-white"
                }`}
              >
                <span className="w-5 h-5 flex items-center justify-center">
                  {isLoggedIn ? <Settings size={18} /> : <LogIn size={18} />}
                </span>
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* Chat Overlay */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-11/12 md:w-1/2 lg:w-1/3 p-6 relative flex flex-col h-[70vh]">
            <h3 className="text-xl font-bold text-[#1D5B5C] mb-4">Chat dengan Admin Gaia Dental Clinic</h3>
            <button
              onClick={handleChatToggle}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Area Notifikasi / Chat Messages */}
            <div className="flex-grow overflow-y-auto border border-gray-300 rounded-lg p-3 mb-4 space-y-4">
              {/* Contoh Notifikasi 1 (Kontrol Gigi Rutin) */}
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <p className="font-semibold text-blue-800 mb-1">Waktunya Kontrol Gigi Rutin Anda di Klinik Gaia Dental! ✨</p>
                <p className="text-sm text-gray-700">Halo Pasien Setia,</p>
                <p className="text-sm text-gray-700 mt-1">Senyum sehat Anda adalah prioritas kami! Kami ingin mengingatkan bahwa sudah waktunya untuk **kontrol gigi rutin** Anda di Klinik Gaia Dental.</p>
                <p className="text-sm text-gray-700 mt-1">Pemeriksaan rutin penting untuk menjaga gigi Anda tetap kuat dan mendeteksi masalah lebih awal, sehingga senyum indah Anda selalu terjaga.</p>
                <p className="text-sm text-gray-700 mt-2">Anda bisa menjadwalkan kunjungan Anda melalui: <a href="/Reservasi" className="text-[#1D5B5C] underline">Aplikasi Reservasi Kami</a> atau hubungi kami di **0812-3456-7890** (Telepon/WhatsApp).</p>
                <p className="text-xs text-right text-gray-500 mt-2">Dari: Admin Gaia Dental - 01 Juli 2025</p>
              </div>

              {/* Contoh Notifikasi 2 (Kontrol Saluran Akar) */}
              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                <p className="font-semibold text-yellow-800 mb-1">Ingat Jadwal Kontrol Saluran Akar Gigi Anda di Klinik Gaia Dental</p>
                <p className="text-sm text-gray-700">Halo Pasien Setia,</p>
                <p className="text-sm text-gray-700 mt-1">Kami harap Anda dalam keadaan baik. Ini adalah pengingat penting mengenai **kontrol pasca-perawatan saluran akar gigi** Anda di Klinik Gaia Dental.</p>
                <p className="text-sm text-gray-700 mt-1">Jadwal kontrol Anda adalah pada: **Tanggal: 05 Juli 2025**, **Pukul: 14.00 WIB**.</p>
                <p className="text-sm text-gray-700 mt-2">Mohon konfirmasi kehadiran Anda dengan membalas pesan ini atau menghubungi kami.</p>
                <p className="text-xs text-right text-gray-500 mt-2">Dari: Admin Gaia Dental - 30 Juni 2025</p>
              </div>

              {/* Contoh Pesan Lainnya dari Admin */}
              <div className="bg-gray-100 p-3 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-800 mb-1">Informasi Promo Terbaru!</p>
                <p className="text-sm text-gray-700">Halo! Kami punya promo menarik untuk scaling gigi. Dapatkan diskon 20% selama bulan Juli! Kunjungi halaman promo kami untuk info lebih lanjut.</p>
                <p className="text-xs text-right text-gray-500 mt-2">Dari: Admin Gaia Dental - 28 Juni 2025</p>
              </div>
            </div>

            {/* Input Pesan Chat */}
            <input
              type="text"
              placeholder="Ketik pesan Anda..."
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#1D5B5C]"
            />
            <button className="mt-3 w-full bg-[#1D5B5C] text-white font-bold py-2 rounded-lg hover:bg-opacity-90">
              Kirim
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderUser;