import React from "react";
import style from "../styles/Navbar.module.css";
import Logo from "../assets/Logo.svg";
import Job from "./Job";
import Contact from "./Contact";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.Navbar}>
      <div className={style.Logo}>
        <img src={Logo} alt='hi' />
      </div>
      <div className={style.Links}>
        <Router>
          <div>
            <nav className={style.LinkParent}>
              <NavLink to='/' className={style.link}>
                Home
              </NavLink>

              <NavLink
                to='/Jobs'
                className={style.link}
                activeClassName={style.active}
              >
                Jobs
              </NavLink>

              <NavLink
                to='/contact'
                className={style.link}
                activeClassName={style.active}
              >
                Contact
              </NavLink>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path='/contact'>
                <Contact />
              </Route>
              <Route path='/'></Route>
              <Route path='/Jobs'>
                <Job />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default Navbar;
