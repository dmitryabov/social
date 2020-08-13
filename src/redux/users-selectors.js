import { createSelector } from "reselect";

export const getUsersArr = (state) => {
    return state.usersPage.users
};

export const getUsersSuperSelector = createSelector(getUsersArr, (users) => {
   return users.filter(u => true);
});

export const gePageSize = (state) => {
    return state.usersPage.pageSize
};

export const getTotalUserCount = (state) => {
    return state.usersPage.totalUserCount
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
};

export const getfollowingInPropgress = (state) => {
    return state.usersPage.followingInPropgress
};