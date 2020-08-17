import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/images.png'



const ProfileInfo = (props) => {
   if(!props.profile) {
     return <Preloader />
   }
   
   const onMainPhotoSelected = (e) => {
      if (e.target.files.length){
        props.savePhoto(e.target.files[0]);
      }
   }

   return ( 
    <div>
      <div>
        <img className={classes.profileImg} 
        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNA4_AMnRYJ-J-VUt-LWFkLM2VQ8ZKhyaqYA&usqp=CAU"} alt='avatar'></img>
        
      </div>
      {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
      <div> <ProfileStatusWithHooks status={props.status} updateProfileStatus={props.updateProfileStatus}/> </div>
      <div className={classes.describtionBlock}>
        <img className={classes.profileAva} src={props.profile.photos.large || userPhoto} alt='You '></img>
        <div className={classes.profileInfo}>
          <div>{`О бо мне: ` + props.profile.aboutMe}</div>
          <div>{props.profile.lookingForAJob ? `Ищу работу` : `Не ищу работу`}</div>
          <div>{props.profile.lookingForAJobDescription}</div>
          <div>{`Полное имя ` + props.profile.fullName}</div>
        </div>    
      </div>
  </div>
   )
}

export default ProfileInfo;