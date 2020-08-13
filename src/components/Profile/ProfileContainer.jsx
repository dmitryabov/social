import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getProfile, getProfileStatus, updateProfileStatus} from '../../redux/profile-reduser'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../Dialogs/hoc/withAuthRedirect';
import { compose } from 'redux';

 
class ProfileContainer extends React.Component {
   componentDidMount () {
      
      let userId = this.props.match.params.userId;
      if(!userId) {
         userId = this.props.authtorized;
         if (!userId) {
            this.props.history.push('/login');
         }
      }
      this.props.getProfile(userId);
      this.props.getProfileStatus(userId);
   } 
   
render(){ 
   return <Profile { ...this.props} 
        profile={this.props.profile} 
        isAuth={this.props.isAuth}
        status={this.props.status}
        updateProfileStatus={this.props.updateProfileStatus}
        />}
}


let mapStateToProps = (state) => {return {
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   authtorized: state.auth.userId,
   isAuth: state.auth.isAuth,

} }





export default compose(
   connect(mapStateToProps, { getProfile, getProfileStatus, updateProfileStatus }),
   withRouter,
   withAuthRedirect
)(ProfileContainer);