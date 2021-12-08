import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// src
import ApplicationLayout from '../layouts/ApplicationLayout';
const Home = lazy(() => import('../pages/Home'));
const Detail = lazy(() => import('../pages/Detail'));

function AppRouter() {
    return (
        <ApplicationLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:movieId" element={<Detail />} />
            </Routes>
        </ApplicationLayout>
    );
}

export default AppRouter;
