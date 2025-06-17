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
  { name: "Dashboard", icon: <LayoutDashboard />, path: "/" },
  { name: "Produk", icon: <Box />, path: "/produk" },
  { name: "Penjualan", icon: <ShoppingCart />, path: "/penjualan" },
  { name: "Pelanggan", icon: <Users />, path: "/pelanggan" },
  { name: "Laporan", icon: <BarChart2 />, path: "/laporan" },
  { name: "PromoList", icon: <Tag />, path: "/PromoList" },
  { name: "JanjiTemu", icon: <CalendarCheck />, path: "/JanjiTemu" },
  { name: "TestimoniPasien", icon: <MessageCircle />, path: "/TestimoniPasien" },
  { name: "Reservasi", icon: <BiBookOpen />, path: "/Reservasi" },
  { name: "Email", icon: <AiOutlineMail />, path: "/Email" },
  { name: "Fasilitas", icon: <MdBedroomBaby />, path: "/Fasilitas" },
  { name: "JenisPerawatan", icon: <GiTooth />, path: "/JenisPerawatan" },
  { name: "Profile", icon: <BsFillPeopleFill />, path: "/Profile" },
];

const accountItems = [
  { name: "Pengaturan Akun", icon: <Settings />, path: "/akun" },
  { name: "Sign In", icon: <LogIn />, path: "/signin" },
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
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                isActive(item.path)
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
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                isActive(item.path)
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
