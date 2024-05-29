import React from 'react';
import ContentSyndication from './ContentSyndication';
import PurePush from './PurePush';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      
      <Routes>
      <Route path="contentSyndication" element={<ContentSyndication/>} />
       <Route path="/" element={<Home/>} />
      <Route path="purepush" element={<PurePush/>} />
        {/* <Route path="contentSyndication" element={<ContentSyndication/>} />
        <Route path="abmpage" element={<ABM />} />
        <Route path="contact" element={<LetsTalk />} />  */} 
      </Routes>
     
    </div>
  );
};

export default App;
