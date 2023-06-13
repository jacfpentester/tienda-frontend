export interface IAuth {
    ID:        string;
    Email:     string;
    Web:       string;
    IsActive?: boolean;
    token?:    string;
    Roles?:    string;
    FullName:  string;
    clienteID: string;
    // cliente:   IClientes
}

// export interface IClientes{
//     ID: string;
//     DNI: string;
//     Nombre: string;
//     Apellido1: string;
//     Apellido2: string;
//     Direccion: string;
//     Fecha_nacimiento: string;
// }
