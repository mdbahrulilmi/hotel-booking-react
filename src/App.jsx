import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import ExploreHotel from './pages/ExploreHotel';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
            
          <Route path="home" element={<HomePage />} />
          <Route path="search" element={<ExploreHotel />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
