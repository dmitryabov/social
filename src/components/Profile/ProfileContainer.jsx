import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getProfile} from '../../redux/profile-reduser'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../Dialogs/hoc/withAuthRedirect';

 
class ProfileContainer extends React.Component {

   componentDidMount () {
      
      let userId = this.props.match.params.userId;
      this.props.getProfile(userId)
   }

   
   
render(){
   
   return <Profile { ...this.props} profile={this.props.profile} isAuth={this.props.isAuth}/>}
}


let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


let mapStateToProps = (state) => {return {
   profile: state.profilePage.profile,
} }

let WithDataComponentContainer = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getProfile })(WithDataComponentContainer);