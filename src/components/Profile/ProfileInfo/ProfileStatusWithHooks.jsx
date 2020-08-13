import React, {useState} from 'react';



 const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

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
         <div>
           <span onDoubleClick={ activateEditMode }>{props.status || `----`}</span>
         </div>
         }
         {editMode &&
         <div>
           <input 
              autoFocus={true} 
              onChange={onStatusChange} 
              onBlur={ diactivateEditMode } 
              value={status}>
            </input>
         </div>
          }
       </div>
   )
    
};

export default ProfileStatusWithHooks;