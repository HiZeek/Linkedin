import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/Login.css';
import { auth } from './Firebase';
import { login } from '../features/userSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState(''); 
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
    };

    const register = () => {
        if (!name) {
            return alert('Please enter a full name');
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                }));
            }); 
        })
        .catch((error) => alert(error));
    };

  return (
    <div className='login'>
        <img src="https://content.linkedin.com/content/dam/brand/site/img/logo/logo-tm.png"
        alt="" />
        <form>
            <input type="text" placeholder='Full name (required if registering)' value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder='Profile pic URL (optional)' value={profilePic} onChange={e => setProfilePic(e.target.value)} />
            <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>
        <p>Not a member?{' '}
            <span className='login-register' onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login;