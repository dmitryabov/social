import {profileAPI} from '../api/api'


const ADD_POST = 'ADD-POST';
const SER_USER_PROFILE = 'SER_USER_PROFILE';
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE';
const UPDATE_STATUS_PROFILE = 'UPDATE_STATUS_PROFILE';
const DELETE_POST = 'DELETE_POST';


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

           case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.id)};
           }

        default: 
         return state;
    }
}

export const addPostActionCreator = (newPostText) => {return {type: ADD_POST, newPostText}}
export const setUserProfile = (profile) => {return {type: SER_USER_PROFILE, profile}}
export const setStatusProfile = (status) => {return {type: SET_STATUS_PROFILE, status}}
export const updateStatusProfile = (status) => {return {type: UPDATE_STATUS_PROFILE, status}}
export const deletePost = (id) => {return {type: DELETE_POST, id}}


export const getProfile = (userId) => async(dispatch) => {
    let data = await profileAPI.getProfile(userId);
            dispatch(setUserProfile(data));
}

export const getProfileStatus = (userId) => async(dispatch) => {
    let data = await profileAPI.getStatus(userId);   
            dispatch(setStatusProfile(data));
}

export const updateProfileStatus = (status) => async (dispatch) => {
    let data = await  profileAPI.updateStatus(status);
            if(data.resultCode === 0) {
            dispatch(updateStatusProfile(status));
  }
}


export default profileReduser; 