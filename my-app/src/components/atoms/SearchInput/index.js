import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
// src
import './style.css';

function SearchInput({ defaultValue, onSearch, ...props }) {
    const [inputValue, setInputValue] = useState(defaultValue || '');

    const onChange = event => {
        const { value } = event.target;
        setInputValue(value);
        onSearch(value);
    }

    return (
        <div>
            <label>
                <FaSearch />
                <input 
                    type="text"
                    className="wookie-search"
                    value={inputValue}
                    onChange={onChange}
                    {...props}
                />
            </label>
        </div>
    )
}

export default SearchInput;
