import React from 'react';
import styled from 'styled-components';

// Styled Components untuk keseluruhan halaman dan bagian-bagiannya
const MembersPageContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  color: #333;
`;

const MembersHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;
  background-color: #f0f8ff; /* Latar belakang biru muda */
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    color: #0056b3; /* Biru lebih gelap */
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1em;
    color: #555;
  }
`;

const CurrentPromotionsSection = styled.section`
  margin-bottom: 50px;
  text-align: center;

  h2 {
    color: #0056b3;
    margin-bottom: 25px;
    font-size: 2em;
  }
`;

const PromoCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PromoCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 25px;
  flex: 1;
  min-width: 280px;
  max-width: 350px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  text-align: left;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: #007bff; /* Biru untuk judul promo */
    margin-bottom: 10px;
    font-size: 1.5em;
  }

  p {
    font-size: 0.95em;
    line-height: 1.6;
    color: #666;
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const MembershipTiersSection = styled.section`
  text-align: center;

  h2 {
    color: #0056b3;
    margin-bottom: 25px;
    font-size: 2em;
  }

  & > p { /* Menargetkan paragraf langsung di bawah h2 */
    font-size: 1.1em;
    margin-bottom: 40px;
    color: #555;
  }
`;

const TierCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TierCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: #007bff;
    margin-bottom: 15px;
    font-size: 1.8em;
    text-align: center;
  }

  .tier-cost {
    font-size: 1.6em;
    font-weight: bold;
    color: #28a745; /* Hijau untuk biaya */
    margin-bottom: 20px;
    text-align: center;
  }

  .tier-description {
    font-style: italic;
    color: #777;
    margin-bottom: 20px;
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin-top: 15px;
    flex-grow: 1;
  }

  li {
    margin-bottom: 10px;
    padding-left: 25px;
    position: relative;
    color: #444;
    line-height: 1.5;

    &::before {
      content: '✔'; /* Ikon centang */
      color: #28a745;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

// Warna tier spesifik
const BasicTierCard = styled(TierCard)`
  border-top: 5px solid #007bff;
`;

const PremiumTierCard = styled(TierCard)`
  border-top: 5px solid #ffc107; /* Kuning */
`;

const FamilyPackageCard = styled(TierCard)`
  border-top: 5px solid #17a2b8; /* Toska */
`;

const VIPTierCard = styled(TierCard)`
  border-top: 5px solid #6f42c1; /* Ungu */
`;

const MembersFooter = styled.footer`
  text-align: center;
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  color: #666;

  p {
    margin-bottom: 10px;
  }
`;

const Members = () => {
  return (
    <MembersPageContainer>
      <MembersHeader>
        <h1>Gaia Dental Clinic Pekanbaru</h1>
        <p>Kesehatan gigi dan mulut Anda adalah prioritas kami. Temukan program eksklusif kami!</p>
      </MembersHeader>

      <CurrentPromotionsSection>
        <h2>Promosi Saat Ini</h2>
        <p>Saat kami mengembangkan program keanggotaan komprehensif kami, manfaatkan promosi menarik yang ada saat ini, yang dirancang untuk memenuhi berbagai kebutuhan Anda:</p>
        <PromoCardsContainer>
          <PromoCard>
            <h3>Promo Behel</h3>
            <p>Sempurna untuk remaja dan dewasa muda yang ingin memperbaiki susunan gigi mereka dan mendapatkan senyum yang percaya diri.</p>
          </PromoCard>
          <PromoCard>
            <h3>Promo Happy Hour</h3>
            <p>Nikmati harga spesial untuk perawatan tertentu selama jam-jam tertentu. Cara yang bagus untuk mendapatkan perawatan gigi berkualitas tinggi ke dalam jadwal sibuk Anda dengan biaya yang lebih rendah!</p>
          </PromoCard>
          <PromoCard>
            <h3>Promo Non Behel</h3>
            <p>Ditujukan untuk pasien yang membutuhkan perawatan gigi umum selain ortodonti, memastikan setiap orang dapat mengakses layanan berkualitas tinggi kami.</p>
          </PromoCard>
        </PromoCardsContainer>
      </CurrentPromotionsSection>

      <hr />

      <MembershipTiersSection>
        <h2>Memperkenalkan Program Keanggotaan Kami</h2>
        <p>Kami sangat gembira untuk memperkenalkan tingkatan keanggotaan baru kami, yang dirancang untuk memberi Anda lebih banyak nilai, manfaat eksklusif, dan pengalaman perawatan gigi yang disesuaikan. Pilih rencana yang paling sesuai dengan kebutuhan Anda dan mulailah berhemat hari ini!</p>

        <TierCardsContainer>
          {/* Tier Basic */}
          <BasicTierCard>
            <h3>Tier Basic</h3>
            <p className="tier-cost">Rp. 500.000/tahun</p>
            <p className="tier-description">Ideal untuk pasien yang mencari perawatan gigi esensial dan preventif.</p>
            <ul>
              <li>2x Pemeriksaan gigi dan konsultasi gratis dengan dokter gigi umum dalam setahun.</li>
              <li>1x Pembersihan karang gigi (scaling) gratis dalam setahun.</li>
              <li>Diskon 10% untuk semua perawatan gigi umum (tambal gigi, cabut gigi, dll.).</li>
              <li>Prioritas janji temu.</li>
            </ul>
          </BasicTierCard>

          {/* Tier Premium */}
          <PremiumTierCard>
            <h3>Tier Premium</h3>
            <p className="tier-cost">Rp. 1.500.000/tahun</p>
            <p className="tier-description">Untuk pasien yang menginginkan perawatan lebih komprehensif, termasuk perawatan estetika.</p>
            <ul>
              <li>Semua manfaat dari Tier Basic.</li>
              <li>2x Pembersihan karang gigi (scaling) gratis dalam setahun.</li>
              <li>1x Fluoridasi atau Aplikasi Fissure Sealant gratis untuk pencegahan karies.</li>
              <li>Diskon 15% untuk semua perawatan gigi umum dan estetika (misalnya, bleaching, veneer).</li>
              <li>Diskon 5% untuk perawatan ortodonti (behel) atau implan gigi.</li>
              <li>Gratis konsultasi dengan dokter gigi spesialis (ortodontis, periodontis, dll.) 1x dalam setahun.</li>
            </ul>
          </PremiumTierCard>

          {/* Paket Keluarga */}
          <FamilyPackageCard>
            <h3>Paket Keluarga</h3>
            <p className="tier-cost">Rp. 2.000.000/tahun (untuk 3 orang, biaya tambahan jika lebih dari 3)</p>
            <p className="tier-description">Dirancang untuk keluarga yang terdiri dari 3-5 anggota, memastikan setiap orang mendapatkan perawatan yang mereka butuhkan.</p>
            <ul>
              <li>Pemeriksaan gigi dan konsultasi gratis untuk semua anggota keluarga (2x setahun per anggota).</li>
              <li>Pembersihan karang gigi (scaling) gratis untuk setiap anggota keluarga (1x setahun per anggota).</li>
              <li>Diskon 15% untuk semua perawatan gigi umum bagi seluruh anggota keluarga.</li>
              <li>Diskon 10% untuk perawatan estetika dan spesialis bagi seluruh anggota keluarga.</li>
              <li>Gratis edukasi sikat gigi dan perawatan mulut untuk anak-anak.</li>
            </ul>
          </FamilyPackageCard>

          {/* Tier VIP */}
          <VIPTierCard>
            <h3>Tier VIP</h3>
            <p className="tier-cost">Rp. 3.000.000 - Rp. 5.000.000/tahun</p>
            <p className="tier-description">Pilihan terbaik untuk pasien yang mencari layanan gigi eksklusif dan menyeluruh.</p>
            <ul>
              <li>Semua manfaat dari Tier Premium.</li>
              <li>Pemeriksaan & Konsultasi Tidak Terbatas: Akses penuh ke dokter gigi.</li>
              <li>2x Pembersihan Karang Gigi (Scaling) + Polishing + Aplikasi Fluoride/Remineralisasi Gratis: Perawatan preventif dan estetika premium.</li>
              <li>1x Perawatan Pemutihan Gigi (Bleaching) Gratis ATAU Diskon 30% untuk Veneer/Crown: Penawaran estetika bernilai tinggi.</li>
              <li>Diskon 20% untuk Semua Perawatan: Diskon tertinggi untuk semua jenis layanan.</li>
              <li>Layanan Darurat Prioritas: Penanganan cepat untuk kasus mendesak, menunjukkan komitmen klinik.</li>
              <li>Tinjauan Kesehatan Gigi Tahunan dengan Dokter Kepala: Diskusi mendalam tentang status kesehatan gigi, rencana perawatan jangka panjang, dan saran personal.</li>
            </ul>
          </VIPTierCard>
        </TierCardsContainer>
      </MembershipTiersSection>

      <MembersFooter>
        <p>Siap bergabung? Hubungi kami hari ini untuk mempelajari lebih lanjut dan mendaftar program keanggotaan!</p>
        <p>Gaia Dental Clinic Pekanbaru</p>
        {/* Anda mungkin ingin menambahkan informasi kontak di sini */}
      </MembersFooter>
    </MembersPageContainer>
  );
};

export default Members;