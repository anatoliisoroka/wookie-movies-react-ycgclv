import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-grid-system';
// src
import './style.css';
import MovieCardSmall from '../../components/atoms/MovieCardSmall';

function Home() {
    const searching = useSelector(state => state.movie.searching);
    const items = useSelector(state => state.movie.items);

    return (
        <div className="wookie-home">
            {searching ? (
                <div className="wookie-home-notify">Getting movies...</div>
            ) : (
                items.length ? (
                    <Row>
                        {items.map((item) => (
                            <Col lg={2} md={3} sm={4} key={item.id}>
                                <MovieCardSmall movie={item} />
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <div className="wookie-home-notify">Sorry, no movies found... :(</div>
                )
            )}
        </div>
    )
}

export default Home;
