import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // Thêm trạng thái thành công
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Gửi yêu cầu đăng ký đến API
      const response = await axios.post('/api/auth/register', {
        username,
        email,
        password,
      });

      // Kiểm tra nếu API phản hồi thành công
      if (response.status === 200) {
        setSuccess('Registration successful!'); // Hiển thị thông báo thành công
        setError(''); // Xóa lỗi nếu có
        setTimeout(() => {
          navigate('/login'); // Điều hướng về trang đăng nhập sau vài giây
        }, 2000); // Điều hướng sau 2 giây
      }
    } catch (err) {
      setError('Registration failed. Please try again.'); // Hiển thị thông báo lỗi
      setSuccess(''); // Xóa thông báo thành công nếu có lỗi
    }
  };

  return (
    <div style={registerStyle}>
      <h2>Register</h2>
      {error && <div style={errorStyle}>{error}</div>}
      {success && <div style={successStyle}>{success}</div>} {/* Hiển thị thông báo thành công */}
      <form onSubmit={handleRegister}>
        <div style={inputGroupStyle}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Register</button>
      </form>
    </div>
  );
};

// Styling cho trang register
const registerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  flexDirection: 'column',
  backgroundColor: '#f5f5f5',
};

const inputGroupStyle = {
  marginBottom: '15px',
  width: '300px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginTop: '5px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  width: '100%',
};

const errorStyle = {
  color: 'red',
  marginBottom: '15px',
};

const successStyle = {
  color: 'green',
  marginBottom: '15px',
};

export default Register;
