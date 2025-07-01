import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // --- Import Google Fonts (Tambahkan ini di <head> index.html Anda) ---
  // <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log('Email:', email, 'Password:', password);
      console.log('Ingatkan Saya:', rememberMe);
      alert('Login berhasil! (Ini hanya contoh)');
      navigate('/home');
    } else {
      alert('Email dan Kata Sandi harus diisi.');
    }
  };

  const handleSignUp = () => {
    navigate('/signup'); // Assuming you have a '/signup' route
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
    padding: '50px 80px',
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
    marginBottom: '40px',
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

  const loginTitleStyle = {
    fontSize: '3.2em',
    marginBottom: '10px',
    color: '#E0F2F7',
    fontWeight: '600',
    letterSpacing: '1.5px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
  };

  const loginSubtitleStyle = {
    fontSize: '1.1em',
    marginBottom: '40px',
    color: '#B2DFDB',
    lineHeight: '1.6',
    fontWeight: '300',
  };

  const formGroupStyle = {
    marginBottom: '25px',
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
    padding: '15px',
    border: '2px solid #4DB6AC',
    borderRadius: '10px',
    fontSize: '1em',
    backgroundColor: '#00695C',
    color: '#ffffff',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.3)',
  };

  const checkboxContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15px',
    marginBottom: '20px',
    fontSize: '0.9em',
    color: '#B2DFDB',
  };

  const checkboxStyle = {
    marginRight: '10px',
    width: '20px',
    height: '20px',
    border: '2px solid #4DB6AC',
    borderRadius: '6px',
    cursor: 'pointer',
    backgroundColor: '#00695C',
    appearance: 'none',
    display: 'inline-block',
    verticalAlign: 'middle',
    position: 'relative',
    transition: 'background-color 0.2s ease, border-color 0.2s ease',
  };

  const forgotPasswordLinkStyle = {
    color: '#B2DFDB',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  };

  const signInButtonStyle = {
    width: '100%',
    padding: '16px',
    backgroundColor: '#FFC107',
    color: '#004D40',
    border: 'none',
    borderRadius: '10px',
    fontSize: '1.25em',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
  };

  // --- Adjusted: Sign Up Button Style ---
  const signUpButtonStyle = {
    width: '100%',
    padding: '12px', // Reduced padding
    backgroundColor: 'transparent',
    color: '#FFC107',
    border: '2px solid #FFC107',
    borderRadius: '10px',
    fontSize: '1em', // Reduced font size
    fontWeight: '600', // Slightly reduced font weight
    cursor: 'pointer',
    marginTop: '15px',
    transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)', // Lighter shadow
    letterSpacing: '0.8px', // Slightly reduced letter spacing
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
    <div style={containerStyle} className="login-container">
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

          .custom-checkbox:checked {
            background-color: #FFC107;
            border-color: #FFC107;
          }
          .custom-checkbox:checked::after {
            content: '';
            position: absolute;
            top: 3px;
            left: 6px;
            width: 5px;
            height: 10px;
            border: solid #004D40;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
          }

          .login-input:focus {
            border-color: #FFC107;
            box-shadow: 0 0 0 5px rgba(255, 193, 7, 0.5);
          }

          .sign-in-button:hover {
            background-color: #FFB300;
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
          }
          .sign-in-button:active {
              transform: translateY(0);
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }

          /* Adjusted: Sign Up Button Hover Effect */
          .sign-up-button:hover {
            background-color: #FFC107;
            color: #004D40;
            transform: translateY(-2px); /* Slightly less lift */
            box-shadow: 0 5px 12px rgba(0, 0, 0, 0.25); /* Lighter shadow on hover */
          }
          .sign-up-button:active {
              transform: translateY(0);
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Lighter active shadow */
          }


          .forgot-password-link:hover {
            text-decoration: underline;
            color: #FFEB3B;
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
                  padding: 40px 60px;
              }
              .logo-container {
                  margin-bottom: 30px;
              }
              .logo-container img {
                  width: 180px;
              }
              .login-title {
                  font-size: 2.8em;
              }
              .login-subtitle {
                  font-size: 1em;
                  margin-bottom: 30px;
              }
              .input-style {
                  padding: 12px;
              }
              .sign-in-button {
                  padding: 14px;
                  font-size: 1.15em;
              }
              .sign-up-button { /* Adjusted for smaller screens */
                  padding: 10px;
                  font-size: 0.9em;
              }
              .right-panel {
                  padding: 30px;
              }
              .image-container {
                  width: 90%;
                  max-width: 400px;
                  max-height: 400px;
              }
              .curved-gradient-line {
                 width: 80px;
              }
          }

          @media (max-width: 768px) {
              .login-container {
                  flex-direction: column;
                  overflow-y: auto;
              }
              .left-panel {
                  padding: 30px;
                  box-shadow: none;
                  width: 100%;
                  min-height: 60vh;
                  justify-content: flex-start;
              }
              .logo-container {
                  position: static;
                  margin-bottom: 20px;
                  text-align: center;
              }
              .logo-container img {
                  width: 150px;
              }
              .login-title {
                  font-size: 2.2em;
                  text-align: center;
              }
              .login-subtitle {
                  font-size: 0.9em;
                  margin-bottom: 25px;
                  text-align: center;
              }
              .form-group-style, .checkbox-container {
                  text-align: center;
                  justify-content: center;
              }
              .right-panel {
                  padding: 20px;
                  height: 40vh;
                  width: 100%;
              }
              .image-container {
                  width: 95%;
                  height: auto;
                  transform: rotate(0deg);
                  border-width: 5px;
              }
              .curved-gradient-line {
                  display: none;
              }
          }

          @media (max-width: 480px) {
              .left-panel {
                  padding: 20px;
              }
              .logo-container img {
                  width: 120px;
              }
              .login-title {
                  font-size: 1.8em;
              }
              .login-subtitle {
                  font-size: 0.8em;
              }
              .input-style {
                  padding: 10px;
                  font-size: 0.9em;
              }
              .sign-in-button {
                  padding: 12px;
                  font-size: 1em;
              }
              .sign-up-button { /* Further adjusted for smallest screens */
                  padding: 8px;
                  font-size: 0.85em;
              }
          }
        `}
      </style>

      {/* Left Panel - Login Form */}
      <div style={leftPanelStyle} className="left-panel">
        <div style={logoContainerStyle} className="logo-container">
          <img
            src="https://gaiadentalclinic.id/wp-content/uploads/2023/03/gaia-logo-side-2-1400x408.png"
            alt="GAIA DENTAL CLINIC Logo"
            style={logoImgStyle}
          />
        </div>

        <div style={contentWrapperStyle} className="login-content-wrapper">
          <h1 style={loginTitleStyle} className="login-title">Login</h1>
          <p style={loginSubtitleStyle} className="login-subtitle">Silakan isi rincian Anda untuk mengakses akun Anda.</p>

          <form onSubmit={handleSubmit}>
            <div style={formGroupStyle} className="login-form-group">
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input
                type="email"
                id="email"
                placeholder="harby@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                className="login-input"
                required
              />
            </div>

            <div style={formGroupStyle} className="login-form-group">
              <label htmlFor="password" style={labelStyle}>Kata Sandi</label>
              <input
                type="password"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                className="login-input"
                required
              />
            </div>

            <div style={checkboxContainerStyle} className="checkbox-container">
              <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={checkboxStyle}
                  className="custom-checkbox"
                />
                Ingatkan Saya
              </label>
              <a href="/forgot-password" style={forgotPasswordLinkStyle} className="forgot-password-link">
                Lupa Kata Sandi?
              </a>
            </div>

            <button type="submit" style={signInButtonStyle} className="sign-in-button">
              Sign in
            </button>

            <button
              type="button"
              onClick={handleSignUp}
              style={signUpButtonStyle}
              className="sign-up-button"
            >
              Sign Up
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

export default Login;