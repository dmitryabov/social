import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
 


const Navbar = () => {
   return ( 
    <nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
    </div>
    <div className={`${classes.item} ${classes.active}`}>
      <NavLink to="/dialogs" activeClassName={classes.active}>Message</NavLink>
    </div>
    <div className={classes.item}> 
      <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/settincs" activeClassName={classes.active}>Settincs</NavLink>
    </div>
  </nav>
   )
}

export default Navbar;