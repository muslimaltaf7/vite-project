import React from 'react';
import NavBar from './NavBar'
import ContentSyndication from './ContentSyndication';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import PurePush from './Pure Push/PurePush';
import ABM from './ABM';
import Home from './Home'


const App = () => {
  return (
    <div>
      
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="contentSyndication" element={<ContentSyndication/>} />
        <Route path="purepush" element={<PurePush/>} />
        <Route path="abmpage" element={<ABM />} />
      </Routes>
     
    </div>
  );
};

export default App;
