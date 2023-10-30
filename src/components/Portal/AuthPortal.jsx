import React from 'react'
import "./authportal.css"
import { ReactDOM } from 'react-dom'

const AuthPortal = ({close})=> {
  return ReactDOM.createPortal(
    <div className='portal'>
        <h1 style={{color:"red"}}>Authentication</h1>
        <button onClick={close}>close</button>
    </div>, document.getElementById("portal")
  )
}

export default AuthPortal