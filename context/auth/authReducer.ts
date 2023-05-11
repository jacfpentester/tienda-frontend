

import { AuthState } from "./";
import { IAuth } from "./interfaces/IRespuestaAuthApi";

type AuthActionType =
| { type: '[Auth] - Login', payload: IAuth }
| { type: '[Auth] - Logout' }


export const authReducer = ( state: AuthState, action: AuthActionType ): AuthState => {
    switch (action.type){

        case '[Auth] - Login':
            return {
                ...state,
                isLoggedIn: true,
            }
        case '[Auth] - Logout':
            return{
                ...state,
                isLoggedIn: false,
                cliente: undefined
            }
        default:
            return state
    }
}