import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settincs from './components/Settincs/Settincs';
import { Route, withRouter} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from '../src/redux/app-reduser';
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import { witchSuspense } from './hoc/witchSuspense';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContIainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


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
        <Route path='/profile/:userId?' render={witchSuspense( ProfileContainer)}/>
        <Route path='/dialogs' render={witchSuspense( DialogsContainer)}/>
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

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
) (App);


const MainApp = (props) => {
 return <BrowserRouter>
  <Provider store={store}>
    <AppContainer />
   </Provider>
</BrowserRouter>
};

export default MainApp;