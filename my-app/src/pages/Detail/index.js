import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-grid-system';
import { find } from 'lodash';
// src
import './style.css';
import MovieCardLarge from '../../components/atoms/MovieCardLarge';
import MovieDetail from '../../components/MovieDetail';

function Detail() {
    const { movieId } = useParams();

    const searchValue = useSelector(state => state.movie.searchValue);
    useEffect(() => {
        return <Navigate to='/' />;
    }, [searchValue]);

    const movies = useSelector(state => state.movie.items);
    const selectedItem = find(movies, {
        id: movieId
    })

    if (!selectedItem) return <Navigate to='/' />;

    return (
        <div className="wookie-detail">
            <Row>
                <Col xl={3} lg={5} md={6}>
                    <MovieCardLarge movie={selectedItem} />
                </Col>
                <Col xl={9} lg={7} md={6}>
                    <MovieDetail movie={selectedItem} />
                </Col>
            </Row>
        </div>
    )
}

export default Detail;
