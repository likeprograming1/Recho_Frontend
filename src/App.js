import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import MoreItemPage from "./pages/moreItempage/moreItempage";
import Artist from "./pages/artist/artist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/morepage/:id" element={<MoreItemPage /> }/>
        <Route path="/artist" element={<Artist />} />
      </Routes>
    </div>
  );
}

export default App;
