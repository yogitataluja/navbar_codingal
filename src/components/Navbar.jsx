import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.jpeg'
import logomob from "../images/logo_mob.png"
import Timer from './Timer';
import Modal from './Modal'



const Navbar = ({ toggle }) => {
  let MinSecs = { minutes: 10, seconds: 0 }

  const stopTimer = () => {
    MinSecs = { minutes: 0, seconds: 0 }
  }

  return (

    <>
      <nav className="flex menu justify-between items-center h-16 bg-white text-black relative shadow m">
        {/* logo */}
        <div className="flex items-center">
          <NavLink to="/"><img className="h-full text-decoration-none  text-dark logomob md:hidden " src={logomob} alt="CODINGAL" /></NavLink>
          <NavLink to="/"><img className="h-full   text-decoration-none text-dark logo md:block hidden" src={logo} alt="CODINGAL" /></NavLink>
          <NavLink className="text-decoration-none pl-4  md:block hidden text-dark" to="/post">Post</NavLink>
          <NavLink to="/" className="pl-4 text-decoration-none text-dark md:block hidden">Trial lesson[Grade 1-3]</NavLink>

        </div>

        {/* hamburger button */}
        <div className='pl-40 hamburg cursor-pointer md:hidden' onClick={toggle}>
          <svg
            className='w-10 h-10'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 26 26'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>

        {/* manubar */}
        <div className=" timerbtn pr-8 md:block hidden">
          <div className=" md:block hidden">
            <Timer className="p-5 my-auto" MinSecs={MinSecs} />
          </div>
          <button onClick={stopTimer} className="bg-red-500 ml-4 md:block hidden  hover:bg-red-700 text-white font-bold py-2 px-4 rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">End Class</button>
        </div>
        <Modal />
      </nav>

    </>
  )
}

export default Navbar
