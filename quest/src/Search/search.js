import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import { SubNav } from '../NavBar/SubNav/SubNav';
import { SearchListResults } from './SearchListResults/SearchListResults';
import { SearchResults } from './SearchResults/SearchResults';
import useReactRouter from 'use-react-router';

export function Search() {

    const {location} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');

    return (
        <div>
            <NavBar term={term} location={locationParam}/>
            <SubNav />
            <SearchResults term={term} location={locationParam} />
            <SearchListResults />
        </div>
    );
}