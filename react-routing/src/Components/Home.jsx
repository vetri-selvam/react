import React from "react";
import About from "./About";
import { Link } from "react-router-dom";

const Home = () => {  
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link><br /> 
      <Link to="/products">Go to Products View</Link>
    </div>
  );
};

export default Home;
