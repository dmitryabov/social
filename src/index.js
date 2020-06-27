import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, addMessage, updateNewMessageText} from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import state, {subscribe} from './redux/state';


const rerenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App 
        state={state} 
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
        />
    </BrowserRouter>,
    document.getElementById('root')
);
}


rerenderTree(state);


subscribe(rerenderTree)


