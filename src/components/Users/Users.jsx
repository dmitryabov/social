import React from 'react';
import classes from './users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';





const Users = (props) => {
    return (
        <div className={classes.usersBlock}>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
            totalItemsCount={props.totalUserCount} pageSize={props.pageSize}/>
       <div>
       {
        props.users.map( user => <User key={user.id + user.name}
                                    user={user}
                                    followingInPropgress={props.followingInPropgress}
                                    unfollow={props.unfollow}
                                    follow={props.follow}
        /> 
        )
    }
   </div>
   </div>
    )
}

export default Users;