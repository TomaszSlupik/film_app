import React, {useState} from 'react'
import './Loginuser.scss'
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import axiosFresh from 'axios';
import myKeytoLogin from '../../userlogin'
import TextField from '@mui/material/TextField';

export default function Loginuser() {

  const navigate = useNavigate();

  const [valueslogin, setValuesLogin] = React.useState({
    email: '',
    firstinputlogin: '',
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [auth, setAuth] = useState('')

const tokenSave = (e) => {
    setAuth(window.localStorage.setItem(e, JSON.stringify(e)))
}

  const [error, setError] = useState('')

  const handleChangetoLogin = (prop) => (event) => {
    setValuesLogin({ ...valueslogin, [prop]: event.target.valueslogin });
    console.log(valueslogin)
  };

  const handleClickShowPasswordtoLogin = () => {
    setValuesLogin({
      ...valueslogin,
      showPassword: !valueslogin.showPassword,
    });
  };

  const handleMouseDownPasswordtoLogin = (event) => {
    event.preventDefault();
  };


  const loginUser = async(e) => {
    e.preventDefault()
    try{
      const res = await axiosFresh.post(myKeytoLogin, {
        email: valueslogin.firstinputlogin,
        password: valueslogin.password,
        returnSecureToken: true
      })
      console.log(res)
      tokenSave()
      navigate('/mainpage')
    }
    catch (ex) {
      console.log('Nie możesz zalogować się')
      setError(ex.response.data.error.message)
      console.log(ex.response)
    }
  }

  const style = {
    btn: {backgroundColor: '#3b2774'}
  }


  return (
    <div>
        <div className="loginwithpassword">
              <div className="loginwithpassword__box">
                  <div className="loginwithpassword__box-text">
                    Logowanie użytkownika
                  </div>

                  <div className="loginwithpassword__box-email">
                  <TextField
                      id="input-with-icon-textfield"
                      label="Podaj swój e-mail"
                      onChange={handleChangetoLogin('firstinputlogin')}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                  </div>

                  <div className="loginwithpassword__box-password">
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={valueslogin.showPassword ? 'text' : 'password'}
                          value={valueslogin.password}
                          onChange={handleChangetoLogin('password')}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPasswordtoLogin}
                                onMouseDown={handleMouseDownPasswordtoLogin}
                                edge="end"
                              >
                                {valueslogin.showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </FormControl>
                  </div>

                  <div className="loginwithpassword__box-btn">
                        <Button 
                      onClick={loginUser}
                      variant="contained"
                      style={style.btn}>Zaloguj się</Button>
                    
                  </div>
                  </div>
        </div>
    </div>
  )
}
