import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import MessagePage from './pages/MessagePage';
import RoomPage from './pages/RoomPage';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
            
          <Route path="home" element={<HomePage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="room" element={<RoomPage />} />
          <Route path="message" element={<MessagePage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
