import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import LayoutUser from './components/User/LayoutUser';

// Pages (Admin)
import Dashboard from './pages/Dashboard';
import CustomerManagement from './pages/CustomerManagement';
import Email from './pages/Email';
import TriggerMarketing from './pages/TriggerMarketing';
import SocialMediaMarketing from './pages/SocialMediaMarketing';

// Pages (Shared)
import Fasilitas from './pages/Fasilitas';
import JenisPerawatan from './pages/JenisPerawatan';
import Profile from './pages/Profile';
import PromoList from './pages/PromoList';
import Reservasi from './pages/Reservasi';
import TestimoniPasien from './pages/TestimoniPasien';
import JanjiTemu from './pages/JanjiTemu';

// Auth & Public Pages
import Signin from './pages/Signin';
import Home from './pages/Home';
import RekamMedis from './pages/RekamMedis';
import ContentManagement from './pages/ContentManagement';
import TentangKami from './pages/TentangKami';
import FasilitasKami from './pages/FasilitasKami';
import PasienManagement from './pages/PasienManagement';
import Perawatan from './pages/Perawatan';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PromoBehel from './pages/PromoBehel';
import PromoSpesial from './pages/PromoSpesial';
import PromoHappyHour from './pages/PromoHappyHour';
import Members from './pages/Members';
import Asuransi from './pages/Asuransi';

function App() {
  return (
    <Routes>

      {/* ---------- USER ROUTES ---------- */}
      <Route element={<LayoutUser />}>
        
        <Route path="/PromoList" element={<PromoList />} />
        <Route path="/Reservasi" element={<Reservasi />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/TestimoniPasien" element={<TestimoniPasien />} />
        <Route path="/ContentManagement" element={<ContentManagement />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/TentangKami" element={<TentangKami />} />
        <Route path="/FasilitasKami" element={<FasilitasKami />} />
        <Route path="/Perawatan" element={<Perawatan/>} />
        <Route path="/PromoBehel" element={<PromoBehel/>} />
        <Route path="/PromoSpesial" element={<PromoSpesial/>} />
        <Route path="/HappyHour" element={<PromoHappyHour/>} />
        <Route path="/Members" element={<Members/>} />
        <Route path="/Asuransi" element={<Asuransi/>} />
      </Route>


      <Route path="/Signin" element={<Signin />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/SignUp" element={<SignUp/>} />

      {/* ---------- ADMIN ROUTES ---------- */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/CustomerManagement" element={<CustomerManagement />} />
        <Route path="/Email" element={<Email />} />
        <Route path="/TriggerMarketing" element={<TriggerMarketing />} />
        <Route path="/SocialMediaMarketing" element={<SocialMediaMarketing />} />
        <Route path="/RekamMedis" element={<RekamMedis />} />
        <Route path="/Fasilitas" element={<Fasilitas />} />
        <Route path="/JenisPerawatan" element={<JenisPerawatan />} />
        <Route path="/JanjiTemu" element={<JanjiTemu />} />
        <Route path="/PasienManagement" element={<PasienManagement/>} />
      </Route>

      {/* ---------- DEFAULT ROUTE ---------- */}
      <Route path="/" element={<Navigate to="/Login" replace />} />
    </Routes>
  );
}

export default App;
