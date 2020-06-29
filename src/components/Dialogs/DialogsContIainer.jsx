import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/message-reduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    dialogs: state.messagePage.dialogs,
    messages: state.messagePage.messages,
    newMessageText: state.messagePage.newMessageText
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
    updateMessageAction: (text) => {
      let action = updateMessageActionCreator(text);
      dispatch(action)},
    addMessageAction: () => {
      dispatch(addMessageActionCreator())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;