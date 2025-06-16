import { BiCalendar } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaCartArrowDown } from "react-icons/fa";

import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Box,
  BarChart2,
  Settings,
  LogIn,
  UserPlus,
  MessageCircle,
  PanelRight,
} from 'lucide-react';

import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/' },
  { name: 'Produk', icon: <Box />, path: '/produk' },
  { name: 'Penjualan', icon: <ShoppingCart />, path: '/penjualan' },
  { name: 'Pelanggan', icon: <Users />, path: '/pelanggan' },
  { name: 'Laporan', icon: <BarChart2 />, path: '/laporan' },
  { name: 'PromoList', icon: <PanelRight />, path: '/PromoList' },
  { name: 'TestimoniPasien', icon: <MessageCircle />, path: '/TestimoniPasien' },
  { name: 'Fasilitas', icon: <FaCartArrowDown />, path: '/Fasilitas' },
  { name: 'Profile', icon: <CgProfile />, path: '/Profile' },
  { name: 'Reservasi', icon: <BiCalendar />, path: '/Reservasi' },
  { name: 'Janji Temu', icon: <BiCalendar />, path: '/JanjiTemu' }, // ✅ Tambahkan ini
  { name: 'Email', icon: <FaCartArrowDown />, path: '/Email' },
];

const accountItems = [
  { name: 'Pengaturan Akun', icon: <Settings />, path: '/akun' },
  { name: 'Sign In', icon: <LogIn />, path: '/signin' },
  { name: 'Sign Up', icon: <UserPlus />, path: '/signup' },
];

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className="w-64 h-screen px-4 py-6 hidden md:block"
      style={{ backgroundColor: '#EFD070' }}
    >
      {/* Card View Logo */}
      <div className="bg-[#1D5B5C] p-4 rounded-xl mb-6 shadow-md flex justify-center">
        <img
          src="https://gaiadentalclinic.id/wp-content/uploads/2023/03/gaia-logo-side-2-1400x408.png"
          alt="Gaia Dental Logo"
          className="w-36 h-auto"
        />
      </div>

      

      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
              isActive(item.path)
                ? 'bg-[#1D5B5C] text-white font-semibold'
                : 'text-[#1D5B5C] hover:bg-[#1D5B5C] hover:text-white'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-8 text-xs font-semibold text-[#1D5B5C]">AKUN</div>

      <nav className="mt-2 space-y-1">
        {accountItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
              isActive(item.path)
                ? 'bg-[#1D5B5C] text-white font-semibold'
                : 'text-[#1D5B5C] hover:bg-[#1D5B5C] hover:text-white'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
