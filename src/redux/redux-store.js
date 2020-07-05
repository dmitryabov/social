import profileReduser from './profile-reduser';
import messageReduser from './message-reduser';
import sidebarReduser from './sidebar-reduser';
import usersReduser from './users-reduser';
import authReduser from './auth-reduser';
import thunkMiddleware from 'redux-thunk';



const { createStore, combineReducers, applyMiddleware } = require("redux");


let redusers = combineReducers({
    profilePage: profileReduser,
    messagePage: messageReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser,
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;