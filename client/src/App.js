import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CreateUser from './CreateUser';
import Results from './Results';

function App() {
  return (
   <Router>
     <Routes>
       <Route path="/" exact element ={<CreateUser/>} />
       <Route path="/results" exact element ={<Results/>} />
     </Routes>
   </Router>
  );
}

export default App;
