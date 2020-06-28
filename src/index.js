import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';


const rerenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App 
        state={state} 
        dispatch={store.dispatch.bind(store)}
        />
    </BrowserRouter>,
    document.getElementById('root')
);
}


rerenderTree(store.getState());


store.subscribe(() => {
  rerenderTree(store.getState())
})


