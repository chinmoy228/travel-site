import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import menu from '../images/menu.svg'
import PopupMenu from "./PopupMenu";


const Navbar = ({ navlinks }) => {
  const [popupState,setPopupState]=useState(false)
  return (
    <div>
      <header className="flex items-center justify-center w-auto h-auto absolute top-7 left-0 right-0">
        <nav className="flex items-center justify-between trivago-container">
          <NavLink to={`/`} className="flex items-center">
            <img src={logo} alt="logo/img" className="w-22 h-9 object-fill" />
          </NavLink>
          <ul className="flex items-center lg:hidden gap-7">
            {navlinks?.map((val, i) => (
              <li key={i}>
                <NavLink to={"#"} className="text-lg text-slate-900">
                  {val.link}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <button type="button" className="button-emrald px-7 text-base lg:hidden">Join Us</button>
            </li>
          </ul>
          <ul className="hidden lg:flex items-center">
            <li><button type="button" className="flex items-center shadow-lg transition-all duration-200 active:scale-90" onClick={()=>setPopupState(!popupState)}> 
           <svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H20" stroke="#4A5568" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
            </button></li>
          </ul>
        </nav>
      </header>
      {popupState && <PopupMenu navlinks={navlinks} popupState={popupState}/>}
    </div>
  );
};

export default Navbar;
