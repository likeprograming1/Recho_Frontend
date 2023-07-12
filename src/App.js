import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import MoreItemPage from "./pages/moreItempage/moreItempage";
import Artist from "./pages/artist/artist";
import SignUp from "./pages/signup/signup";
import Mypage from "./pages/mypage/mypage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/morepage/:id/:product" element={<MoreItemPage />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </div>
  );
}

export default App;
