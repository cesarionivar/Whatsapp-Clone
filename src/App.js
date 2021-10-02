import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import { useStateValue } from './context/StateProvider';

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <Router>
            <Sidebar />
            <Switch>
              <Route path='/rooms/:roomId'>
                <Chat />
              </Route>
              <Route path='/'>{/* <Chat /> */}</Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
