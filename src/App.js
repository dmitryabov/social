import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settincs from './components/Settincs/Settincs';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContIainer';
import UsersContainer from './components/Users/UsersContainer';


function App(props) {

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
      </div>
    </div>
    
  );
}

export default App;
