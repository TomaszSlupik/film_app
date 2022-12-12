import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import './Registeruser.scss'
import axiosFresh from 'axios';
import {useNavigate} from 'react-router-dom';
import myKey from '../../user';
import Alert from '@mui/material/Alert';



export default function Registeruser() {

    const navigate = useNavigate();

    const [values, setValues] = React.useState({
        email: '',
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        first_input: '',
        value: ''
      });


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        
      };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
   };
    
const handleMouseDownPassword = (event) => {
        event.preventDefault();
};



const submit = async (e) => {
    e.preventDefault()
    try {
      const res = await axiosFresh.post(myKey, {
        email:  values.first_input, 
        password: values.password,
        returnSecureToken: true
      })
      console.log('Zalogowany')
      console.log(res)
      navigate('/mainpage')
    }
    catch {
      console.log('Nie możesz zalogować się')
      const errorAlert = document.querySelectorAll('.errorAlert')
      errorAlert.forEach ((el) => {
          el.style.display = 'flex'
      })
    }
    
}

const style = {
  btn: {
    backgroundColor: '#3b2774',
  },
  error: {
    display: 'none', marginTop: '1em', flexDirection: 'column'
  }
}

  return (
    <div>
        <div className='register'>
        <div className="register__header">
        Rejestracja użytkownika
        </div>
        <TextField
        id="input-with-icon-textfield"
        label="Podaj e-mail"
        onChange={handleChange('first_input')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />


        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
       
        <Button 
        onClick={submit}
        variant="contained"
        style={style.btn}>Zarejestruj się</Button>
        <div className="register__alert">
            <Alert 
            className='errorAlert'
            severity="error"
            style={style.error}
            >Podaj poprawny e-mail</Alert>
            
            <Alert 
            className='errorAlert'
            severity="error"
            style={style.error}
            >Hasło musi zawierać min. 6 znaków</Alert>

        </div>
       
        </div>
    </div>
  )
}
