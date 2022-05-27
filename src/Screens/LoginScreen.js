import React,{useState} from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen(){
    const [signIn,setSignIn]=useState(false);
    

    return(
        <div className="loginScreen">
            <div className="loginScreen-background">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo"className="loginScreen-logo"></img>
                <button onClick={()=>setSignIn(true)}className="loginScreen-btn">Sign In</button>
                <div className="loginScreen-gradient"></div>
                <div className="loginScreen-body">
                    {signIn?(
                        <SignUpScreen/>
                    ):(
                        <>
                        <h1>
                            Unlimited Films,Tv Program and More.
                        </h1>
                        <h2>Watch Anywhere, Cancel Anytime</h2>
                        <h3>Ready To watch ? Enter your email to create or Restart your membership </h3>
                        <div className="loginScreen-input">
                            <form>
                                <input type="email" placeholder="Email Address"></input>
                                <button onClick={()=>setSignIn(true)} className="loginscreen-getstartedBtn">GET STARTED</button>
                            </form>
                        </div>
                        </>
                    )}
                   
                </div>

            </div>

        </div>
    )
}

export default LoginScreen;