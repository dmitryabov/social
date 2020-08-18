import React, {useState, useEffect} from 'react';
import classes from './ProfileInfo.module.css';



 const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setEditMode(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }; 

    const diactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
        
    };
   
     
   return ( 
       <div>
           {!editMode && 
         <div className={classes.contact}>
           <b> Status: </b> <span onDoubleClick={ activateEditMode }> {props.status || `----`}</span>
         </div>
         }
         {editMode &&
         <div>
           <input 
              onChange={onStatusChange} 
              autoFocus={true} 
              onBlur={ diactivateEditMode } 
              value={status}/>
         </div>
          }
       </div>
   )   
};

export default ProfileStatusWithHooks;