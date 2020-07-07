import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/message-reduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

import { withAuthRedirect } from './hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
  return {
    dialogs: state.messagePage.dialogs,
    messages: state.messagePage.messages,
    newMessageText: state.messagePage.newMessageText,  
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


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);