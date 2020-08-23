import React from 'react';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import { reduxForm } from 'redux-form';
import style from "../../common/FormsControls/FormsControls.module.css";


 const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form className={style.text} onSubmit={handleSubmit}>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        
      <div><button>save</button></div>
      <div ><b>Полное имя:</b>{createField('Full name', 'fullName', [], Input)}</div>
      <div><b>Ищу ли работу:</b>{createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}</div>
      <div><b>Мои навыки:</b> {createField('My skills', 'lookingForAJobDescription', [], Textarea)}</div>
      <div><b>О бо мне:</b> {createField('About me', 'aboutMe', [], Textarea)}</div>
      <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key}>
                <b>{key}: {createField(key, 'contacts' + key, [], Input)}</b>
            </div>
        })}
        </div>
      
  </form>
   };

   const ProfileDataFormReduxForm = reduxForm({form: 'edit-form'})(ProfileDataForm)

   export default ProfileDataFormReduxForm;