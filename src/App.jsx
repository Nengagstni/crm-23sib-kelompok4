import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import CustomerManagement from './pages/CustomerManagement';
import PromoList from './pages/PromoList'; 
import TestimoniPasien from './pages/TestimoniPasien'; // ✅ Tambahan

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="CustomerManagement" element={<CustomerManagement />} />
        <Route path="Promo" element={<PromoList />} />
        <Route path="TestimoniPasien" element={<TestimoniPasien />} /> {/* ✅ Tambahan */}
      </Route>
    </Routes>
  );
}

export default App;
