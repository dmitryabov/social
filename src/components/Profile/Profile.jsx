import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsCantainer from './MyPosts/MyPostsContainer';
 

const Profile = (props) => {
   return ( 
    <div>
      <ProfileInfo isOwner={props.isOwner} savePhoto={props.savePhoto} profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus}/>
      <MyPostsCantainer />
  </div>
   )
}

export default Profile;