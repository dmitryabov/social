import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settincs from './components/Settincs/Settincs';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route} from 'react-router-dom';


function App(props) {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => 
           <Profile 
             state={props.state.profilePage} 
             addPost={props.addPost}
             updateNewPostText={props.updateNewPostText}
             />}
              />
        <Route path='/dialogs' render={() => 
          <Dialogs 
            state={props.state.messagePage}
            addMessage={props.addMessage}
            updateNewMessageText={props.updateNewMessageText}
            newMessageText={props.state.messagePage.newMessageText} 
            />}/>
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settincs' component={Settincs}/>
      </div>
    </div>
    
  );
}

export default App;
