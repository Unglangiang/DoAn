import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Thêm state cho tìm kiếm

  // Tải dữ liệu sản phẩm từ API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        const filtered = response.data.filter(
          product => product.imageUrl && product.imageUrl.trim() !== ''
        );
        setProducts(filtered);
        setLoading(false);
      } catch (error) {
        console.error('Lỗi khi tải sản phẩm', error);
        setLoading(false);
      }
    };

    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/featured');
        const filtered = response.data.filter(
          product => product.imageUrl && product.imageUrl.trim() !== ''
        );
        setFeaturedProducts(filtered);
      } catch (error) {
        console.error('Lỗi khi tải sản phẩm nổi bật', error);
      }
    };

    fetchProducts();
    fetchFeaturedProducts();
  }, []);

  // Tải giỏ hàng từ localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.find(item => item._id === product._id)
        ? prevCart.map(item =>
            item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prevCart, { ...product, quantity: 1 }];

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Tính tổng số sản phẩm trong giỏ hàng
  const getTotalItems = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  // Hàm lọc sản phẩm theo tìm kiếm
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Lọc sản phẩm theo tìm kiếm
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product List</h2>

      {/* Thêm ô tìm kiếm với nút tìm kiếm */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
       
      </div>

      {/* Hiển thị danh sách sản phẩm tìm kiếm */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/product/${product._id}`}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
                style={{ width: '200px', height: 'auto' }}
              />
            </Link>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="product-price">${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      <h3>Featured Products</h3>
      {/* Hiển thị sản phẩm nổi bật */}
      <div className="featured-products">
        {featuredProducts.map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/product/${product._id}`}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
                style={{ width: '200px', height: 'auto' }}
              />
            </Link>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="product-price">${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* Hiển thị giỏ hàng */}
      <div className="cart-info">
        <h3>Cart ({getTotalItems()} items)</h3>
        <ul>
          {cart.map((product) => (
            <li key={product._id}>
              {product.name} - {product.quantity} x ${product.price}
            </li>
          ))}
        </ul>
        <Link to="/cart">Go to Cart</Link>
      </div>
    </div>
  );
};

export default ProductList;
