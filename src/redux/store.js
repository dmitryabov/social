import profileReduser from './profile-reduser';
import messageReduser from './message-reduser';
import sidebarReduser from './sidebar-reduser';



const store = {
  _state: {
    profilePage: {
      posts: [
          {id: '1', message: 'hi', like: '3'},
          {id: '2', message: 'how are you', like: 5}
        ],
      newPostText: '',
    },
  
     messagePage: {
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
    },
    
    sidebar: {},
  },
  getState () {
    return this._state
  },

  _callSubsciber () {},
  
   subscribe (observer) {
    this._callSubsciber = observer
  },

  dispatch (action) {
     profileReduser(this._state.profilePage, action);
     messageReduser(this._state.messagePage, action);
     sidebarReduser(this._state.sidebar, action);
     this._callSubsciber(this._state);
    
  }
}







export default store;