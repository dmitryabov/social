import profileReduser from './profile-reduser';
import messageReduser from './message-reduser';
import sidebarReduser from './sidebar-reduser';
import usersReduser from './users-reduser';



const { createStore, combineReducers } = require("redux");


let redusers = combineReducers({
    profilePage: profileReduser,
    messagePage: messageReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
});

let store = createStore(redusers);

export default store;