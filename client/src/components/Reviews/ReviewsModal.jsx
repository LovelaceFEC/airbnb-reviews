/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styles from './reviews.module.css';

const ReviewsModal = ({ show, toggle, children }) => {
  return (
    <div>
      <div className={styles.modalOverlay}/>
      <div className={styles.modalWrapper}>
        <div className={styles.modal}>
          <button type="text" className={styles.modalCloseButton} onClick={toggle}>x</button>
          <p>
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewsModal;