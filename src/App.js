import { useEffect } from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { login, logout, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import { auth } from './components/Firebase';
import { useDispatch } from 'react-redux';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.profilePic,
        }))
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [])
  

  return (
    <div className="app">
      <Header/>

      {!user ? <Login/> : (
        <div className="app-body">
        <Sidebar />
        <Feed/>
        <Widgets/>
      </div>
      )}
    </div>
  );
}

export default App;
