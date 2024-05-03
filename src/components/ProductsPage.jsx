import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import styles from './ProductsPage.module.css';  

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className={styles.productsGrid}>
      {products.map(product => (
        <div key={product.id} className={styles.productCard}>
          <img src={product.image} alt={product.title} className={styles.productImage} />
          <h3 className={styles.productTitle}><Link to={`/product/${product.id}`}>{product.title}</Link></h3>
          <StarRating rating={product.rating.rate} />
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;
