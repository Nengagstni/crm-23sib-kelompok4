import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1D5B5C] text-white mt-20 px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">GAIA DENTAL CLINIC</h2>
          <p className="mb-4">
            GAIA Dental Clinic adalah salah satu klinik dokter gigi terbaik di Sumatera
            yang berkomitmen untuk terus memberikan pelayanan, kualitas kerja, dan fasilitas
            yang melebihi ekspektasi pasien
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-white" /> info@gaiadentalclinic.id
          </p>
          <p className="flex items-center gap-2 mt-1">
            <FaPhoneAlt className="text-white" /> 081277882522 (WA only)
          </p>
          <p className="flex items-center gap-2 mt-1">
            <FaPhoneAlt className="text-white" /> 07514772696 (Call only)
          </p>
          <div className="flex gap-3 mt-4 text-xl">
            <a href="https://wa.me/6281277882522" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/gaiadentalclinic" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/gaiadentalclinic" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">TENTANG KAMI</h3>
          <ul className="space-y-1">
            <li>Profil GAIA</li>
            <li>Fasilitas</li>
            <li>Lokasi</li>
            <li>Founder & Co-Founder</li>
            <li>GAIA Happy Family</li>
            <li>Karir</li>
            <li>Promo</li>
            <li>Asuransi</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">PERAWATAN</h3>
          <ul className="space-y-1">
            <li>Pembersihan Karang Gigi</li>
            <li>Behel Gigi</li>
            <li>Veneer Gigi</li>
            <li>Pemutihan Gigi</li>
            <li>Perawatan Saluran Akar Gigi</li>
            <li>Tambal Gigi</li>
            <li>Gigi Palsu</li>
            <li>Pencabutan Gigi</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">LOKASI</h3>
          <ul className="space-y-2">
            <li>Jl. Veteran No.74 D, Padang Barat</li>
            <li>Jl. Andalas No.6, Padang Timur</li>
            <li>Jl. Raya Kapas Panji, Kab. Agam</li>
            <li>Jl. Riau No.26, Kota Pekanbaru</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-10 pt-4 border-t border-white font-semibold" style={{ color: '#EFD070' }}>
        © PT Gaia Medika Cakrawala 2025. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
