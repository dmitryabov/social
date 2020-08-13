import React from 'react';
import { connect } from 'react-redux';
import {follow, unfollow, setCurrentPage, setIsToggleFollowingProgress, getUsers} from '../../redux/users-reduser';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { gePageSize, getUsersArr, getTotalUserCount, getCurrentPage, getIsFetching, getfollowingInPropgress } from '../../redux/users-selectors';


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
     users: getUsersArr(state),
     pageSize: gePageSize(state),
     totalUserCount: getTotalUserCount(state),
     currentPage: getCurrentPage(state),
     isFetching: getIsFetching(state),
     followingInPropgress: getfollowingInPropgress(state),
  }
};


export default compose(
  connect(mapStateToProps, 
    {
      follow,
      unfollow,
      setCurrentPage,
      setIsToggleFollowingProgress,
      getUsers
  }),
  
)(UsersComponent)