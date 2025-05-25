import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import Explore from './pages/Explore';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';
import Bookings from './pages/Bookings';
import Support from './pages/Support';
import ScrollToTop from './components/ScrollToTop';



function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
            
          <Route path="home" element={<HomePage />} />
          <Route path="search" element={<Explore />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="support" element={<Support />} />
          <Route path="detail/:id" element={<Detail />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
