import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home';
import TestSwiper from './pages/TestSwiper';

import './styles.css';
import TestSwiperContent from './pages/TestSwiperContent';
import SlideContent from './components/SlideContent';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/slide" element={<HomePage />}>
          <Route path="/slide/:slideId" element={<SlideContent />} />
        </Route>
        
        <Route path="/test" element={<TestSwiper />}>
          <Route path=":slideId" element={<TestSwiperContent />} />
        </Route>

        {/* redirect to start to "slide/0" */}
        <Route path="/" element={<Navigate to="/slide/0" />} />
      </Routes>
    </BrowserRouter>
  );
}
