import {authAPI} from '../api/api'


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
                isAuth: true
               
            }

        

        default: 
          return state;
    }
}

export const setAuthData = (userId, email, login) => {return {type: SET_USER_DATA, data:{userId, email, login}}}



export const auth = () => { 
    return (dispatch) => {
        authAPI.getAuth(`me`).then(data => {
            if(data.resultCode === 0) {
               let {id, email, login} = data.data;
               dispatch(setAuthData(id, email, login));
            }
     })
  }
}

export default authReduser; 