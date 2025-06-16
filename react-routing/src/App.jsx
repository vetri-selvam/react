import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
// import Product from "./Components/Product";
// import Products from "./Components/Products";
import router from "./routes/router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* React Router DOM - Most Popular way for React */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

      {/* Object Based */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
