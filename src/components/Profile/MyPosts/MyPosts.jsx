import React from 'react';
import Post from './Post/Post.jsx'
import classes from './MyPosts.module.css'


const MyPosts = (props) => {
  const postsElement = props.posts.map(post => <Post message={post.message} key={post.id}like={post.like}/>);

  const newPostElement = React.createRef();

  const onAddPost = () => {
   
    props.addPost()
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePostAction(text)
    
  };

   return ( 
    <div className={classes.postsBlock}>
     <h3>my post</h3> 
       <div>
         <div>
           <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
         </div>
         <div> 
           <button onClick={onAddPost}>add post</button>
         </div> 
       </div>
       <div className={classes.posts}>
         { postsElement }
       </div>
    </div>
   )
}

export default MyPosts;