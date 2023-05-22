import { useContext, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import {  Email, ErrorOutline, ErrorSharp } from '@mui/icons-material';
import { Box, Grid, Typography, TextField, Button, Link, Chip } from '@mui/material';

import { AuthLayout} from '../../layouts/AuthLayout';
import { validations } from '../../utils';
import { AuthContext } from '../../context/auth/AuthContext';
import {api} from '../../api/';

interface IRespuestaRegister {
    token: string;
    Email: string;
    Password: string;
    FullName: string;
    IsActive: boolean;
    Roles: String[]
}
type UserData = {
    Email: string,
    Password: string,
    FullName: string
};
const RegisterPage = () => {
  const router = useRouter();
//hook
  const { registerUser } = useContext(AuthContext);
  
  const { register, handleSubmit, formState: { errors } } = useForm<UserData>();

  const [ showError, setShowError ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  //manejador del evento submit del formulario
  const onRegisterUser = async ( InputData: UserData ) => {
     
    setShowError(false);
    console.log ("Enviando Datos")
    const { Email, Password } = InputData;
    const {hasError, message } = await registerUser(Email, Password)
    console.log(message);
    if (hasError){
        setShowError(true);
        setErrorMessage(message || '');
        setTimeout( () => setShowError(false), 3000);
        return;
    }

    router.replace('/');
    // router.push('/');
   
  }

  return (
    <AuthLayout title={'Ingresar'}>
       <form onSubmit={ handleSubmit(onRegisterUser)} noValidate>
        <Box sx={{ width: 350, padding: '10px 20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h3' component='h1'>Crear Cuenta</Typography>
                    <Chip 
                                label="No se reconoce usuario/contraseña"
                                color="error"
                                icon= {<ErrorOutline />}
                                className="fadeIn"
                                sx={{ display: showError ? 'flex': 'none'}}
                            />
                </Grid>
                
                
                <Grid item xs={12}>
                    <TextField 
                        { ...register('Email', {
                            required: 'Email obligatorio',
                            validate: validations.isEmail
                        })}
                        error= { !!errors.Email}
                        helperText = { errors.Email?.message }
                        label="Correo" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        { ...register('Password', {
                            required: 'Password requerido',
                            minLength: { value:8, message: 'Minimo 8 caracteres'}
                        })}
                        error= { !!errors.Password}
                        helperText = { errors.Password?.message }
                        label="Contraseña" type="password" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        type="submit" color='secondary' className='circular-btn' size='large' fullWidth>
                        Ingresar
                    </Button>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='end'>
                    <Link href='/auth/register' passHref component={NextLink} underline='always'>
                        ¿ No tienes cuenta ... ?
                    </Link>
                </Grid>
            </Grid>
        </Box>
      </form>
    </AuthLayout>
  )
}

export default RegisterPage