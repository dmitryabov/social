import React from 'react';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
   return ( 
   <header className={classes.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1200px-Ethereum_logo_2014.svg.png" alt='logo'></img>
       
       <div className={classes.loginBlock}>

         { props.isAuth ? props.login : <NavLink to={`/login`} >Login</NavLink>} 
      </div> 
     </header>
   )
}

export default Header;