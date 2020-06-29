import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settincs from './components/Settincs/Settincs';
import Profile from './components/Profile/Profile';
import { Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContIainer';
import UsersContainer from './components/Users/UsersContainer';


function App(props) {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <Profile />}/>
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
