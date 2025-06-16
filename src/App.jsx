import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import CustomerManagement from './pages/CustomerManagement';
import Fasilitas from './pages/Fasilitas';
import JenisPerawatan from './pages/JenisPerawatan';
import Profile from './pages/Profile';
import PromoList from './pages/PromoList';
import Reservasi from './pages/Reservasi';
import TestimoniPasien from './pages/TestimoniPasien';
import Email from './pages/Email';
import JanjiTemu from './pages/JanjiTemu'; // ✅ Import JanjiTemu
import { LogIn } from 'lucide-react';
import Signin from './pages/Signin';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="CustomerManagement" element={<CustomerManagement />} />
        <Route path="Fasilitas" element={<Fasilitas />} />
        <Route path="JenisPerawatan" element={<JenisPerawatan />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="PromoList" element={<PromoList />} />
        <Route path="Reservasi" element={<Reservasi />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="TestimoniPasien" element={<TestimoniPasien />} />
        <Route path="Email" element={<Email />} />
        <Route path="JanjiTemu" element={<JanjiTemu />} /> {/* ✅ Route baru */}
        <Route path="Login" element={<LogIn/>} />
        <Route path="Login" element={<Signin/>} />
      </Route>
    </Routes>
  );
}

export default App;
