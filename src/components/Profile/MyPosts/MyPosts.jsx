import React from 'react';
import Post from './Post/Post.jsx'
import classes from './MyPosts.module.css'
import {addPostActionCreator, updatePostActionCreator} from '../../../redux/profile-reduser'


const MyPosts = (props) => {
  const postsElement = props.posts.map(post => <Post message={post.message} like={post.like}/>);

  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updatePostActionCreator(text)
    props.dispatch(action);
    
  };

   return ( 
    <div className={classes.postsBlock}>
     <h3>my post</h3> 
       <div>
         <div>
           <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
         </div>
         <div> 
           <button onClick={addPost}>add post</button>
         </div> 
       </div>
       <div className={classes.posts}>
         { postsElement }
       </div>
    </div>
   )
}

export default MyPosts;