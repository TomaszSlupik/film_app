import React from 'react'
import './Main.scss'
import 'animate.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



export default function Main() {


  const style = {
    btn: {
      backgroundColor: '#3b2774', marginTop: '0.5em', width: '160px'
    }
  }


  return (
    <div className='main'>
        <div className="main__header animate__animated animate__zoomInDown">
              Aplikacja z filmami i wystawione recenzje. 
        </div>

      <div className="main__box">
          <div className="main__box-first">
            <div className="main__box-first--img animate__animated animate__fadeInLeft animate__delay-1s"></div>
            <div className="main__box-first--text animate__animated animate__fadeInRight animate__delay-2s">
              W celu obejrzenie recenzji filmów, prośba o rejestrację lub zalogowanie się. 
            </div>
          </div>
      </div>
       <div className="main__button">
          <Link to="/register">
          <Button className='animate__animated animate__fadeInRight animate__delay-2s'  variant="contained" style={style.btn}>Zarejestruj się</Button>
          </Link>

          <Link to="/login">
          <Button className='animate__animated animate__fadeInRight animate__delay-2s'  variant="contained" style={style.btn}>Logowanie</Button>
          </Link>
       </div>
    </div>
  )
}
