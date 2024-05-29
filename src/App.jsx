import React from 'react';
import ContentSyndication from './ContentSyndication';
import PurePush from './PurePush';
import Abm from './Abm';
import { Routes, Route } from "react-router-dom";
import Home from './Home';

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="contentSyndication" element={<ContentSyndication/>} />
        <Route path="purepush" element={<PurePush/>} />
        <Route path="abmpage" element={<Abm />} />
        {/* <Route path="/" element={<Home/>} />
          <Route path="contentSyndication" element={<ContentSyndication/>} />
          <Route path="abmpage" element={<ABM />} />
          <Route path="contact" element={<LetsTalk />} /> */}
      </Routes>
     
    </div>
  );
};

export default App;
