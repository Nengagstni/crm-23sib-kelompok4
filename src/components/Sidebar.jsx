import { BsReverseListColumnsReverse } from "react-icons/bs";
import { FaNotesMedical } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiTooth } from "react-icons/gi";
import { BiBookOpen } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { MdBedroomBaby } from "react-icons/md";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Box,
  BarChart2,
  Settings,
  LogIn,
  MessageCircle,
  CalendarCheck,
  Tag,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard />, path: "/Dashboard" },
  { name: "Email", icon: <AiOutlineMail />, path: "/Email" },
  { name: "TriggerMarketing", icon: <BsFillPeopleFill />, path: "/TriggerMarketing" },
  // { name: "SocialMediaMarketing", icon: <BsFillPeopleFill />, path: "/SocialMediaMarketing" },
  { name: "Janji Temu", icon: <CalendarCheck />, path: "/JanjiTemu" },
  { name: "Fasilitas", icon: <MdBedroomBaby />, path: "/Fasilitas" },
  { name: "JenisPerawatan", icon: <GiTooth />, path: "/JenisPerawatan" },
  { name: "RekamMedis", icon: <FaNotesMedical />, path: "/RekamMedis" },
  { name: "Pasien Management", icon: <BsReverseListColumnsReverse />, path: "/PasienManagement" },
];

const accountItems = [
  { name: "Pengaturan Akun", icon: <Settings />, path: "/akun" },
  // Ini akan mengarahkan ke halaman home jika home Anda di root ('/')
  { name: "LogOut", icon: <LogIn />, path: "/Home" },
];

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className="w-64 min-h-screen flex flex-col justify-between px-4 py-6 hidden md:flex"
      style={{ backgroundColor: "#EFD070" }}
    >
      {/* Bagian atas: Logo dan Menu */}
      <div className="flex-1">
        {/* Logo Klinik */}
        <div className="bg-[#1D5B5C] p-4 rounded-xl mb-6 shadow-md flex justify-center">
          <img
            src="https://gaiadentalclinic.id/wp-content/uploads/2023/03/gaia-logo-side-2-1400x408.png"
            alt="Gaia Dental Logo"
            className="w-36 h-auto"
          />
        </div>

        {/* Menu Navigasi */}
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${isActive(item.path)
                  ? "bg-[#1D5B5C] text-white font-semibold"
                  : "text-[#1D5B5C] hover:bg-[#1D5B5C] hover:text-white"
                }`}
            >
              <span className="w-6 h-6 flex items-center justify-center">
                {React.cloneElement(item.icon, { size: 20 })}
              </span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bagian bawah: Akun */}
      <div className="pb-2">
        <div className="mt-8 text-xs font-semibold text-[#1D5B5C]">AKUN</div>
        <nav className="mt-2 space-y-1">
          {accountItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${isActive(item.path)
                  ? "bg-[#1D5B5C] text-white font-semibold"
                  : "text-[#1D5B5C] hover:bg-[#1D5B5C] hover:text-white"
                }`}
            >
              <span className="w-6 h-6 flex items-center justify-center">
                {React.cloneElement(item.icon, { size: 20 })}
              </span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;