import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import MoreItemPage from "./pages/moreItempage/moreItempage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/morepage/:id" element={<MoreItemPage /> }/>
      </Routes>
    </div>
  );
}

export default App;
