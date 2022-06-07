import React,{useEffect}from "react";

import "./App.css";
import LoginScreen from "./Screens/LoginScreen";

import HomeScreen from "./Screens/HomeScreen";
import{Routes,Route} from "react-router-dom";
import { auth } from "./firebase";
import{useDispatch, useSelector} from "react-redux"
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./Screens/ProfileScreen";

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=>{
 const unsubscribe=auth.onAuthStateChanged((userAuth)=>{

   if(userAuth){
  
   dispatch(
     login({
       uid:userAuth.uid,
       email:userAuth.email,
     //logged In
   })
   );
   }else{
      dispatch(logout());//logged out
   }
 });
 return unsubscribe;
  },[])
  return (
    <div className="App" >
      
  
        {!user ?(<LoginScreen/>):(
          <Routes>
            <Route  path="/login" element={<LoginScreen/>}></Route>
            <Route  path="/profile" element={<ProfileScreen/>}></Route>
            <Route  path="/" element={<HomeScreen/>}>
            
            </Route>
          </Routes>
        )}
      
    
    </div>
  );
}

export default App;
