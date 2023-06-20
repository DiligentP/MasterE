import {BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
    return (
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/> }></Route>
              <Route path="/Quiz" element={<Quiz/>}></Route>
              <Route path="/Login" element={<Login/>}></Route>
              <Route path="/Register" element={<Register/>}></Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;