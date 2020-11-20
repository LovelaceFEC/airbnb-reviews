/* eslint-disable react/prop-types */
import React from 'react';
import styles from './reviews.module.css';

const ReviewsModal = ({ show, toggle, children }) => (
    <div className={styles.modalWrapper} style={{ display: show? 'block' : 'none' }}>
      <div className={styles.modalOverlay} />
      <div className={styles.modal}>
        <button type="text" className={styles.modalCloseButton} onClick={toggle}>x</button>
        <p>
          {children}
        </p>
      </div>
    </div>
);

export default ReviewsModal;