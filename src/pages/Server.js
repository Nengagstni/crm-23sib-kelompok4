// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Ganti dengan email dan app password kamu
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your.email@gmail.com',
    pass: 'your_email_app_password',
  },
});

app.post('/api/reservations', (req, res) => {
  const { name, email, date } = req.body;

  if (!name || !email || !date) {
    return res.status(400).json({ message: 'Semua field wajib diisi.' });
  }

  const mailOptions = {
    from: 'your.email@gmail.com',
    to: email,
    subject: 'Konfirmasi Reservasi dan Reminder',
    text: `Halo ${name},\n\nTerima kasih sudah melakukan reservasi pada tanggal ${date}.\nKami akan mengingatkan Anda sebelum jadwal.\n\nSalam,\nTim Kami`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'Gagal mengirim email.' });
    }
    console.log('Email terkirim: ' + info.response);
    res.json({ message: 'Reservasi berhasil dan email terkirim.' });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
