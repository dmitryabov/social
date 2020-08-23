import React from 'react';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
   return ( 
   <header className={classes.header}>
      <span className={classes.logo}>social network</span>
      <div className={classes.loginBlock}>
        { props.isAuth ? 
        <div>
          <span className={classes.loginName}>{props.login} </span>
          <button className={`${classes.btn} ${classes.login}`} onClick={props.logout}>Logout</button>
        </div> : <NavLink className={`${classes.btn} ${classes.login}`} to={`/login`} >Login</NavLink>} 
      </div> 
     </header>
   )
}

export default Header;