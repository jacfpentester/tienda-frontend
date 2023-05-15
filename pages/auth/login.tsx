import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { ErrorOutline } from '@mui/icons-material';
import { Box, Grid, Typography, TextField, Button, Link, Chip } from '@mui/material';
import { AuthContext } from '../../context';
import { AuthLayout } from '../../layouts';
import { validations } from '../../utils';
interface IRespuestaLogin {
    token: string;
    Email: string;
    Password: string;
}
type FormData = {
    Email: string,
    Password: string,
};
const LoginPage = () => { 
    const router = useRouter();
    const { loginUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [ showError, setShowError ] = useState(false);

    const onLoginUser = async ({Email, Password}: FormData ) => {
        setShowError(false);
        const isValidLogin = await loginUser(Email, Password);

        if (!isValidLogin){
            setShowError(true);
            setTimeout( () => setShowError(false), 3000);
            return;
        }
        //navegar a pantalla en la que estaba el usuario
        // router.push('/');
        router.replace('/productos');
    } 
    return (
        <AuthLayout title={'Ingresar'}>
            <form onSubmit={ handleSubmit(onLoginUser) } noValidate>
                <Box sx={{ width: 350, padding: '10px 20px'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h3' component='h3'>Iniciar Sesión</Typography>
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
                                    required: 'email es obligatorio',
                                    validate: (val) => validations.isEmail(val)
                                    // validate: validations.isEmail
                                })}
                                error={!!errors.Email}
                                helperText={errors.Email?.message}
                                type="email" label="Correo" variant='filled' fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                { ...register('Password', {
                                    required:'Password es requerido',
                                    minLength: { value: 8, message: 'Minimo 8 caracteres'}
                                })}
                                error={!!errors.Password}
                                helperText={errors.Password?.message}
                                label="Contraseña" type="password" variant='filled' fullWidth />
                            <TextField
                                 sx={{ display: showError ? 'flex': 'none'}}
                                //  value =  {...register('token') }
                            />
                                    
                         
                        </Grid>
                        <Grid item xs={12}>
                            <Button 
                                type='submit'
                                color='secondary' className='circular-btn' size='large' fullWidth>
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

export default LoginPage