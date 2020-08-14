import {authAPI} from '../api/api'
import { stopSubmit } from 'redux-form';


const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReduser = (state = initialState, action) => {
    
    switch (action.type){  
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                      
            }

        default: 
          return state;
    }
}

export const setAuthData = (userId, email, login, isAuth) => {return {
    type: SET_USER_DATA, data:{userId, email, login, isAuth}}}


export const auth = () => async(dispatch) => {
    let data = await authAPI.getAuth(`me`);
            if(data.resultCode === 0) {
               let {id, email, login} = data.data;
               dispatch(setAuthData(id, email, login, true));
            } 
  }



export const login = (email, password, rememberMe) => 
    
    async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe);
            if(data.resultCode === 0) {             
               dispatch(auth());
            } else {
                let action = stopSubmit('login', {email: 'email is wrong'});
                dispatch(action);
            }
  }



export const logout = () =>  async (dispatch) => {
       let data = await authAPI.logout();
            if(data.resultCode === 0) {             
                dispatch(setAuthData(null, null, null, false));
            } 
}


export default authReduser; 