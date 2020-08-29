"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.followAPI = exports.securityAPI = exports.authAPI = exports.profileAPI = exports.usersAPI = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var instance = _axios["default"].create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "007e2c26-de46-4d39-95cc-d77ad4be9457"
  }
});

var usersAPI = {
  getUsers: function getUsers() {
    var currentPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    return instance.get("users?page=".concat(currentPage, "&count=").concat(pageSize)).then(function (response) {
      return response.data;
    });
  }
};
exports.usersAPI = usersAPI;
var profileAPI = {
  getProfile: function getProfile(userId) {
    return instance.get("profile/".concat(userId)).then(function (response) {
      return response.data;
    });
  },
  getStatus: function getStatus(userId) {
    return instance.get("profile/status/".concat(userId)).then(function (response) {
      return response.data;
    });
  },
  updateStatus: function updateStatus(status) {
    return instance.put("profile/status", {
      status: status
    }).then(function (response) {
      return response.data;
    });
  },
  savePhoto: function savePhoto(photoFile) {
    var formData = new FormData();
    formData.append('image', photoFile);
    return instance.put("profile/photo", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  saveProfile: function saveProfile(profile) {
    return instance.put("profile", profile);
  }
};
exports.profileAPI = profileAPI;
var authAPI = {
  getAuth: function getAuth(endPoint) {
    return instance.get("auth/".concat(endPoint)).then(function (response) {
      return response.data;
    });
  },
  login: function login(email, password) {
    var rememberMe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var captcha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    return instance.post("auth/login", {
      email: email,
      password: password,
      rememberMe: rememberMe,
      captcha: captcha
    }).then(function (response) {
      return response.data;
    });
  },
  logout: function logout() {
    return instance["delete"]("auth/login").then(function (response) {
      return response.data;
    });
  }
};
exports.authAPI = authAPI;
var securityAPI = {
  getCaptcha: function getCaptcha() {
    return instance.get("security/get-captcha-url");
  }
};
exports.securityAPI = securityAPI;
var followAPI = {
  getFollow: function getFollow(userId) {
    return instance["delete"]("follow/".concat(userId)).then(function (response) {
      return response.data;
    });
  },
  getUnFollow: function getUnFollow(userId) {
    return instance.post("follow/".concat(userId), {}).then(function (response) {
      return response.data;
    });
  }
};
exports.followAPI = followAPI;