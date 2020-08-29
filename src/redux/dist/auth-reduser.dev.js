"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getCapchaUrl = exports.logout = exports.login = exports.auth = exports.getCaptchaUrl = exports.setAuthData = void 0;

var _api = require("../api/api");

var _reduxForm = require("redux-form");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_USER_DATA = 'SET_USER_DATA';
var GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';
var initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

var authReduser = function authReduser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL:
      return _objectSpread({}, state, {}, action.data);

    default:
      return state;
  }
};

var setAuthData = function setAuthData(userId, email, login, isAuth) {
  return {
    type: SET_USER_DATA,
    data: {
      userId: userId,
      email: email,
      login: login,
      isAuth: isAuth
    }
  };
};

exports.setAuthData = setAuthData;

var getCaptchaUrl = function getCaptchaUrl(captchaUrl) {
  return {
    type: GET_CAPTCHA_URL,
    data: {
      captchaUrl: captchaUrl
    }
  };
};

exports.getCaptchaUrl = getCaptchaUrl;

var auth = function auth() {
  return function _callee(dispatch) {
    var data, _data$data, id, email, _login;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_api.authAPI.getAuth("me"));

          case 2:
            data = _context.sent;

            if (data.resultCode === 0) {
              _data$data = data.data, id = _data$data.id, email = _data$data.email, _login = _data$data.login;
              dispatch(setAuthData(id, email, _login, true));
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.auth = auth;

var login = function login(email, password, rememberMe, captcha) {
  return function _callee2(dispatch) {
    var data, action;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(_api.authAPI.login(email, password, rememberMe, captcha));

          case 2:
            data = _context2.sent;

            if (data.resultCode === 0) {
              dispatch(auth());
            } else {
              if (data.resultCode === 10) {
                dispatch(getCapchaUrl());
              }

              action = (0, _reduxForm.stopSubmit)('login', {
                email: 'email is wrong'
              });
              dispatch(action);
            }

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.login = login;

var logout = function logout() {
  return function _callee3(dispatch) {
    var data;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(_api.authAPI.logout());

          case 2:
            data = _context3.sent;

            if (data.resultCode === 0) {
              dispatch(setAuthData(null, null, null, false));
            }

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};

exports.logout = logout;

var getCapchaUrl = function getCapchaUrl() {
  return function _callee4(dispatch) {
    var data, captchaUrl;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(_api.securityAPI.getCaptcha());

          case 2:
            data = _context4.sent;
            captchaUrl = data.data.url;
            dispatch(getCaptchaUrl(captchaUrl));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    });
  };
};

exports.getCapchaUrl = getCapchaUrl;
var _default = authReduser;
exports["default"] = _default;