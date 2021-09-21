import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { SubNav } from '../NavBar/SubNav/SubNav';
import { SearchResults } from './SearchResults/SearchResults';

export function Search() {
    return (
        <div>
            <NavBar />
            <SubNav />
            <SearchResults />
        </div>
    );
}