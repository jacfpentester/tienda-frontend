import { FC, useEffect, useReducer } from 'react';
import { AuthContext, authReducer } from './';
import Cookies from 'js-cookie';
import axios from 'axios';
import { IRespuestaApiAuth } from './interfaces/IRespuestaAuthApi';
import api from '@/api/api';
import { IAuth } from '@/interfaces/auth/IAuth';
import { IUser } from '@/interfaces/users/IUser';
import { IClientes } from '@/interfaces/clientes';


export interface AuthState {
    isLoggedIn: boolean;
    cliente?: IAuth;
}
const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    cliente: undefined
}

interface Props {
    children: any
}

export const AuthProvider: FC<({ children: any })> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
    useEffect(() => {
        checkToken()
    }, []);
    const checkToken = async () => {
    }
    const loginUser = async (Email: string, Password: string): Promise<boolean> => {
        try {
            const { data } = await api.post('/auth/login', { Email, Password });
            console.log(data);
            const { token, cliente } = data;
            console.log(cliente);
            Cookies.set('token', token);
            // Cookies.set('FullName', cliente.FullName);
            dispatch({ type: '[Auth] - Login', payload: cliente });
            return true;
        } catch (error) { 
            return false;
        }
    }

    const registerUser = async (Email: string, Password: string): Promise<IRespuestaApiAuth> => {
        try {
            const { data } = await api.post('/auth/register', { Email, Password })
            const { token, cliente } = data;
            Cookies.set('token', token);
            Cookies.set('Rol', cliente.roles[0]);
            dispatch({ type: '[Auth] - Login', payload: cliente });
            return {
                hasError: false,
                message: 'Usuario creado con éxito'
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
            return {
                hasError: true,
                message: 'No se puede crear el usuario, intentaló de nuevo'
            }
        }
    }
    return (
        <AuthContext.Provider value={{
            ...state,
            loginUser,
            registerUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}