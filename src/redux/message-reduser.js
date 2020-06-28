const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
    dialogs: [
        {id: '1', name: 'Dmitry'},
        {id: '2', name: 'Anna'},
        {id: '3', name: 'Ivan'},
        {id: '4', name: 'Katy'},
        {id: '5', name: 'Atrem'}
      ],
    messeages: [
        {id: '1', message: 'hi'},
        {id: '2', message: 'how are you'},
        {id: '3', message: 'goog'},
        {id: '4', message: 'i like it'},
        {id: '5', message: 'I am cool'},
      ],
      newMessageText: '',
}


const messageReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
          const newMessage = {
              id: '6', 
              message: state.newMessageText
           };
          
            state.messeages.push(newMessage);
            state.newMessageText = '';
           return state;
        case UPDATE_NEW_MESSAGE_TEXT: 
          state.newMessageText = action.messageText;
        return state;

        default:
            return state;
    }
      
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
  }
  
  export const updateMessageActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, messageText: text}
  }

export default messageReduser;