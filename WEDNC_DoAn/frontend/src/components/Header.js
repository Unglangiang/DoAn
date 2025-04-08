import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <Link to="/" style={logoStyle}>
          <h1>BansToys</h1>
        </Link>
      </div>
      <nav style={navStyle}>
        <ul style={navListStyle}>
          <li style={navItemStyle}><Link to="/" style={linkStyle}>Home</Link></li>
          <li style={navItemStyle}><Link to="/products" style={linkStyle}>Product List</Link></li>
          <li style={navItemStyle}><Link to="/cart" style={linkStyle}>🛒 Cart</Link></li>
          <li style={navItemStyle}><Link to="/logout" style={linkStyle}>Logout</Link></li>
        </ul>
      </nav>
    </header>
  );
};

// Styling cho Header (inline CSS)
const headerStyle = {
  backgroundColor: '#696969',
  color: '#fff',
  padding: '20px 40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  height: '60px',
  width: '100%',
};

const logoContainerStyle = {
  flex: 1,
};

const logoStyle = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#fff',
  textDecoration: 'none',
};

const navStyle = {
  flex: 2,
};

const navListStyle = {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  justifyContent: 'center',
};

const navItemStyle = {
  margin: '0 20px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
  transition: 'color 0.3s ease',
};

export default Header;
