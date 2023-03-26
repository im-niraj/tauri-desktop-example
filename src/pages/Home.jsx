import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home</div>
      
      <NavLink to={"/about"}>About page</NavLink>
    </>
  );
};

export default Home;
