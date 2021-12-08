import React from 'react';
import { Link } from 'react-router-dom'
// src
import './style.css';

function MovieCardSmall({ movie }) {
    return (
        <Link to={`/${movie.id}`}>
            <img alt={movie.title} src={movie.backdrop} className="wookie-movie-card" />
        </Link>
    )
}

export default MovieCardSmall
