import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import StarRating from './StarRating';
import styles from './ProductPage.module.css';  

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.productDetails}>
      <h1 className={styles.productTitle}>{product.title}</h1>
      <img src={product.image} alt={product.title} className={styles.productImage} />
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>${product.price}</p>
      <StarRating rating={product.rating.rate} />
      <button onClick={() => navigate(-1)} className={styles.backButton}>Назад</button>
    </div>
  );
}

export default ProductPage;
