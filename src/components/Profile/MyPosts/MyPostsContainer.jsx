import {addPostActionCreator} from '../../../redux/profile-reduser'
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
    addPost: (newPostText) => {dispatch(addPostActionCreator(newPostText))},
  }
}

const MyPostsCantainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsCantainer;