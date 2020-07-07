import React from 'react';
import classes from './users.module.css';
import userPhoto from '../../assets/images/images.png'
import { NavLink } from 'react-router-dom';




const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i) 
      }
      
    return (
        <div className={classes.usersBlock}>
        <div >
    {pages.map((page) => { 
           return <span onClick={ () => props.onPageChanged(page)} className={ props.currentPage === page && classes.selectedPage}>{page}</span>})}
        </div>
       {
        props.users.map( user => <div className={classes.userInfo} key={user.d + user.fullName}>               
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
                       ? <button disabled={props.followingInPropgress
                        .some( id => id === user.id)} 
                            onClick={() => { props.unfollow(user.id)}}>
                                UnFollow</button> 

                       : <button disabled={props.followingInPropgress
                        .some( id => id === user.id)} 
                           onClick={() => {props.follow(user.id) }}>
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
 </div>

    )
}

export default Users;