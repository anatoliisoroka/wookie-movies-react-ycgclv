import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
    const { videoId } = useParams();
    
    return (
        <div>Detail Page {videoId}</div>
    )
}

export default Detail;
