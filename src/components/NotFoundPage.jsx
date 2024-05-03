
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.css'; 

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundText}>404 - Page Not Found</h1>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <button onClick={() => navigate('/products')} className={styles.linkToProducts}>Go to Products Page</button>
    </div>
  );
}

export default NotFoundPage;
