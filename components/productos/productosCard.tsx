import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import { FC } from "react";
import NextLink  from 'next/link';
import { IProducto } from "@/interfaces/productos/IProducto";

interface Props {
    producto: IProducto;
}
export const ProductosCard:FC<Props> = ({ producto }) => {
  return (
    <Grid item xs= {6} sm={3} >
        <Card sx={{ width: '90%', backgroundColor: '#5DADE2', backgroundSize: 'cover' }} className='card-background'>
          <Link href={`/productos/${producto.ID}`}  passHref component={NextLink} prefetch={false}>
            <CardActionArea>
                <Box display='flex' alignItems='flex-start' flexDirection='row' >
                    <CardMedia
                        component='img' className='fadeIn'
                        image={ producto.Imagen } alt={ producto.Nombre } 
                        sx={{ width: '120px', height: '160px', objectFit: 'cover' }}
                    />
                    <Box sx={{marginLeft: 3}}>
                        <Typography fontWeight={1000}>Nombre:</Typography> 
                        <Typography fontWeight={700}>{producto.Nombre}</Typography>
                        <Typography fontWeight={1000}>Precio:</Typography> 
                        <Typography fontWeight={700}>{producto.Precio} €</Typography> 
                    </Box>
                </Box>
            </CardActionArea>
          </Link>
        </Card>
        {/* <Box sx= {{ marginTop: 1, backgroundColor: '#5DADE2', backgroundSize: 'cover'}} className='fadeIn'>
            <Typography fontWeight={700}>{pelicula.Descripcion}</Typography>
            <Typography fontWeight={1000}>Genero:</Typography> 
            <Typography fontWeight={500}>{pelicula.genero.Genero}</Typography>
        </Box> */}
    </Grid>
  )
}