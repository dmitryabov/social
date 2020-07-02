import Axios from 'axios';


const instance = Axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "007e2c26-de46-4d39-95cc-d77ad4be9457"}
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then( response => {return response.data})
     }
}

export const profileAPI = {
    getProfile (userId){
       return instance.get(`profile/${userId}`).then(response => { return response.data})
  }
}

export const authAPI = {
    getAuth (endPoint) {
      return instance.get(`auth/${endPoint}`).then( response => { return response.data})
    }
}

export const followAPI = {
    getFollow (userId) {
      return instance.delete(`follow/${userId}`).then( response => { return response.data})
    },
    getUnFollow (userId) {
        return instance.post(`follow/${userId}`, {}).then( response => { return response.data})
      }
}
