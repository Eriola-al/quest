import React from 'react';
import { SearchResult } from './SearchResult/SearchResult';
import styles from './SearchListResults.module.css';

export function SearchListResults() {
    return(
        <div className = {styles['search-list']}>
            <SearchResult />
            <SearchResult />
        </div>
    );
}