import React from 'react';
import { connect } from 'react-redux';
import {follow, unfollow, setUsers, setCurrentPage, 
        setTotalUsersCount, setIsToggleFetching, setIsToggleFollowingProgress} from '../../redux/users-reduser';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api.js';




class UsersComponent extends React.Component {
  
  componentDidMount () {
    this.props.setIsToggleFetching(true);
  
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.setIsToggleFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount / 100);
    })
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.setIsToggleFetching(true)
    usersAPI.getUsers(page, this.props.pageSize).then(data => {
        this.props.setIsToggleFetching(false)
        this.props.setUsers(data.items);
       
    })
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
               setIsToggleFollowingProgress={this.props.setIsToggleFollowingProgress}
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



export default connect(mapStateToProps, 
  {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsToggleFetching,
    setIsToggleFollowingProgress
})(UsersComponent)