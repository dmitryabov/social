import {addPostActionCreator, updatePostActionCreator} from '../../../redux/profile-reduser'
import MyPosts from './MyPosts.jsx';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updatePostAction: (text) => { 
      let action = updatePostActionCreator(text);
      dispatch(action)},
    addPost: () => {dispatch(addPostActionCreator())},
  }
}

const MyPostsCantainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsCantainer;