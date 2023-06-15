// Packages
import '@picocss/pico/css/pico.min.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";

const App = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/> }></Route>
              <Route path="/Quiz" element={<Quiz/>}></Route>
              <Route path="/Login" element={<Login/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;