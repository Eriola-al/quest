import React from 'react';
import { BusinessRating }  from '../../../BusinessRating/BusinessRating';
import styles from './SearchResult.module.css';

export function SearchResult() {
    return (
        <div className={styles['search-result']}>
            <img src='https://via.placeholder.com/210' alt='businessImage' className={styles.businessImage} />
            <div className={styles.businessInfo}>
                <h2 className="subtitle">Best Burger</h2>
                <BusinessRating />
                <p>$$ <span class="tag">Fast Food</span> <span class="tag">Burgers</span></p>
            </div>
            <div className = {styles.businessAddress}>
                <p>+4912345678</p><br/>
                <p>Street 5</p>
                <p>12345 Berlin</p>
                <p>Germany</p>
            </div>
        </div>
    );
}