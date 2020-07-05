import {profileAPI} from '../api/api'


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SER_USER_PROFILE = 'SER_USER_PROFILE';


let initialState = {
    posts: [
        {id: '1', message: 'hi', like: '3'},
        {id: '2', message: 'how are you', like: 5}
      ],
    newPostText: '',
    profile: null
}

const profileReduser = (state = initialState, action) => {
    
    switch (action.type){
        case ADD_POST: {
            const newPost = state.newPostText;
             return {
                 ...state,
                 newPostText: '',
                 posts: [...state.posts, {id: '3', message: newPost, like: '3'}]
                };
             
            }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.postText};
           }

        case SER_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile};
           }

        default: 
         return state;
    }
}

export const addPostActionCreator = () => {return {type: ADD_POST}}
  
export const updatePostActionCreator = (text) => { return {type: UPDATE_NEW_POST_TEXT, postText: text}}

export const setUserProfile = (profile) => {return {type: SER_USER_PROFILE, profile}}


export const getProfile = (userId) => { 
    return (dispatch) => {
        if(!userId) {
           userId = 2
        }
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
      })
  }
}

export default profileReduser; 