import { BiCalendar } from "react-icons/bi"; 
import { CgProfile } from "react-icons/cg"; 
import { FaCartArrowDown } from "react-icons/fa"; 
import { FaTooth } from "react-icons/fa"; 
import { GoClock } from "react-icons/go";

import {
  LayoutDashboard,
  Users,         // untuk pelanggan
  ShoppingCart,  // untuk penjualan
  Box,           // untuk produk
  BarChart2,     // untuk laporan
  Settings,      // untuk pengaturan akun
  User,
  LogIn,
  UserPlus,
  PanelsRightBottom,
  MessageCircle,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
// import { FaTooth } from "react-icons/fa"; 
import { CalendarCheck } from 'lucide-react';


const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/' },
  { name: 'Produk', icon: <Box />, path: '/produk' },
  { name: 'Penjualan', icon: <ShoppingCart/>, path: '/penjualan' },
  { name: 'Pelanggan', icon: <ShoppingCart/>, path: '/pelanggan' },
  { name: 'Laporan', icon: <BarChart2 />, path: '/laporan' },
  { name: 'PromoList', icon: <PanelsRightBottom />, path: '/PromoList' },
  { name: 'TestimoniPasien', icon: <MessageCircle />, path: '/TestimoniPasien' },
  // { name: 'JenisPerawatan', icon: <FaTooth />, path: '/JenisPerawatan' },
  { name: 'Fasilitas', icon: <FaCartArrowDown />, path: '/Fasilitas' },
  { name: 'Profile', icon: <CgProfile />, path: '/Profile />' },
  { name: 'Reservasi', icon: <BiCalendar/>, path: '/Reservasi />' },

]

const accountItems = [
  { name: 'Pengaturan Akun', icon: <Settings />, path: '/akun' },
  { name: 'Sign In', icon: <LogIn />, path: '/signin' },
  { name: 'Sign Up', icon: <UserPlus />, path: '/signup' },
]

const Sidebar = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <aside className="bg-white w-64 h-screen shadow-lg px-4 py-6 hidden md:block">
      <div className="text-xl font-bold mb-8 text-purple-700">UMKM CRM</div>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
              isActive(item.path)
                ? 'bg-purple-200 text-purple-800 font-semibold'
                : 'text-gray-700'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-8 text-xs font-semibold text-gray-500">AKUN</div>
      <nav className="mt-2 space-y-1">
        {accountItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
              isActive(item.path)
                ? 'bg-purple-200 text-purple-800 font-semibold'
                : 'text-gray-700'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
