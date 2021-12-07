import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Home() {
    const items = useSelector(state => state.movie.items);

    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    )
}

export default Home;
