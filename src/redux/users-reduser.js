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

export const follow = (userId) => {return {type: FOLLOW, userId}}
export const unfollow = (userId) => {return {type: UNFOLLOW, userId}}
export const setUsers = (users) => { return { type: SET_USERS, users}}
export const setCurrentPage = (currentPage) => { return { type: SET_CURRENT_PAGE, currentPage}}
export const setTotalUsersCount = (totalUserCount) => { return { type: SET_TOTAL_USERS_COUNT, totalUserCount}}
export const setIsToggleFetching = (isFetching) => { return { type: TOGGLE_IS_FETCHINT, isFetching}}
export const setIsToggleFollowingProgress = (followingInPropgress, userId) => { return { type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInPropgress, userId}}


export default usersReduser; 