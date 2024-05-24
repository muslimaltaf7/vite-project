import React from 'react';
import NavBar from './NavBar'
import ContentSyndication from './ContentSyndication';
import { Routes, Route } from "react-router-dom";
import PurePush from './Pure Push/PurePush';
import ABM from './ABM';
import Home from './Home'
import LetsTalk from './Lets Talk/LetsTalk';
const App = () => {
  return (
    <div>
      
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="contentSyndication" element={<ContentSyndication/>} />
        <Route path="purepush" element={<PurePush/>} />
        <Route path="abmpage" element={<ABM />} />
        <Route path="contact" element={<LetsTalk />} />
      </Routes>
     
    </div>
  );
};

export default App;
