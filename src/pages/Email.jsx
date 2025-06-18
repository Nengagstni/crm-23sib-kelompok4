import React, { useState } from 'react';

const dummyEmails = [
  {
    id: 1,
    sender: 'aa.customer@example.com',
    subject: 'Pertanyaan Reservasi',
    date: '2025-06-17',
    body: `Halo, saya ingin menanyakan apakah masih ada slot reservasi untuk tanggal 25 Juni?  
Terima kasih!  
- aa customer`,
  },
  {
    id: 2,
    sender: 'admin@clinic.com',
    subject: 'Reminder Reservasi',
    date: '2025-06-18',
    body: 'Halo, ini pengingat reservasi kamu di tanggal 2025-06-20. Terima kasih!',
  },
  {
    id: 3,
    sender: 'marketing@clinic.com',
    subject: 'Promo Perawatan Gigi',
    date: '2025-06-15',
    body: 'Dapatkan promo khusus minggu ini untuk pembersihan karang gigi.',
  },
  {
    id: 4,
    sender: 'aa.customer@example.com',
    subject: 'Konfirmasi Pembatalan',
    date: '2025-06-12',
    body: `Saya ingin membatalkan reservasi saya pada tanggal 22 Juni. Mohon konfirmasi ya.  
Terima kasih,  
aa customer`,
  },
];

const Email = () => {
  const [emails] = useState(dummyEmails);
  const [selectedEmailId, setSelectedEmailId] = useState(emails[0]?.id || null);
  const [sentEmails, setSentEmails] = useState([]);

  const [formData, setFormData] = useState({
    to: '',
    message: '',
    type: 'Promo',
  });

  const selectedEmail = emails.find((email) => email.id === selectedEmailId);

  const handleSend = (e) => {
    e.preventDefault();
    if (formData.to && formData.message) {
      const newEmail = {
        id: sentEmails.length + 1,
        sender: 'you@clinic.com',
        subject: `${formData.type} untuk Customer`,
        date: new Date().toISOString().split('T')[0],
        body: formData.message,
        to: formData.to,
        type: formData.type,
      };
      setSentEmails([...sentEmails, newEmail]);
      setFormData({ to: '', message: '', type: 'Promo' });
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        color: '#1D5B5C',
        maxWidth: 900,
        margin: '30px auto',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#fff',
      }}
    >
      {/* Top horizontal sidebar */}
      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          backgroundColor: '#EFD070',
          borderBottom: '3px solid #1D5B5C',
          padding: '10px 0',
        }}
      >
        {emails.map((email) => (
          <div
            key={email.id}
            onClick={() => setSelectedEmailId(email.id)}
            style={{
              flex: '0 0 auto',
              cursor: 'pointer',
              padding: '10px 20px',
              margin: '0 10px',
              borderRadius: 20,
              backgroundColor: selectedEmailId === email.id ? '#1D5B5C' : 'transparent',
              color: selectedEmailId === email.id ? '#EFD070' : '#1D5B5C',
              fontWeight: selectedEmailId === email.id ? '700' : '500',
              boxShadow:
                selectedEmailId === email.id
                  ? '0 4px 12px rgba(29,91,92,0.4)'
                  : 'none',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              userSelect: 'none',
            }}
            title={`${email.subject} - dari: ${email.sender}`}
          >
            <div style={{ fontSize: 16 }}>{email.subject}</div>
            <div style={{ fontSize: 12, opacity: 0.7 }}>{email.sender}</div>
          </div>
        ))}
      </div>

      {/* Email content */}
      <div style={{ padding: 30 }}>
        {selectedEmail ? (
          <>
            <h2
              style={{
                marginBottom: 8,
                fontWeight: '700',
                fontSize: 26,
                borderBottom: '2px solid #EFD070',
                paddingBottom: 6,
              }}
            >
              {selectedEmail.subject}
            </h2>
            <div
              style={{
                color: '#555',
                marginBottom: 20,
                fontSize: 14,
                fontStyle: 'italic',
              }}
            >
              Dari: <strong>{selectedEmail.sender}</strong> | Tanggal: {selectedEmail.date}
            </div>
            <pre
              style={{
                whiteSpace: 'pre-wrap',
                fontSize: 16,
                lineHeight: 1.6,
                backgroundColor: '#f6f1e7',
                padding: 20,
                borderRadius: 8,
                boxShadow: 'inset 0 0 10px #e0d9b6',
                userSelect: 'text',
              }}
            >
              {selectedEmail.body}
            </pre>
          </>
        ) : (
          <p style={{ fontSize: 18, color: '#888', textAlign: 'center' }}>
            Pilih email untuk melihat isi pesan.
          </p>
        )}
      </div>

      {/* Form Kirim Email */}
      <form onSubmit={handleSend} style={{ padding: 30, borderTop: '2px dashed #eee' }}>
        <h3 style={{ fontSize: 20, marginBottom: 12 }}>✉️ Kirim Email ke Customer</h3>
        <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            style={{
              padding: 8,
              borderRadius: 6,
              border: '1px solid #ccc',
              flex: '0 0 140px',
            }}
          >
            <option value="Promo">Promo</option>
            <option value="Reminder">Reminder</option>
            <option value="Konfirmasi">Konfirmasi</option>
          </select>
          <input
            type="email"
            placeholder="Email customer"
            required
            value={formData.to}
            onChange={(e) => setFormData({ ...formData, to: e.target.value })}
            style={{
              flex: 1,
              padding: 8,
              borderRadius: 6,
              border: '1px solid #ccc',
            }}
          />
        </div>
        <textarea
          placeholder={`Isi pesan ${formData.type.toLowerCase()}...`}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          style={{
            width: '100%',
            minHeight: 100,
            padding: 10,
            borderRadius: 6,
            border: '1px solid #ccc',
            marginBottom: 10,
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            backgroundColor: '#1D5B5C',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: 8,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Kirim Email
        </button>
      </form>

      {/* List Email yang Dikirim */}
      <div style={{ padding: 30, borderTop: '2px dashed #eee' }}>
        <h3 style={{ fontSize: 20, marginBottom: 10 }}>📬 Email yang Sudah Dikirim</h3>
        {sentEmails.length === 0 ? (
          <p style={{ color: '#999' }}>Belum ada email yang dikirim.</p>
        ) : (
          <ul style={{ listStyle: 'disc', paddingLeft: 20 }}>
            {sentEmails.map((e, idx) => (
              <li key={idx}>
                <strong>{e.to}</strong> — <em>{e.subject}</em> ({e.date})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Email;
