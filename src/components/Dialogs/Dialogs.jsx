import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';



const Dialogs = (props) => {
   const newMessageElement = React.createRef();
   const onAddMessage = () => {
     props.addMessageAction()
   };

   const onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateMessageAction(text)  
  };

    return (
    <div className={classes.dialogs}>
        <div className={classes.dialogsItem} >
          {props.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)}           
        </div>
        <div className={classes.messages}>
          {props.messages.map(message => <Message message={message.message} key={message.id}/>)}
          <div>
            <textarea 
              onChange={onMessageChange} 
              ref={newMessageElement} 
              value={props.newMessageText}
              placeholder='Enter your message'
              >
            </textarea>
          </div>
          <div>
            <button onClick={onAddMessage}>add message</button>
          </div>
        </div>
    </div>
    )
}



export default Dialogs;