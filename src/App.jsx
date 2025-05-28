import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Dashboard from './pages/Dashboard'
import SalesManagement from './pages/SalesManagement'
import ProductManagement from './pages/ProductManagement'
import CustomerManagement from './pages/CustomerManagement'
import JenisPerawatan from './pages/JenisPerawatan'
import Reservasi from './pages/Reservasi' // ✅ Tambahkan ini

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/penjualan" element={<SalesManagement />} />
        <Route path="/produk" element={<ProductManagement />} />
        <Route path="/pelanggan" element={<CustomerManagement />} />
        <Route path="/jenis-perawatan" element={<JenisPerawatan />} />
        <Route path="/reservasi" element={<Reservasi />} />
      </Route>
    </Routes>
  )
}

export default App
