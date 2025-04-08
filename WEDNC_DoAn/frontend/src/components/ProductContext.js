import React, { createContext, useEffect, useState } from 'react';

// Create the context
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  // Fetch the product list from API
  useEffect(() => {
    fetch('http://localhost:5000/api/products')

      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        setError('Error fetching products. Please try again later.'); // Set error state
        setLoading(false); // Stop loading if there's an error
        console.error('Error fetching products:', error);
      });
  }, []);

  // Function to update the product list
  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  return (
    <ProductContext.Provider value={{ products, updateProducts }}>
      {loading ? (
        <div>Loading products...</div> // Display loading message while data is being fetched
      ) : error ? (
        <div style={{ color: 'red' }}>{error}</div> // Display error message if there's an issue with fetching
      ) : (
        children // Render children components if data is fetched successfully
      )}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
