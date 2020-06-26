import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
   return ( 
    <div>
      <div>
        <img src="https://platform-news.com/ru/wp-content/themes/platform-news/img/slider/01.jpg" alt='avatar'></img>
      </div>
      <div className={classes.describtionBlock}>
        ava and describtion
      </div>
  </div>
   )
}

export default ProfileInfo;