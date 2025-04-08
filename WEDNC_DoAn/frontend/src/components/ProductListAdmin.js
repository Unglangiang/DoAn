import React, { useContext, useState } from 'react';
import { ProductContext } from './ProductContext'; // Import ProductContext

const ProductListAdmin = () => {
  const { products, updateProducts } = useContext(ProductContext); // Get products and update function from context
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const [error, setError] = useState('');

  // Add product function
  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      setError('Tên sản phẩm và giá không được để trống.');
      return;
    }

    if (isNaN(newProduct.price) || newProduct.price <= 0) {
      setError('Giá sản phẩm phải là số dương.');
      return;
    }

    const updatedProducts = [...products, { ...newProduct, id: products.length + 1 }];
    updateProducts(updatedProducts); // Update the product list
    setNewProduct({ name: '', price: '' }); // Reset the input fields
    setError(''); // Reset the error message
  };

  // Delete product function
  const deleteProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    updateProducts(updatedProducts); // Update the product list
    setError(''); // Clear any error messages after deletion
  };

  return (
    <div>
      <h2>Quản lý Sản phẩm (Admin)</h2>
      <div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="text"
          placeholder="Tên Sản phẩm"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Giá"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button onClick={addProduct}>Thêm Sản phẩm</button>
      </div>
      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>Tên Sản phẩm</th>
            <th style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>Giá</th>
            <th style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} style={{ textAlign: 'center', borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px' }}>{product.name}</td>
              <td style={{ padding: '10px' }}>{product.price}</td>
              <td style={{ padding: '10px' }}>
                <button 
                  onClick={() => deleteProduct(product.id)} 
                  style={{ padding: '5px 10px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px' }}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListAdmin;
