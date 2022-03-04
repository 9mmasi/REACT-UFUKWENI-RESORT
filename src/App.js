//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import React from 'react';
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar';


function App() {

  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Rooms/:slug' element={<SingleRoom />} />
        <Route path='/Rooms' element={<Rooms />} />
        <Route path='*' element={<Error />} />
      </Routes>
      
     
    </React.Fragment>
  );
}

export default App;
