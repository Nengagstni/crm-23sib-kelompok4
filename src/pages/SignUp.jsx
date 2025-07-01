import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (email && password && confirmPassword) {
      if (password !== confirmPassword) {
        alert('Kata Sandi dan Konfirmasi Kata Sandi tidak cocok.');
        return;
      }
      console.log('Email:', email, 'Password:', password);
      alert('Pendaftaran berhasil! (Ini hanya contoh)');
      navigate('/home');
    } else {
      alert('Semua bidang harus diisi.');
    }
  };

  const handleSignIn = () => {
    navigate('/login');
  };

  // --- Inline Styles ---
  const containerStyle = {
    display: 'flex',
    minHeight: '100vh',
    width: '100vw',
    overflow: 'hidden',
    fontFamily: "'Montserrat', 'Poppins', sans-serif",
    background: 'linear-gradient(to right bottom, #E0F7FA, #BBDEFB)',
    position: 'relative',
  };

  const leftPanelStyle = {
    flex: '1',
    backgroundColor: '#004D40',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // === START MODIFICATION ===
    padding: '30px 80px', // Mengurangi padding atas/bawah
    // === END MODIFICATION ===
    color: '#ffffff',
    position: 'relative',
    zIndex: 2,
    boxShadow: '10px 0 30px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease-in-out',
  };

  const curvedGradientLineStyle = {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '50%',
    width: '100px',
    background: 'linear-gradient(to top right, #FFC107, #FFEB3B, #B2DFDB)',
    transform: 'translateX(-50%) rotate(5deg)',
    transformOrigin: 'bottom center',
    zIndex: 1,
    borderRadius: '0 0 150px 0',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.5s ease',
  };

  const logoContainerStyle = {
    zIndex: 3,
    // === START MODIFICATION ===
    marginBottom: '20px', // Mengurangi margin bawah
    // === END MODIFICATION ===
  };

  const logoImgStyle = {
    width: '200px',
    height: 'auto',
    filter: 'drop-shadow(3px 3px 6px rgba(0,0,0,0.4))',
  };

  const contentWrapperStyle = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: '20px',
  };

  const titleStyle = {
    // === START MODIFICATION ===
    fontSize: '2.8em', // Mengurangi ukuran font
    marginBottom: '8px', // Mengurangi margin bawah
    // === END MODIFICATION ===
    color: '#E0F2F7',
    fontWeight: '600',
    letterSpacing: '1.5px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  };

  const subtitleStyle = {
    // === START MODIFICATION ===
    fontSize: '1em', // Mengurangi ukuran font
    marginBottom: '30px', // Mengurangi margin bawah
    // === END MODIFICATION ===
    color: '#B2DFDB',
    lineHeight: '1.6',
    fontWeight: '300',
  };

  const formGroupStyle = {
    // === START MODIFICATION ===
    marginBottom: '18px', // Mengurangi margin bawah
    // === END MODIFICATION ===
    textAlign: 'left',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    color: '#E0F2F7',
    fontSize: '0.95em',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
  };

  const inputStyle = {
    width: 'calc(100% - 30px)',
    // === START MODIFICATION ===
    padding: '12px', // Mengurangi padding
    // === END MODIFICATION ===
    border: '2px solid #4DB6AC',
    borderRadius: '10px',
    fontSize: '1em',
    backgroundColor: '#00695C',
    color: '#ffffff',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.3)',
  };

  const buttonStyle = {
    width: '100%',
    // === START MODIFICATION ===
    padding: '14px', // Mengurangi padding
    fontSize: '1.1em', // Mengurangi ukuran font
    // === END MODIFICATION ===
    backgroundColor: '#FFC107',
    color: '#004D40',
    border: 'none',
    borderRadius: '10px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
  };

  const secondaryButtonStyle = {
    width: '100%',
    // === START MODIFICATION ===
    padding: '10px', // Mengurangi padding
    fontSize: '0.9em', // Mengurangi ukuran font
    marginTop: '12px', // Mengurangi margin atas
    // === END MODIFICATION ===
    backgroundColor: 'transparent',
    color: '#FFC107',
    border: '2px solid #FFC107',
    borderRadius: '10px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
    letterSpacing: '0.8px',
    textTransform: 'uppercase',
  };

  const rightPanelStyle = {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1F5FE',
    padding: '40px',
    zIndex: 2,
  };

  const imageContainerStyle = {
    width: '80%',
    height: 'auto',
    aspectRatio: '1 / 1',
    maxWidth: '450px',
    maxHeight: '450px',
    borderRadius: '30px',
    border: '10px solid #FFD740',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
    transform: 'rotate(-5deg)',
    transition: 'transform 0.6s ease',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '20px',
  };

  return (
    <div style={containerStyle} className="signup-container">
      {/* Internal Style Block for pseudo-elements and hover effects */}
      <style>
        {`
          body, html, #root {
              margin: 0;
              padding: 0;
              height: 100%;
              width: 100%;
              overflow: hidden;
          }

          .signup-input:focus {
            border-color: #FFC107;
            box-shadow: 0 0 0 5px rgba(255, 193, 7, 0.5);
          }

          .primary-button:hover {
            background-color: #FFB300;
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
          }
          .primary-button:active {
              transform: translateY(0);
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }

          .secondary-button:hover {
            background-color: #FFC107;
            color: #004D40;
            transform: translateY(-2px);
            box-shadow: 0 5px 12px rgba(0, 0, 0, 0.25);
          }
          .secondary-button:active {
              transform: translateY(0);
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .image-panel-hover:hover {
              transform: rotate(0deg) scale(1.02);
              box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);
          }

          .curved-gradient-line:hover {
              transform: translateX(-50%) rotate(7deg) scale(1.03);
          }

          /* --- Responsiveness --- */
          @media (max-width: 1024px) {
              .left-panel {
                  padding: 25px 50px; /* Disesuaikan lebih lanjut */
              }
              .logo-container {
                  margin-bottom: 15px; /* Disesuaikan lebih lanjut */
              }
              .logo-container img {
                  width: 160px; /* Disesuaikan lebih lanjut */
              }
              .title {
                  font-size: 2.5em; /* Disesuaikan lebih lanjut */
              }
              .subtitle {
                  font-size: 0.95em; /* Disesuaikan lebih lanjut */
                  margin-bottom: 25px; /* Disesuaikan lebih lanjut */
              }
              .input-style {
                  padding: 10px; /* Disesuaikan lebih lanjut */
              }
              .primary-button {
                  padding: 12px; /* Disesuaikan lebih lanjut */
                  font-size: 1.05em; /* Disesuaikan lebih lanjut */
              }
              .secondary-button {
                  padding: 8px; /* Disesuaikan lebih lanjut */
                  font-size: 0.85em; /* Disesuaikan lebih lanjut */
                  margin-top: 10px; /* Disesuaikan lebih lanjut */
              }
              .right-panel {
                  padding: 25px; /* Disesuaikan lebih lanjut */
              }
              .image-container {
                  width: 85%; /* Disesuaikan lebih lanjut */
                  max-width: 350px; /* Disesuaikan lebih lanjut */
                  max-height: 350px; /* Disesuaikan lebih lanjut */
              }
              .curved-gradient-line {
                 width: 70px; /* Disesuaikan lebih lanjut */
              }
          }

          @media (max-width: 768px) {
              .signup-container {
                  flex-direction: column;
                  overflow-y: auto;
              }
              .left-panel {
                  padding: 20px; /* Disesuaikan lebih lanjut */
                  box-shadow: none;
                  width: 100%;
                  min-height: 55vh; /* Disesuaikan lebih lanjut */
                  justify-content: flex-start;
              }
              .logo-container {
                  position: static;
                  margin-bottom: 15px; /* Disesuaikan lebih lanjut */
                  text-align: center;
              }
              .logo-container img {
                  width: 120px; /* Disesuaikan lebih lanjut */
              }
              .title {
                  font-size: 2em; /* Disesuaikan lebih lanjut */
                  text-align: center;
              }
              .subtitle {
                  font-size: 0.8em; /* Disesuaikan lebih lanjut */
                  margin-bottom: 20px; /* Disesuaikan lebih lanjut */
                  text-align: center;
              }
              .form-group-style {
                  text-align: center;
                  justify-content: center;
                  margin-bottom: 15px; /* Disesuaikan lebih lanjut */
              }
              .right-panel {
                  padding: 15px; /* Disesuaikan lebih lanjut */
                  height: 45vh; /* Disesuaikan lebih lanjut */
                  width: 100%;
              }
              .image-container {
                  width: 90%; /* Disesuaikan lebih lanjut */
                  height: auto;
                  transform: rotate(0deg);
                  border-width: 4px; /* Disesuaikan lebih lanjut */
              }
              .curved-gradient-line {
                  display: none;
              }
          }

          @media (max-width: 480px) {
              .left-panel {
                  padding: 15px; /* Disesuaikan lebih lanjut */
              }
              .logo-container img {
                  width: 100px; /* Disesuaikan lebih lanjut */
              }
              .title {
                  font-size: 1.6em; /* Disesuaikan lebih lanjut */
              }
              .subtitle {
                  font-size: 0.7em; /* Disesuaikan lebih lanjut */
              }
              .input-style {
                  padding: 8px; /* Disesuaikan lebih lanjut */
                  font-size: 0.8em; /* Disesuaikan lebih lanjut */
              }
              .primary-button {
                  padding: 10px; /* Disesuaikan lebih lanjut */
                  font-size: 0.9em; /* Disesuaikan lebih lanjut */
              }
              .secondary-button {
                  padding: 7px; /* Disesuaikan lebih lanjut */
                  font-size: 0.75em; /* Disesuaikan lebih lanjut */
              }
          }
        `}
      </style>

      {/* Left Panel - Sign Up Form */}
      <div style={leftPanelStyle} className="left-panel">
        <div style={logoContainerStyle} className="logo-container">
          <img
            src="https://gaiadentalclinic.id/wp-content/uploads/2023/03/gaia-logo-side-2-1400x408.png"
            alt="GAIA DENTAL CLINIC Logo"
            style={logoImgStyle}
          />
        </div>

        <div style={contentWrapperStyle} className="signup-content-wrapper">
          <h1 style={titleStyle} className="title">Daftar Akun Baru</h1>
          <p style={subtitleStyle} className="subtitle">Isi rincian Anda untuk membuat akun baru.</p>

          <form onSubmit={handleSignUpSubmit}>
            <div style={formGroupStyle} className="form-group">
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input
                type="email"
                id="email"
                placeholder="harby@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                className="signup-input"
                required
              />
            </div>

            <div style={formGroupStyle} className="form-group">
              <label htmlFor="password" style={labelStyle}>Kata Sandi</label>
              <input
                type="password"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                className="signup-input"
                required
              />
            </div>

            <div style={formGroupStyle} className="form-group">
              <label htmlFor="confirmPassword" style={labelStyle}>Konfirmasi Kata Sandi</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={inputStyle}
                className="signup-input"
                required
              />
            </div>

            <button type="submit" style={buttonStyle} className="primary-button">
              DAFTAR SEKARANG
            </button>

            <button
              type="button"
              onClick={handleSignIn}
              style={secondaryButtonStyle}
              className="secondary-button"
            >
              Sudah Punya Akun? Masuk
            </button>
          </form>
        </div>
      </div>

      <div style={curvedGradientLineStyle} className="curved-gradient-line"></div>

      <div style={rightPanelStyle} className="right-panel">
        <div
          style={imageContainerStyle}
          className="image-container image-panel-hover"
        >
          <img
            src="https://i.pinimg.com/736x/24/94/f0/2494f065ab22e5b7db55bc193d2cdff1.jpg"
            alt="Smiling teeth with green plants"
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;