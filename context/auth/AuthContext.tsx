import { IClientes } from '@/interfaces/clientes/IClientes';
import { createContext } from 'react';
import { IAuth, IRespuestaApiAuth } from './interfaces/IRespuestaAuthApi';

interface ContextProps {
    isLoggedIn: boolean;
    user?: IAuth;
    
    //firmas
    loginUser: (Email: string, Password: string) => Promise<boolean>;
    registerUser: (Email: string, Password: string ) => Promise<IRespuestaApiAuth>
}

export const AuthContext  = createContext( {} as ContextProps );
