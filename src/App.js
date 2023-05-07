import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import BlogDetails from "./pages/Blog/BlogDetails";

import "./fonts.css";
import "./index.css";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
