import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Dashboard from './pages/Dashboard'
import CustomerManagement from './pages/CustomerManagement'
import Fasilitas from './pages/Fasilitas'
import JenisPerawatan from './pages/JenisPerawatan'
import Profile from './pages/Profile'
import PromoList from './pages/PromoList'
import Reservasi from './pages/Reservasi'
import TestimoniPasien from './pages/TestimoniPasien'
import JanjiTemu from './pages/JanjiTemu'


function App() {
  return (
      <Routes>
        <Route element ={<MainLayout/>}>
        <Route path="/" element={<Dashboard/>}/>
        <Route path='/CustomerManagement' element={<CustomerManagement/>}></Route>
        <Route path='/Fasilitas' element={<Fasilitas/>}></Route>
        <Route path='/JenisPerawatan' element={<JenisPerawatan/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/PromoList' element={<PromoList/>}></Route>
        <Route path='/Reservasi' element={<Reservasi/>}></Route>
        <Route path='/TestimoniPasien' element={<TestimoniPasien/>}></Route>
        </Route>
      </Routes>
  
  )
}

export default App;
