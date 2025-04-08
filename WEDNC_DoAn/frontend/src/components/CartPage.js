import React, { useEffect, useState } from 'react';
import './CartPage.css'; // Đảm bảo có tệp CSS cho style giỏ hàng

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Lấy giỏ hàng từ localStorage khi trang giỏ hàng được mở
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Hàm tính tổng giá trị của giỏ hàng
  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(product => product._id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));  // Cập nhật lại localStorage
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cart.map((product) => (
              <li key={product._id} className="cart-item">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="cart-item-image"
                  style={{ width: '100px', height: 'auto' }}
                />
                <div className="cart-item-info">
                  <h3>{product.name}</h3>
                  <p>Quantity: {product.quantity}</p>
                  <p>Price: ${product.price}</p>
                  <p>Total: ${product.price * product.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(product._id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total Price: ${getTotalPrice()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
