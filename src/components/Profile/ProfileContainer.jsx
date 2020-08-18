import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getProfile, getProfileStatus, updateProfileStatus, savePhoto, saveProfile} from '../../redux/profile-reduser'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../Dialogs/hoc/withAuthRedirect';
import { compose } from 'redux';

 
class ProfileContainer extends React.Component {

   refreshProfile() {
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
   componentDidMount () {
      this.refreshProfile()
   } 

   componentDidUpdate(prevProps, prevState, snapshot){
      if(this.props.match.params.userId !== prevProps.match.params.userId){
         this.refreshProfile()
      }
   }
   
render(){ 
   return <Profile { ...this.props} 
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile} 
        isAuth={this.props.isAuth}
        status={this.props.status}
        updateProfileStatus={this.props.updateProfileStatus}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
        />}
}


let mapStateToProps = (state) => {return {
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   authtorized: state.auth.userId,
   isAuth: state.auth.isAuth,

} }





export default compose(
   connect(mapStateToProps, { getProfile, getProfileStatus, updateProfileStatus, savePhoto, saveProfile }),
   withRouter,
   withAuthRedirect
)(ProfileContainer);