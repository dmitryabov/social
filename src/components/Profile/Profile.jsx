import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsCantainer from './MyPosts/MyPostsContainer';
 

const Profile = (props) => {
   return ( 
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsCantainer />
  </div>
   )
}

export default Profile;