import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';


const ProfileInfo = (props) => {
   if(!props.profile) {
     return <Preloader />
   }

   return ( 
    <div>
      <div>
        <img src="https://platform-news.com/ru/wp-content/themes/platform-news/img/slider/01.jpg" alt='avatar'></img>
      </div>
      <div className={classes.describtionBlock}>
        <img src={props.profile.photos.large} alt='You '></img>
        <div>
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