import React from 'react'
import "./authportal.css"

const AuthPortal = ({close,formTitle })=> {
  return (
    <div className='portal'>
      <form className='form'>
        <h1>{formTitle} </h1>
        <input type='email' placeholder='Enter Email'></input>
        <input type='password' placeholder='password'></input>
        {formTitle=="sign up" ? ( <input type='password' placeholder='confirm password'></input> ) : null }
        <button className='login-submit' onClick={close}>{formTitle}</button>
      </form>
    </div>
  )
}

export default AuthPortal