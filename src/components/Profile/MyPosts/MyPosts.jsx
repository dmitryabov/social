import React from 'react';
import Post from './Post/Post.jsx'
import classes from './MyPosts.module.css';


const postsData = [
  {id: '1', message: 'hi', like: '3'},
  {id: '2', message: 'how are you', like: 5}
]

const MyPosts = () => {
   return ( 
    <div className={classes.postsBlock}>
     <h3>my post</h3> 
       <div>
         <div>
           <textarea></textarea>
         </div>
         <div>
           <button>add post</button>
         </div> 
       </div>
       <div className={classes.posts}>
         <Post message={postsData[0].message} like={postsData[0].like}/>
         <Post message={postsData[1].message} like={postsData[1].like}/>
       </div>
    </div>
   )
}

export default MyPosts;