import React, { useState } from "react";
import './Login.css';
import demo1 from '../Assets/demo1.jpeg';
const Login = () => {

  const [data,setData] = useState({
    email:"",
    password:""
});
const {email,password} = data;

  const handleSubmit =( e )=> {
      e.preventDefault();
      if (data.password === "" || data.email === "") {
        alert('Password or Email Needed')
      } else {
        alert('Sucessfully logined')
        // API CALL
      }
      
    };
    
  const changeHandler = e => {
    setData({...data,[e.target.name]:[e.target.value]});
  }
  
    return (
      <div className='login'>
      <div className="login-section">
          <img className='login-img' src={demo1} alt="Business view - Reports" />
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="name@email.com"  value={email} onChange={changeHandler}/>
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password"  placeholder="password"  value={password} onChange={changeHandler}/>
            </div>
            <button type="submit" className="primary">Sign In</button>
          </form>
        </div>
        </div>
    )
  }
  
  export default Login