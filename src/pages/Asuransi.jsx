import React from 'react';
import styled from 'styled-components';

// Styled Components untuk halaman Asuransi
const AsuransiPageContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  color: #333;
  line-height: 1.6;
`;

const AsuransiHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;
  background-color: #f0f8ff; /* Warna latar belakang yang lembut */
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    color: #0056b3; /* Biru gelap untuk judul */
    margin-bottom: 10px;
    font-size: 2.5em;
  }

  p {
    font-size: 1.1em;
    color: #555;
  }
`;

const Section = styled.section`
  margin-bottom: 50px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

  h2 {
    color: #0056b3;
    margin-bottom: 20px;
    font-size: 2em;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;
  }

  p {
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-left: 20px; /* Indentasi untuk daftar */
  }

  li {
    margin-bottom: 10px;
    position: relative;
    padding-left: 25px; /* Ruang untuk ikon */
    color: #444;

    &::before {
      content: '•'; /* Bullet point sederhana */
      color: #007bff; /* Warna biru untuk bullet */
      position: absolute;
      left: 0;
      font-weight: bold;
      font-size: 1.2em;
      top: -2px;
    }
  }
`;

const InsuranceBanner = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InsuranceLogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;

  img {
    max-height: 80px;
    max-width: 180px;
    filter: grayscale(0%); /* Bisa diatur untuk efek hover */
    transition: filter 0.3s ease;

    &:hover {
      filter: grayscale(0%);
    }
  }
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 30px;

  img {
    width: 100%;
    height: 200px; /* Tinggi tetap untuk gambar */
    object-fit: cover; /* Memastikan gambar mengisi area tanpa terdistorsi */
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

const AsuransiFooter = styled.footer`
  text-align: center;
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  color: #666;

  p {
    margin-bottom: 10px;
  }
`;

const Asuransi = () => {
  const insurancePartners = [
    { name: 'Admedika', logo: 'https://gaiadentalclinic.id/wp-content/uploads/2023/03/admedika.png' },
    { name: 'Mandiri InHealth', logo: 'https://gaiadentalclinic.id/wp-content/uploads/2023/03/inhealth.png' },
    { name: 'Cigna', logo: 'https://gaiadentalclinic.id/wp-content/uploads/2023/03/cigna.png' },
    { name: 'Reliance', logo: 'https://gaiadentalclinic.id/wp-content/uploads/2023/03/reliance.png' },
    { name: 'Sequis Life', logo: 'https://gaiadentalclinic.id/wp-content/uploads/2023/03/sequis.png' },
    { name: 'AXA', logo: 'https://gaiadentalclinic.id/wp-content/uploads/2023/03/axa.png' },
    { name: 'Allianz', logo: 'https://gaiadentalclinic.id/wp-content/uploads/2023/03/allianz.png' },
    { name: 'BNI Life', logo: 'https://gaiadentalclinic.id/wp-content/uploads/2023/03/bni-life.png' },
    { name: 'Manulife', logo: 'https://gaiadentalclinic.id/wp-content/uploads/2023/03/manulife.png' },
    { name: 'Prudential', logo: 'https://gaiadentalclinic.id/wp-content/uploads/2023/03/prudential.png' },
    { name: 'Sinarmas', logo: 'https://gaiadentalclinic.id/wp-content/uploads/2023/03/sinarmas.png' },
    { name: 'AIA Financial', logo: 'https://gaiadentalclinic.id/wp-content/uploads/2023/03/aia-financial.png' },
  ];

  const clinicImages = [
    'https://gaiadentalclinic.id/wp-content/uploads/2023/03/IMG_9726-1024x683.jpg',
    'https://gaiadentalclinic.id/wp-content/uploads/2023/03/IMG_9716-1024x683.jpg',
    'https://gaiadentalclinic.id/wp-content/uploads/2023/03/IMG_9724-1024x683.jpg',
    'https://gaiadentalclinic.id/wp-content/uploads/2023/03/IMG_9742-1024x683.jpg',
    'https://gaiadentalclinic.id/wp-content/uploads/2023/03/IMG_9719-1024x683.jpg',
    'https://gaiadentalclinic.id/wp-content/uploads/2023/03/IMG_9728-1024x683.jpg',
  ];

  return (
    <AsuransiPageContainer>
      <AsuransiHeader>
        <h1>Asuransi Gaia Dental Clinic</h1>
        <p>Kami bekerja sama dengan berbagai penyedia asuransi terkemuka untuk memastikan Anda mendapatkan perawatan gigi terbaik dengan mudah.</p>
        <p>Kesehatan gigi dan mulut yang prima kini lebih terjangkau dan mudah diakses bersama kami.</p>
      </AsuransiHeader>

      {/* Banner Asuransi Baru */}
      <InsuranceBanner
        src="https://gaiadentalclinic.id/wp-content/uploads/2023/08/Banner-Asuransi.png"
        alt="Banner Asuransi Gaia Dental Clinic"
      />

      ---

      <Section>
        <h2>Mitra Asuransi Kami</h2>
        <p>Kami bangga menjadi mitra dari berbagai perusahaan asuransi terkemuka di Indonesia. Kerja sama ini memungkinkan kami untuk melayani lebih banyak pasien dan mempermudah proses klaim Anda.</p>
        <InsuranceLogosContainer>
          {insurancePartners.map((partner) => (
            <img key={partner.name} src={partner.logo} alt={partner.name} title={partner.name} />
          ))}
        </InsuranceLogosContainer>
        <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.9em', color: '#777' }}>
          *Daftar mitra asuransi dapat berubah sewaktu-waktu. Mohon konfirmasi kembali saat melakukan reservasi.
        </p>
      </Section>

      ---

      <Section>
        <h2>Mengapa Memilih Gaia Dental Clinic dengan Asuransi Anda?</h2>
        <ul>
          <li>**Proses Klaim yang Mudah:** Tim kami siap membantu Anda dengan proses administrasi dan pengajuan klaim asuransi.</li>
          <li>**Perawatan Komprehensif:** Nikmati akses ke berbagai layanan gigi, mulai dari pemeriksaan rutin hingga perawatan spesialis.</li>
          <li>**Dokter Gigi Berpengalaman:** Ditangani oleh dokter gigi profesional dan berpengalaman dengan fasilitas modern.</li>
          <li>**Prioritas Kenyamanan Pasien:** Kami memastikan setiap kunjungan Anda nyaman dan bebas cemas.</li>
        </ul>
      </Section>

      ---

      <Section>
        <h2>Prosedur Penggunaan Asuransi di Klinik Kami</h2>
        <p>Untuk pengalaman yang lancar saat menggunakan asuransi Anda, ikuti langkah-langkah sederhana berikut:</p>
        <ol style={{ listStyleType: 'decimal', marginLeft: '20px' }}>
          <li>**Verifikasi Polis:** Pastikan polis asuransi Anda mencakup perawatan gigi. Hubungi penyedia asuransi Anda untuk detail manfaat dan batasan.</li>
          <li>**Reservasi:** Buat janji temu di Gaia Dental Clinic melalui telepon atau sistem reservasi online kami. Informasikan bahwa Anda akan menggunakan asuransi.</li>
          <li>**Kedatangan:** Pada hari kunjungan, bawa kartu asuransi dan identitas diri Anda. Tim kami akan membantu proses verifikasi.</li>
          <li>**Perawatan & Klaim:** Setelah perawatan, kami akan membantu Anda mengajukan klaim sesuai prosedur asuransi Anda.</li>
        </ol>
        <p style={{ marginTop: '15px' }}>
          Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan lebih lanjut mengenai penggunaan asuransi di klinik kami.
        </p>
      </Section>

      ---

      {/* <Section>
        <h2>Galeri Klinik Kami</h2>
        <p>Lihat suasana nyaman dan fasilitas modern di Gaia Dental Clinic:</p>
        <ImageGallery>
          {clinicImages.map((src, index) => (
            <img key={index} src={src} alt={`Klinik Gaia Dental ${index + 1}`} />
          ))}
        </ImageGallery>
      </Section> */}

      <AsuransiFooter>
        <p>Hubungi kami hari ini untuk informasi lebih lanjut atau untuk menjadwalkan kunjungan Anda.</p>
        <p>Gaia Dental Clinic Pekanbaru, Riau</p>
        <p>Telepon: [Nomor Telepon Anda]</p>
        <p>Email: [Alamat Email Anda]</p>
      </AsuransiFooter>
    </AsuransiPageContainer>
  );
};

export default Asuransi;