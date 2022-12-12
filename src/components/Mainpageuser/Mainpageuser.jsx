import React from 'react'
import Alert from '@mui/material/Alert';
import './Mainpageuser.scss'

export default function Mainpageuser() {

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
