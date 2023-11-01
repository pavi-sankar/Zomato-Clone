import React from 'react'
import "./authportal.css"

const AuthPortal = ({close})=> {
  return (
    <div className='portal'>
      <form className='form'>
        <h1 style={{color:"red"}}>login</h1>
        <input type='email' placeholder='Enter Email'></input>
        <input type='password' placeholder='password'></input>
        <button className='login-submit' onClick={close}>Login</button>
      </form>
    </div>
  )
}

export default AuthPortal