import { Box, Button, Grid, makeStyles, Typography } from '@mui/material';
import React, { FC, useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { TabPanel } from '@mui/lab';
import { IProducto } from '@/interfaces/productos/IProducto';
import { AuthContext } from '../../context';
import Image, { ImageLoaderProps } from 'next/image';

interface Props {
  producto: IProducto
}

const myLoader: ImageLoaderProps = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export const ProductosDetails: FC<Props> = ({ producto }) => {

  console.log(producto);
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const { user } = useContext(AuthContext);

  return (
    <Grid container spacing={3} className='grid-background'>
      <Grid item xs={12} sm={12} sx={{ border: 0, width: '100%' }} >
        <Box display='flex' flexDirection='row'  >
          <Image
            loader={myLoader}
            src={producto.Imagen}
            alt={producto.Nombre}
            width={300}
            height={300}
          />
          <Box display='flex' flexDirection='column' sx={{ width: '40%', p: 3 }} >
            <Typography variant='h5' component='h5'
              sx={{ fontSize: '20px', textAlign: 'center', mb: '10px' }}
            > {producto.Nombre}</Typography>
            <Box display='flex' flexDirection='row' >
              <Typography sx={{ width: '60%' }}> Identificador: {producto.ID} </Typography>
              {user?.Email}
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
            <Typography variant='h4' component='h4'> Precio: {producto.Precio} € </Typography>
            <Button variant="contained" endIcon={<ShoppingCartIcon />}>
              Añadir al carrito
            </Button>
            <Button variant="contained" endIcon={<ShoppingCartIcon />}>
              Añadir a favoritos
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Descripción" value="1" />
                <Tab label="Proveedor" value="2" />
                <Tab label="Categoria" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">{producto.Descripcion}</TabPanel>
            <TabPanel value="2">{producto.proveedores?.Nombre}</TabPanel>
            <TabPanel value="3">{producto.categoria?.Nombre}</TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  )
}
