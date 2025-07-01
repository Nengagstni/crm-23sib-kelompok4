import React from 'react';
import styled from 'styled-components';

// Definisikan komponen styled-components
const TentangKamiContainer = styled.div`
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 960px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (max-width: 768px) {
    margin: 20px;
    padding: 15px;
  }
`;

const Section = styled.section`
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #007bff;
  margin-bottom: 40px;
  font-size: 2.8em;

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 30px;
  }
`;

const Subtitle = styled.h2`
  color: #0056b3;
  margin-bottom: 20px;
  font-size: 2.2em;

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const Subheading = styled.h3`
  color: #0056b3;
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 1.6em;

  @media (max-width: 768px) {
    font-size: 1.4em;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  font-size: 1.1em;
`;

const Ul = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  font-size: 1.1em;
`;

const Li = styled.li`
  margin-bottom: 8px;
`;

const Emphasis = styled.strong`
  color: #007bff;
`;

const TentangKami = () => {
  return (
    <TentangKamiContainer>
      <Title>Tentang Kami</Title>

      <Section>
        <Subtitle>Sejarah Kami</Subtitle>
        <Paragraph>
          GAIA Dental Clinic adalah klinik gigi modern, ramah, dan profesional yang berlokasi di Sumatra, menawarkan harga yang terjangkau. Filosofi kami adalah <Emphasis>"Melayani Sepenuh Hati 200%"</Emphasis>, dengan tujuan melampaui ekspektasi pasien.
        </Paragraph>
        <Paragraph>
          Klinik ini, beroperasi di bawah PT GAIA MEDIKA CAKRAWALA, secara resmi dibuka pada <Emphasis>25 Februari 2022</Emphasis>.
        </Paragraph>
        <Paragraph>
          GAIA Dental Clinic didirikan oleh <Emphasis>drg. Indira Ika Christianti</Emphasis>, seorang dokter gigi dengan pengalaman lebih dari 5 tahun, dan suaminya, <Emphasis>Joshua Triputro Nugroho, S.T.</Emphasis>, seorang profesional dari perusahaan otomotif di Indonesia. Tujuan mereka adalah menjadi berkat bagi banyak orang melalui layanan medis gigi. Saat ini, GAIA Dental Clinic memiliki <Emphasis>4 klinik dan 25 dokter gigi</Emphasis>, dengan visi masa depan untuk berekspansi ke seluruh Indonesia demi memastikan setiap orang memiliki gigi yang sehat, indah, dan senyum yang percaya diri.
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>Visi & Misi</Subtitle>
        <div>
          <Subheading>Visi</Subheading>
          <Paragraph>
            Menjadi klinik gigi terbaik dalam hal pelayanan dan kepuasan pasien, serta menjadi klinik gigi pilihan utama bagi masyarakat di seluruh provinsi di Sumatra.
          </Paragraph>
        </div>
        <div>
          <Subheading>Misi</Subheading>
          <Ul>
            <Li>Selalu berusaha memberikan pelayanan yang melebihi ekspektasi pasien.</Li>
            <Li>Memberikan pelayanan terbaik dengan harga terjangkau.</Li>
            <Li>Menjadi klinik gigi yang nyaman dan ramah bagi keluarga.</Li>
            <Li>Mengutamakan kerja sama tim yang berorientasi pada kepuasan pasien.</Li>
            <Li>Memberikan edukasi kesehatan gigi dan mulut yang bermanfaat bagi masyarakat.</Li>
          </Ul>
        </div>
      </Section>

      <Section>
        <Subtitle>Motto & Nilai-Nilai Inti</Subtitle>
        <Paragraph>
          <Emphasis>Motto:</Emphasis> Melayani, Mencintai, dan Memberi 200%.
        </Paragraph>
        <Paragraph>
          <Emphasis>Nilai-Nilai Inti:</Emphasis> Customer Focus, Strive for Excellence, Learning & Growing, Integrity, dan Teamwork.
        </Paragraph>
      </Section>
    </TentangKamiContainer>
  );
};

export default TentangKami;