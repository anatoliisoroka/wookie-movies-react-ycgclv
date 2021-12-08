import React from 'react';
import { useDispatch } from 'react-redux';
// src
import './style.css';
import SearchInput from '../atoms/SearchInput';
import { searchMoviesRequested } from '../../redux/movieSlice';

function Header() {
    const dispatch = useDispatch();

    const onSearch = (searchValue) => {
        dispatch(searchMoviesRequested({
            searchValue,
        }));
    }
    
    return (
        <div className="wookie-header">
            <h1 className="wookie-header-text">Wookie <br /> Movies</h1>
            <SearchInput onSearch={onSearch} />
        </div>
    )
}

export default Header;
