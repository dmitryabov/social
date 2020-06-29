import React from 'react';
import classes from './users.module.css';


let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {id: '1', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1r6JLzg7t4O9HLayeMjzvfQ9sSX3xnlbeTg&usqp=CAU', followed: false, fullName: 'Dmitry', status: 'I am LIKE a BOSS', location: {city: 'Moscow', country: 'Russia'}},
            {id: '2', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1r6JLzg7t4O9HLayeMjzvfQ9sSX3xnlbeTg&usqp=CAU',followed: true, fullName: 'Ivan', status: 'status like test', location: {city: 'Vien', country: 'Austria'}},
            {id: '3', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1r6JLzg7t4O9HLayeMjzvfQ9sSX3xnlbeTg&usqp=CAU',followed: false, fullName: 'Artem', status: 'I like auto', location: {city: 'Saratov', country: 'Russia'}},
          ], )
    }

   return <div>
       {
           props.users.map( user => <div key={user.d + user.fullName}>
                   
                  <span>
                      <div>
                          <img src={user.photoUrl} alt='ava' className={classes.userPhoto}></img>
                      </div>
                      <div>
                          {user.followed 
                          ? <button onClick={() => {props.unfollow(user.id)}}>UnFollow</button> : 
                            <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                          
                      </div>
                  </span>
                  <span>
                     <span>
                         <div>{user.fullName}</div>
                         <div>{user.status}</div>
                     </span>
                     <span>
                       <div>{user.location.country}</div>
                       <div>{user.location.city}</div>
                       
                     </span>
                  </span>

               </div>
           )
       }
    </div>
}


export default Users;