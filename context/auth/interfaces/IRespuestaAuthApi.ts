export interface IRespuestaApiAuth {
    hasError: boolean;
    message?: string;
}

export interface IAuth {
    ID: string;
    Email: string;
    FullName: string;
    Password: string;
    Web: string;
    Roles?: string;
    IsActive?: boolean;
    token?: string;
    user?: IClientes
}

export interface IClientes {
    ID: string;
    Nombre: string;
    Apellido1: string;
    Apellido2: string;
    DNI: string;
    Direccion: string;
    Provincia: string;
    CP: string;
    Fecha_nacimiento: string;
}

export interface IRespuestaLogin2 {
    token: string;
    Email: string;
    Password: string;
}

export interface IUserApi {
    Email: string;
    Password: string;
    FullName: string;
    IsActive?: boolean;
    Roles: string[]
}
export interface IRespuestaLogin {
    token: string;
    user: IUserApi;
}