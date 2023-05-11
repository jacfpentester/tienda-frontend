import { IProveedores } from '../../interfaces/proveedores/IProveedores';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';


interface Props {
    proveedores: IProveedores[]
}
export const ProveedoresList: FC<Props> = ({ proveedores }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">NIF</TableCell>
                        <TableCell align="right">Direccion</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        proveedores.map((proveedores: IProveedores) => (
                            <TableRow key={ proveedores.ID }
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    { proveedores.ID }
                                </TableCell>
                                {/* <TableCell align="right">{proveedores.cliente.Nombre}</TableCell> */}
                                <TableCell align="right">{proveedores.Nombre}</TableCell>
                                <TableCell align="right">{proveedores.NIF}</TableCell>
                                <TableCell align="right">{proveedores.Direccion}</TableCell>
                            </TableRow>
                        )
                        )}

                </TableBody>
            </Table>
        </TableContainer>
    )
}