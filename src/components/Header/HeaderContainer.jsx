import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setAuthData} from '../../redux/auth-reduser';
import {authAPI} from '../../api/api.js';



class HeaderContainer extends React.Component {

  componentDidMount () {
   authAPI.getAuth(`me`).then(data => {
           if(data.resultCode === 0) {
              let {id, email, login} = data.data;
              this.props.setAuthData(id, email, login);
           }
    })
  }

  render () { 
    return <Header  { ...this.props}/>
  }

}


let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
   } 
}

export default connect(mapStateToProps, {setAuthData})(HeaderContainer);