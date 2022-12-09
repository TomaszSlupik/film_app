import React from 'react'
import Alert from '@mui/material/Alert';
import './Loginuser.scss'

export default function Loginuser() {

  const backAlert = () => {
    setTimeout(()=> {
      const loginuser = document.querySelector('.loginuser__success')
      loginuser.style.display = 'none'
    }, 2000)
  }


  return (
    <div>
      <div className="loginuser">
        <div className="loginuser__success">
          <Alert 
          onChange={backAlert()}
          severity="success">Zostałeś poprawnie zalogowany</Alert>
        </div> 
      </div>
    </div>
  )
}
