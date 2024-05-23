import React from 'react';
import NavBar from './NavBar'
import ContentSyndication from './ContentSyndication';
import Footer from './Footer'
import { Routes, Route } from "react-router-dom";
import PurePush from './PurePush';


const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/" element={<PurePush/>} />
        <Route path="contentSyndication" element={<ContentSyndication/>} />
        <Route path="purepush" element={<PurePush/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
