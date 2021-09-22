import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { SubNav } from '../NavBar/SubNav/SubNav';
import { SearchListResults } from './SearchListResults/SearchListResults';
import { SearchResults } from './SearchResults/SearchResults';

export function Search() {
    return (
        <div>
            <NavBar />
            <SubNav />
            <SearchResults />
            <SearchListResults />
        </div>
    );
}