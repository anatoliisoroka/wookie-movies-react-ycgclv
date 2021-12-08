import React from 'react';
import { Link } from 'react-router-dom'
// src
import './style.css';

function MovieCardLarge({ movie }) {
    return (
        <div>
            <img alt={movie.title} src={movie.poster} className="wookie-movie-card-large" />
        </div>
    )
}

export default MovieCardLarge
