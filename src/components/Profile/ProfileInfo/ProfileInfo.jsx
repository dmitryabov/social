import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/images.png'
import ProfileDataForm from './ProfileDataForm';



const ProfileInfo = (props) => {
   
  let [editMode, setEditMode] = useState(false);

   if(!props.profile) {
     return <Preloader />
   }
   
   const onMainPhotoSelected = (e) => {
      if (e.target.files.length){
        props.savePhoto(e.target.files[0]);
      }
   }

   const onSubmit = (formData) => {
      props.saveProfile(formData).then(
        () => {
          setEditMode(false)
        }
      )     
   }

   return ( 
    <div className={classes.card}>
      <div className>
        <img className={classes.profileAva} src={props.profile.photos.large || userPhoto} alt='You '></img>  
        {props.isOwner && <input className={classes.file} type={'file'} onChange={onMainPhotoSelected}/>}
      </div>
      <div className={classes.container}>
        {editMode 
                 ? <ProfileDataForm onSubmit={onSubmit} initialValues={props.profile} profile={props.profile}/> 
                 : <ProfileData {...props} goToEditMode={() => {setEditMode(true)}}/>} 
        <div> 
          <ProfileStatusWithHooks status={props.status} updateProfileStatus={props.updateProfileStatus}/> 
        </div>
      </div>
  </div>
   )
}

const ProfileData = (props) => {
 return <div className={classes.describtionBlock}>
        {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}
        <div className={classes.profileInfo}>
          <div><b>Полное имя:</b>{ ` ` + props.profile.fullName}</div>
          <div><b>Ищу ли работу:</b>{props.profile.lookingForAJob ? ` Ищу` : ` Не ищу `}</div>
          <div><b>Мои навыки:</b> { props.profile.lookingForAJobDescription}</div>
          <div><b>О бо мне:</b> { props.profile.aboutMe}</div>
          <div><b>Контакты:</b> {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile[key]}/>
          }) }</div>
        </div>    
      </div>
}

const Contact = ({contactTitle, contactValue}) => {
  return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;