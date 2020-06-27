import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';



const Dialogs = (props) => {
   const newMessageElement = React.createRef();

   const addMessage = () => {
     props.addMessage()
     
   };

   const onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

    return (
    <div className={classes.dialogs}>
        <div className={classes.dialogsItem} >
          {props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
            
        </div>
        <div className={classes.messages}>
          {props.state.messeages.map(message => <Message message={message.message}/>)}
          <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}></textarea>
          <div>
            <button onClick={addMessage}>add message</button>
          </div>
        </div>
    </div>
    )
}

export default Dialogs;