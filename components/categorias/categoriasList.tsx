import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { ICategorias } from '../../interfaces/categorias/ICategorias';


interface Props {
    categorias: ICategorias[]
}
export const CategoriasList:FC<Props> = ({ categorias }) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Nombre</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    categorias.map((categorias: ICategorias) => (
                        <TableRow key= { categorias.ID } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { categorias.ID }
                            </TableCell>
                            <TableCell align="right">{categorias.Nombre}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}