import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';

import HomePage from './pages/BookingPage'
import BookingPage from './pages/BookingPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/booking" />} />
            
          <Route path="booking" element={<BookingPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
