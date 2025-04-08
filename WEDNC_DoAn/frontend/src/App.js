import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Cập nhật import
import './App.css';
import CartPage from './components/CartPage';
import FeaturedProducts from './components/FeaturedProducts';
import Header from './components/Header';
import Login from './components/Login';
import Logout from './components/Logout';
import { ProductProvider } from './components/ProductContext'; // Nhập ProductProvider
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import ProductListAdmin from './components/ProductListAdmin'; // Import ProductListAdmin
import Register from './components/Register';
import SearchResults from './components/SearchResults';

const App = () => {
  return (
    <ProductProvider>
      <div>
        <Header />
        <FeaturedProducts />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search/:keyword" element={<SearchResults />} />
          <Route path="/admin/products" element={<ProductListAdmin />} />
        </Routes>
      </div>
    </ProductProvider>
  );
};

export default App;
