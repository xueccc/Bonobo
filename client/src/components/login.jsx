import React from 'react';

function Login(props) {
  return (
    props.viewLogin
    ? (
      <div className="viewLogin">
        <h2>Welcome!</h2>
        <form>
          <div>
            <input type="text" className="user_name" placeholder="User Name"/>
          </div>
          <div>
            <input type="password" className="user_password" placeholder="Password"/>
          </div>
          <div>
            <input type="button" value="Sign In" className="viewLoginInput" onClick={props.handleLogin}/>
          </div>
        </form>
      </div>
    )
    : null
  )
}

export default Login;