import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-grid-system';
import { keys, map } from 'lodash';
// src
import './style.css';
import MovieCardSmall from '../../components/atoms/MovieCardSmall';

function Home() {
    const searching = useSelector(state => state.movie.searching);
    const items = useSelector(state => state.movie.items);

    const groupedItems = items.reduce((itemsSoFar, item) => {
        item.genres.map((genre) => {
            if (!itemsSoFar[genre]) itemsSoFar[genre] = [];
            itemsSoFar[genre].push(item);
        })

        return itemsSoFar;
    }, {});

    return (
        <div className="wookie-home">
            {searching ? (
                <div className="wookie-home-notify">Getting movies...</div>
            ) : (
                items.length ? (
                    map(keys(groupedItems).sort(), genre => {
                        const items = groupedItems[genre];
                        return (
                            <div key={genre}>
                                <h2>{genre}</h2>
                                <Row>
                                    {items.map((item) => (
                                        <Col lg={2} md={3} sm={4} key={item.id}>
                                            <MovieCardSmall movie={item} />
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        )
                    })
                ) : (
                    <div className="wookie-home-notify">Sorry, no movies found... :(</div>
                )
            )}
        </div>
    )
}

export default Home;
