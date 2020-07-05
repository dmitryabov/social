import {usersAPI, followAPI} from '../api/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHINT = 'TOGGLE_IS_FETCHINT';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInPropgress: []
}

const usersReduser = (state = initialState, action) => {
    
    switch (action.type){  
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                  if (user.id === action.userId) {
                      return {...user, followed: true}
                  } return user;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {...user, followed: false,} 
                    } return user
                })
            }
        
        case SET_USERS: {
            return { ...state, users: action.users}
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUserCount: action.totalUserCount}
        }
        case TOGGLE_IS_FETCHINT: {
            return { ...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return { ...state, 
                followingInPropgress: action.followingInPropgress ? 
                  [ ...state.followingInPropgress, action.userId] 
                : state.followingInPropgress.filter( id => id !== action.userId)}
        }

        default: 
          return state;
    }
}

export const followSuccess = (userId) => {return {type: FOLLOW, userId}}
export const unfollowSuccess = (userId) => {return {type: UNFOLLOW, userId}}
export const setUsers = (users) => { return { type: SET_USERS, users}}
export const setCurrentPage = (currentPage) => { return { type: SET_CURRENT_PAGE, currentPage}}
export const setTotalUsersCount = (totalUserCount) => { return { type: SET_TOTAL_USERS_COUNT, totalUserCount}}
export const setIsToggleFetching = (isFetching) => { return { type: TOGGLE_IS_FETCHINT, isFetching}}
export const setIsToggleFollowingProgress = (followingInPropgress, userId) => { return { type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInPropgress, userId}}


export const getUsers = (currentPage, pageSize) => { 
    return (dispatch) => {
    dispatch(setIsToggleFetching(true));
  
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setIsToggleFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount / 100));
    })
  }
}

export const follow = (userId) => { 
    return (dispatch) => {
        dispatch(setIsToggleFollowingProgress(true, userId));
        followAPI.getUnFollow(userId).then(data => {
              if(data.resultCode === 0) {
                  dispatch(followSuccess(userId))
                }
                dispatch(setIsToggleFollowingProgress(false, userId))
        })
  }
}


export const unfollow = (userId) => { 
    return (dispatch) => {
        dispatch(setIsToggleFollowingProgress(true, userId));
             followAPI.getFollow(userId).then(data => {
                if(data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                    }
                    dispatch(setIsToggleFollowingProgress(false, userId))
           })
  }
}

export default usersReduser; 