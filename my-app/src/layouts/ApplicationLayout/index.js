import React from 'react';
// src
import './style.css';
import Header from '../../components/Header';

function ApplicationLayout({ children }) {
    return (
        <div className="wookie-layout">
            <Header />
            {children}
        </div>
    )
}

export default ApplicationLayout;
