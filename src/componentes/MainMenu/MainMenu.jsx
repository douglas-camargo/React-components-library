import React from "react"
import { NavLink } from 'react-router-dom';
import CartCounter from '../CartCounter/CartCounter.jsx'



const MainMenu = () =>

<header className="ed-header s-bg-grey s-py-2" >
  <div className="ed-grid lg-grid-5">
    <nav className="nav lg-cols-5 s-cross-center ed-grid full">
      <ul className="menu s-main-distribute s-to-right m-to-right l-to-right lg-to-right s-mb-0 s-pl-0 s-py-1">
        <CartCounter />
      </ul>
    </nav>
  </div>
</header>




export default MainMenu
