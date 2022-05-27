import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Components/NavBar/NavBar';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import "./ProfileScreen.css";
import PlansScreen from "./PlansScreen";

function ProfileScreen() {
  const user=useSelector(selectUser);
  return (
    
    <div className="profileScreen">
        <Navbar/>
        <div className="profileScreen-body">
          <h1>Edit Profile</h1>
        
        <div className="profileScreen-info">
          <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar-logo"></img>
          <div className='profileScreen-details'>
            <h2>{user.email}</h2>
            <div className='profileScreen-plans'>
              <h3>Plans</h3>
              <PlansScreen/>
              <button onClick={()=>auth.signOut()}className='profileScreen-signoutBtn'>Sign Out</button>
            </div></div>

          </div>
        </div>

    </div>
  )
}

export default ProfileScreen;