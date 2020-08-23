import React from 'react';
import classes from './users.module.css';
import userPhoto from '../../assets/images/images.png'
import { NavLink } from 'react-router-dom';


const User = ({user, followingInPropgress, unfollow, follow}) => {
    return (
         <div className={classes.card}>               
               <span>
                   <div>
                       <NavLink to={'/profile/' + user.id}>
                       <img 
                         src={user.photos.small !== null ? user.photos.small : userPhoto} 
                         alt='ava' 
                         className={classes.userPhoto}>
                         </img>
                        </NavLink>
                   </div>
                   <div>
                       {user.followed 
                       ? <button className={`${classes.btn} ${classes.follow}`} disabled={followingInPropgress
                        .some( id => id === user.id)} 
                            onClick={() => { unfollow(user.id)}}>
                                UnFollow</button> 

                       : <button className={`${classes.btn} ${classes.unfollow}`} disabled={followingInPropgress
                        .some( id => id === user.id)} 
                           onClick={() => {follow(user.id) }}>
                           Follow</button>}
                   </div>
               </span>
               <div className={classes.container}>
                  <span>
                      <div>{user.name}</div>
                      <div>{user.status}</div>
                  </span>
               </div>
            </div>
    )
}

export default User;