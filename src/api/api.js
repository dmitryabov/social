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
   },
   getStatus (userId) {
    return instance.get(`profile/status/${userId}`).then(response => { return response.data})
   },
   updateStatus (status) {
    return instance.put(`profile/status`, { status: status}).then(response => { return response.data})
   },
   savePhoto(photoFile) {
     const formData = new FormData();
     formData.append('image', photoFile);

     return instance.put(`profile/photo`, formData, {
       headers: {
         'Content-Type': 'multipart/form-data'
       }
     })
   },
   saveProfile(profile) {
    return instance.put(`profile`, profile)
  }
}

export const authAPI = {
    getAuth (endPoint) {
      return instance.get(`auth/${endPoint}`).then( response => { return response.data})
    },
    login (email, password, rememberMe = false, captcha = null) {
      
      return instance.post(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha
      }).then( response => { return response.data})
    },
    logout () {
      return instance.delete(`auth/login`).then( response => { return response.data})
    }
}

export const securityAPI = {
  getCaptcha () {
    return instance.get(`security/get-captcha-url`);
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
