import React, {useState, useEffect} from "react";
import {Routes,Route,Link} from "react-router-dom"
import Pizza from './Pizza'
import Homepage from './Homepage'




const App = () => {
  
  return (
    <>
      <h1 className="home-page">Home</h1>
      <div className="links">
        <Link to='/' >Home</Link>
        <Link to='pizza'>Order Pizza</Link>
      </div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='pizza' element = {<Pizza />}></Route>
      </Routes>
    </>
  );
};
export default App;
