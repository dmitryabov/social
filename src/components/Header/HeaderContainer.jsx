import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reduser';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';



class HeaderContainer extends React.Component {

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

export default compose(
  withRouter,
  connect(mapStateToProps, { logout }))(HeaderContainer);