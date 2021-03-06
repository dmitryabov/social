import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
   return (
         <div className={classes.item}>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU' alt='ava'></img>
           <p>{props.message}</p>
           <span className={classes.like}>likes {props.like}</span>
         </div>
   )
}

export default Post;