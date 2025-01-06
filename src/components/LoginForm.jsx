import React, { useState } from 'react'
import './styles/loginStyle.css'


function LoginForm({onLogin}) {
    const [action, setAction] = useState("Login")
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault(); // stops page refresh
        if (action ==="Login"){
            onLogin({username, password});
        }
    }

  return (
    <div className='container'>
       <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
       </div>
       <div className="inputs"> 
        {/* If login Username and Password */}
        {/* If register Email, Password... */}
        {/* {action === "Login" ?<div></div>:} */}
             {/* Username input field */}
            <div className="input">
                {/* <img src={user_icon} alt="" /> */}
                <input type="text" placeholder='Username'/>
            </div>
            {/* Password input field */}
            <div className="input">
                {/* <img src={password_icon} alt="Password Logo" /> */}
                <input type="password" placeholder='Password'/>
            </div>
       </div>
       <div className="forgot-password">Lost Password? <span>Click Here!</span> </div>

        <div className='submit-container'>
            <div className={action==="Register"?"submit gray": "submit"} onClick ={() => {setAction("Register")}} >Register</div>
            <div className={action==="Login" ?"submit gray": "submit"} onClick = {() => {setAction("Login")}}>Login</div>
       
        </div>
    </div>
  );
};
export default LoginForm
