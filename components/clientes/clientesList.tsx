import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { IClientes } from '../../interfaces/clientes/IClientes';


interface Props {
    clientes: IClientes[]
}
export const ClientesList: FC<Props> = ({ clientes }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="right">DNI</TableCell>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">Apellido1</TableCell>
                        <TableCell align="right">Apellido2</TableCell>
                        <TableCell align="right">Dirección</TableCell>
                        <TableCell align="right">Provincia</TableCell>
                        <TableCell align="right">Telefono</TableCell>
                        <TableCell align="right">Fecha de Nacimiento</TableCell>    
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        clientes.map((clientes: IClientes) => (
                            <TableRow key={clientes.ID}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {clientes.ID}
                                </TableCell>
                                <TableCell align="right">{clientes.DNI}</TableCell>
                                <TableCell align="right">{clientes.Nombre}</TableCell>
                                <TableCell align="right">{clientes.Apellido1}</TableCell>
                                <TableCell align="right">{clientes.Apellido2}</TableCell>
                                <TableCell align="right">{clientes.Direccion}</TableCell>
                                <TableCell align="right">{clientes.Provincia}</TableCell>
                                <TableCell align="right">{clientes.Telefono}</TableCell>
                                <TableCell align="right">{clientes.Fecha_nacimiento}</TableCell>  
                            </TableRow>
                        )
                    )}

                </TableBody>
            </Table>
        </TableContainer>
    )
}