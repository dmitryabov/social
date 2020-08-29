import {authAPI, securityAPI} from '../api/api'
import { stopSubmit } from 'redux-form';


const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReduser = (state = initialState, action) => {
    
    switch (action.type){  
        case SET_USER_DATA:
        case GET_CAPTCHA_URL:
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

export const getCaptchaUrl = (captchaUrl) => {return {
    type: GET_CAPTCHA_URL, data:{captchaUrl}}}


export const auth = () => async(dispatch) => {
    let data = await authAPI.getAuth(`me`);
            if(data.resultCode === 0) {
               let {id, email, login} = data.data;
               dispatch(setAuthData(id, email, login, true));
            } 
  }



export const login = (email, password, rememberMe, captcha) => 
    
    async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe, captcha);
            if(data.resultCode === 0) {             
               dispatch(auth());
            } else {
                if (data.resultCode === 10) {
                    dispatch(getCapchaUrl());
                }
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

export const getCapchaUrl = () =>  async (dispatch) => {
    const data = await securityAPI.getCaptcha();
    const captchaUrl = data.data.url;
    dispatch(getCaptchaUrl(captchaUrl));
}


export default authReduser; 