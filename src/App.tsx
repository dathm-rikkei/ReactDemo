import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Detail from "./pages/Detail/Detail";
import About from "./pages/About";
import NotFound from "./pages/NotFound/NotFound";
import Upload from "./pages/Upload/Upload";
import List from "./pages/List/List";

const App = () => {
  return (
    <Router>
      <div style={{ display: "block" }}>
        <Navbar />

        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Upload />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/list" element={<List />} />
            <Route path="/detail" element={<Detail id={1} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
