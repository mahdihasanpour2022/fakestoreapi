import React from 'react';
import {NavLink} from "react-router-dom";
// scss 
import Styles from "../assets/styles/components styles/NavBar.module.scss";

const Navbar = () => {
  return (
    <>
      <div className={Styles.navbar} >
        <nav>
            <ul>
              <li>
                <NavLink className={(navdata) => navdata.isActive ? `${Styles.navlink} ${Styles.active}` : Styles.navlink} to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className={navdata => navdata.isActive ? `${Styles.navlink} ${Styles.active}`: Styles.navlink} to="/products">Products</NavLink>
              </li>
            </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;