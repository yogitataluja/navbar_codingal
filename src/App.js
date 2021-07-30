import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dropdown from './components/Dropdown';
import Post from './components/Post'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Trial from './components/Trial';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };
    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Dropdown />
      <Switch>
        <Route path="/post" component={Post}/>
        <Route path="/trial" component={Trial}/>
        <Redirect to="/"/>
      </Switch>

    </>
  );
}

export default App;
