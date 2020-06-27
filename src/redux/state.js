
let rerenderTree = () => {};


const state = {
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
}

export const addPost = () => {
  const newPost = {
      id: '3', 
      message: state.profilePage.newPostText, 
      like: '3'
   };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderTree(state);
};


export const updateNewPostText = (postText) => {
  state.profilePage.newPostText = postText;
  rerenderTree(state);
};

export const addMessage = () => {
  const newMessage = {
    id: '6', 
    message: state.messagePage.newMessageText
   };
  
  state.messagePage.messeages.push(newMessage);
  state.messagePage.newMessageText = '';
  rerenderTree(state);
};

export const updateNewMessageText = (messageText) => {
  state.messagePage.newMessageText = messageText;
  rerenderTree(state);
};

export const subscribe = (observer) => {
  rerenderTree = observer
};

export default state;