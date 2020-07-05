import React from 'react';
import { connect } from 'react-redux';
import {follow, unfollow, setCurrentPage, setIsToggleFollowingProgress, getUsers} from '../../redux/users-reduser';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../Dialogs/hoc/withAuthRedirect';


class UsersComponent extends React.Component {
  
  componentDidMount () {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)

  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.getUsers(page, this.props.pageSize)
  } 


  render() {

    return <>
           {this.props.isFetching ? <Preloader /> : null} 
           <Users 
               onPageChanged={this.onPageChanged}
               totalUserCount={this.props.totalUserCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               followingInPropgress={this.props.followingInPropgress}
             />
            </>
  }

}

const mapStateToProps = (state) => {
  return {
     users: state.usersPage.users,
     pageSize: state.usersPage.pageSize,
     totalUserCount: state.usersPage.totalUserCount,
     currentPage: state.usersPage.currentPage, 
     isFetching: state.usersPage.isFetching,
     followingInPropgress: state.usersPage.followingInPropgress
  }
};


const withRedirect = withAuthRedirect(UsersComponent)



export default connect(mapStateToProps, 
  {
    follow,
    unfollow,
    setCurrentPage,
    setIsToggleFollowingProgress,
    getUsers
})(withRedirect)