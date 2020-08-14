import React from 'react';
import classes from './users.module.css';
import userPhoto from '../../assets/images/images.png'
import { NavLink } from 'react-router-dom';


const User = ({user, followingInPropgress, unfollow, follow}) => {
    return (
         <div >               
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
                       ? <button disabled={followingInPropgress
                        .some( id => id === user.id)} 
                            onClick={() => { unfollow(user.id)}}>
                                UnFollow</button> 

                       : <button disabled={followingInPropgress
                        .some( id => id === user.id)} 
                           onClick={() => {follow(user.id) }}>
                           Follow</button>}
                   </div>
               </span>
               <span>
                  <span>
                      <div>{user.name}</div>
                      <div>{user.status}</div>
                  </span>
                  <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>   
                  </span>
               </span>
            </div>
    )
}

export default User;