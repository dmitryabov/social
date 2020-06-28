import profileReduser from './profile-reduser';
import messageReduser from './message-reduser';
import sidebarReduser from './sidebar-reduser';


const { createStore, combineReducers } = require("redux");


let redusers = combineReducers({
    profilePage: profileReduser,
    messagePage: messageReduser,
    sidebar: sidebarReduser,
});

let store = createStore(redusers);

export default store;