import React from 'react'
import { NavLink } from 'react-router-dom'
import Timer from './Timer';

const Dropdown = ({ isOpen, toggle }) => {
    const MinSecs = { minutes: 10, seconds: 0 }
    return (
      <div
        className={
          isOpen
            ? 'grid grid-rows-4 my-3 text-center items-center bg-white shadow'
            : 'hidden'
        }
        onClick={toggle}>
        <NavLink className="text-decoration-none text-dark" to="/post">Post</NavLink>
        <NavLink to="/" className="pl-4 text-decoration-none text-dark">Trial lesson[Grade 1-3]</NavLink>
        <Timer className="p-4" MinSecs={MinSecs} />
        <button className="bg-red-500 ml-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" data-bs-toggle="modal" data-bs-target="#exampleModal" >End Class</button>
      </div>
    );
  };
  
  export default Dropdown;
