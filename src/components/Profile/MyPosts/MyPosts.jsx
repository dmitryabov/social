import React from 'react';
import Post from './Post/Post.jsx'
import classes from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form'


const MyPosts = React.memo((props) => {
  const postsElement = props.posts.map(post => <Post message={post.message} key={post.id}like={post.like}/>);
  const onAddPost = (values) => {props.addPost(values.newPostText)};

   return ( 
    <div className={classes.postsBlock}>
     <h3 className={classes.header}>my post</h3> 
       <div className={classes.posts}>
         { postsElement }
         <AddNewPosrFormRedux onSubmit={onAddPost}/>
       </div>
    </div>
   )
})


let AddNewPosrForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
           <div>
             <Field name={'newPostText'} component={'textarea'}/>
           </div>
           <div> 
               <button >add post</button>
            </div> 
          </form>
          }

       let AddNewPosrFormRedux = reduxForm({ form: 'ProfileAddNewPosrForm' })(AddNewPosrForm)

export default MyPosts;