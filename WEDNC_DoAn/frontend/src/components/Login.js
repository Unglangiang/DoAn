import axios from 'axios'; // Import axios để gọi API
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link từ react-router-dom

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Thêm trạng thái lỗi
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra nếu đã đăng nhập rồi (token tồn tại trong localStorage)
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/'); // Nếu đã đăng nhập, chuyển hướng về trang chính
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Gửi request đến API để xác thực thông tin đăng nhập
      const response = await axios.post('/api/auth/login', { email: username, password });
      
      // Lưu token vào localStorage nếu đăng nhập thành công
      localStorage.setItem('authToken', response.data.token);
      
      // Điều hướng về trang chính sau khi đăng nhập thành công
      navigate('/');
    } catch (err) {
      // Xử lý lỗi khi đăng nhập sai
      setError('Invalid credentials');
    }
  };

  return (
    <div style={loginStyle}>
      <h2>Login</h2>
      {error && <div style={errorStyle}>{error}</div>} {/* Hiển thị thông báo lỗi nếu có */}
      <form onSubmit={handleLogin}>
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
        <button type="submit" style={buttonStyle}>Login</button>
      </form>

      <div style={registerLinkStyle}>
        <p>Don't have an account? <Link to="/register">Sign up here</Link></p>
      </div>
    </div>
  );
};

// Styling cho trang login
const loginStyle = {
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

const registerLinkStyle = {
  marginTop: '15px',
};

export default Login;
