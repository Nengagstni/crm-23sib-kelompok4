import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Dashboard from './pages/Dashboard'
import SalesManagement from './pages/SalesManagement'
import ProductManagement from './pages/ProductManagement'

function App() {
 
  return (
      <Routes>
        <Route element ={<MainLayout/>}>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/penjualan" element={<SalesManagement/>}/>
        <Route path="/produk" element={<ProductManagement/>}/>
        </Route>
        
      </Routes>
  )
}

export default App
