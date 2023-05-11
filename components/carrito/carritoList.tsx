import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { ICarrito } from '../../interfaces/carrito/ICarrito';


interface Props {
    carrito: ICarrito[]
}
export const CarritoList:FC<Props> = ({ carrito }) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell align="left">ID del Carrito</TableCell>
                <TableCell align="right">Nombre del Cliente</TableCell>
                <TableCell align="right">Nombre del Producto</TableCell>
                <TableCell align="right">Fecha de Compra</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    carrito.map((carrito: ICarrito) => (
                        <TableRow key= { carrito.ID } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { carrito.ID }
                            </TableCell>
                            <TableCell align="right">{carrito.cliente?.Nombre}</TableCell>
                            <TableCell align="right">{carrito.productos?.Nombre}</TableCell>
                            <TableCell align="right">{carrito.Fecha_compra}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}