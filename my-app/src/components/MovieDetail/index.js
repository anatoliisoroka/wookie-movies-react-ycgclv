import React from 'react';
import { Rating } from 'react-simple-star-rating';
import { get } from 'lodash';

function MovieDetail({ movie }) {
    const rating = movie.imdb_rating / 10 * 5;
    const casts = get(movie, 'cast').join(', ');

    return (
        <div className="wookie-detail-detail-text">
            <div className="wookie-detail-detail-header-text">
                <h1>{movie.title} ( {movie.imdb_rating} )</h1>
                <Rating ratingValue={rating} allowHover={false} readonly={true} />
            </div>

            <h2>{(new Date(movie.released_on).getFullYear())} | {movie.length} | {movie.director}</h2>
            <h2>Cast: {casts}</h2>

            <h2>Movie Description: {movie.overview}</h2>
        </div>
    )
}

export default MovieDetail
