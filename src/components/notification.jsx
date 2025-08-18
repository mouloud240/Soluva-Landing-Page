import React, { useState, useEffect } from 'react';
import styles from './notifcation.module.css';

const Notification = ({ message, type, onClose, duration = 5000 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300);  
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`${styles.notification} ${styles[type]} ${isClosing ? styles.closing : styles.entering}`}
    >
      <p>{message}</p>
      <button 
        onClick={handleClose}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
};

export default Notification;