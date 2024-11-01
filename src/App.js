import React from 'react';
import axios from "axios";
import Register from './Registration';
import Login from './Login';
import {useState} from 'react';

import './App.css';

function App() {
  const [showPageA, setShowPageA] = useState(true);
  return (

   <div>
    
   {showPageA ? <Login/> : <Register/>}
   
   <button onClick={()=> setShowPageA(!showPageA)}>{showPageA ? "Register":"Login"}</button>
   </div>
  );
}

export default App;
