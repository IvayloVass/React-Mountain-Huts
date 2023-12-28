import React from 'react';
import styles from './DeleteModal.module.css';

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles["modal-overlay"]}>
            <div className={styles["modal-content"]}>
                <p>Are you sure you want to delete this post?</p>
                <button style={
                    {
                        backgroundColor: '#4CAF50',
                        borderRadius: '4px',
                        color: '#fff',
                        cursor: 'pointer',
                        margin: '15px',
                        fontSize: '18px'
                    }
                }
                    onClick={onConfirm}>Confirm</button>
                <button style={
                    {
                        backgroundColor: '#E3963E',
                        borderRadius: '4px',
                        color: '#fff',
                        cursor: 'pointer',
                        margin: '15px',
                        fontSize: '18px'
                    }
                }
                    onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};


export default DeleteModal;
