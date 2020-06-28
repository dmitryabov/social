import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';
import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/message-reduser';



const Dialogs = (props) => {
   const newMessageElement = React.createRef();

   const addMessage = () => {
     props.dispatch(addMessageActionCreator())
     
   };

   const onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = updateMessageActionCreator(text)
    props.dispatch(action);
  };

    return (
    <div className={classes.dialogs}>
        <div className={classes.dialogsItem} >
          {props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
            
        </div>
        <div className={classes.messages}>
          {props.state.messeages.map(message => <Message message={message.message}/>)}
          <div>
            <textarea 
              onChange={onMessageChange} 
              ref={newMessageElement} 
              value={props.newMessageText}
              placeholder='Enter your message'
              ></textarea>
          </div>
          <div>
            <button onClick={addMessage}>add message</button>
          </div>
        </div>
    </div>
    )
}

export default Dialogs;