import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Dashboard from './pages/Dashboard'
import SalesManagement from './pages/SalesManagement'
import ProductManagement from './pages/ProductManagement'
import Profile from './pages/Profile'
import Fasilitas from './pages/Fasilitas'

function App() {
 
  return (
      <Routes>
        <Route element ={<MainLayout/>}>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/penjualan" element={<SalesManagement/>}/>
        <Route path="/produk" element={<ProductManagement/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/fasilitas" element={<Fasilitas/>}/>
        </Route>
      </Routes>
  
  )
}

export default App
