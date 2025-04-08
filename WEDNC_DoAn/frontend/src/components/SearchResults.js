import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
  const { keyword } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await axios.get(`/api/products/search/${keyword}`);
        setResults(res.data);
      } catch (error) {
        console.error('Search error:', error);
      }
    };
    fetchResults();
  }, [keyword]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search Results for "{keyword}"</h2>
      {results.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {results.map((product) => (
            <li key={product._id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <img src={product.imageUrl} alt={product.name} width="150" />
              <p>Price: ${product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
