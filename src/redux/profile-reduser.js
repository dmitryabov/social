import {profileAPI} from '../api/api'


const ADD_POST = 'ADD-POST';
const SER_USER_PROFILE = 'SER_USER_PROFILE';
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE';
const UPDATE_STATUS_PROFILE = 'UPDATE_STATUS_PROFILE';


let initialState = {
    posts: [
        {id: '1', message: 'hi', like: '3'},
        {id: '2', message: 'how are you', like: '5'}
      ],
   
    profile: null,
    status: ''
}

const profileReduser = (state = initialState, action) => {
    
    switch (action.type){
        case ADD_POST: {
            let newPost = {id: '5', message: action.newPostText, like: '3'};
             return {
                 ...state,
                 newPostText: '',
                 posts: [...state.posts, newPost]
                };
             
            }

        case SER_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile};
           }

           case SET_STATUS_PROFILE: {
            return {
                ...state,
                status: action.status};
           }

           case UPDATE_STATUS_PROFILE: {
            return {
                ...state,
                status: action.status};
           }

        default: 
         return state;
    }
}

export const addPostActionCreator = (newPostText) => {return {type: ADD_POST, newPostText}}
export const setUserProfile = (profile) => {return {type: SER_USER_PROFILE, profile}}
export const setStatusProfile = (status) => {return {type: SET_STATUS_PROFILE, status}}
export const updateStatusProfile = (status) => {return {type: UPDATE_STATUS_PROFILE, status}}


export const getProfile = (userId) => { 
    return (dispatch) => {
        
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
      })
  }
}

export const getProfileStatus = (userId) => { 
    return (dispatch) => {
       
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatusProfile(data));
      })
  }
}

export const updateProfileStatus = (status) => { 
    return (dispatch) => {
        profileAPI.updateStatus(status)
        .then(data => {
            if(data.resultCode === 0) {
            dispatch(updateStatusProfile(status));
            }
      })
  }
}

export default profileReduser; 