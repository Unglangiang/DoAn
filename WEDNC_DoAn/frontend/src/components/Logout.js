import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xóa token hoặc thông tin đăng nhập từ localStorage hoặc state
    localStorage.removeItem('authToken');  // Nếu bạn lưu token trong localStorage

    // Thông báo đăng xuất thành công và điều hướng về trang login
    alert("Đăng xuất thành công! Bạn sẽ được chuyển đến trang đăng nhập.");
    
    // Điều hướng về trang login sau 1 giây
    setTimeout(() => {
      navigate('/login');
    }, 1000);  // Đợi 1 giây trước khi chuyển hướng
  };

  return (
    <div style={logoutStyle}>
      <h2>Đăng xuất thành công</h2>
      <button onClick={handleLogout} style={logoutButtonStyle}>
        Quay lại trang login
      </button>
    </div>
  );
};

// Styling cho trang Logout
const logoutStyle = {
  textAlign: 'center',
  marginTop: '50px',
};

const logoutButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Logout;
