import React from 'react';
import NavBar from './NavBar'
import ContentSyndication from './ContentSyndication';
import Footer from './Footer'
import { Routes, Route } from "react-router-dom";
import PurePush from './Pure Push/PurePush';


const App = () => {
  return (
    <div>
      
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="contentSyndication" element={<ContentSyndication/>} />
        <Route path="purepush" element={<PurePush/>} />
        <Route path="ABM" element={<ABM />} />
      </Routes>
     
    </div>
  );
};

export default App;
