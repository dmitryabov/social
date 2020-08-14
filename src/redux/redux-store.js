import profileReduser from './profile-reduser';
import messageReduser from './message-reduser';
import sidebarReduser from './sidebar-reduser';
import usersReduser from './users-reduser';
import authReduser from './auth-reduser';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReduser from './app-reduser';


const { createStore, combineReducers, applyMiddleware, compose } = require("redux");


let redusers = combineReducers({
    profilePage: profileReduser,
    messagePage: messageReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer,
    app: appReduser,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers( applyMiddleware(thunkMiddleware)));

//let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;