import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settincs from './components/Settincs/Settincs';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, withRouter} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContIainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from '../src/redux/app-reduser';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';


class App extends Component {
  componentDidMount () {
    this.props.initializeApp();
   }
render() {
  if(!this.props.initialized) {
    return <Preloader />
  }
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
        <Route path='/dialogs' render={() =>  <DialogsContainer />}/>
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settincs' component={Settincs}/>
        <Route path='/users' render={() => <UsersContainer />}/>
        <Route path='/login' render={() => <Login />}/>
      </div>
    </div>   
  );
 }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })

) (App);
