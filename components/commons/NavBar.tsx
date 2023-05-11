import { useContext } from "react";
import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import NextLink from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContext } from "@/context/auth/AuthContext";

export const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <AppBar sx={{ backgroundColor: 'Brown' }}>
      <Toolbar>
        <Image src="/logo.png" width={50} height={50} alt="Tienda de Informatica" />

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Link href='/' passHref component={NextLink}>
            <Button sx={{ color: 'white', mb: 1 }}>
              <Image
                src='/home.png'
                alt='Descripción de la imagen'
                width={25}
                height={25}
              />
              Home
            </Button>
          </Link>
        </Box> 

        <Box sx={{ display: 'flex' }}>
          <Link href='/auth/login' passHref component={NextLink}>
            <Button sx={{ color: 'white', mb: 1 }}>
              <Image
                src='/logeo.png'
                alt='Descripción de la imagen'
                width={20}
                height={20}
              />
              Login
            </Button>
          </Link>

          <Typography sx={{ color: 'white', alignSelf: 'center', ml: 1, mr: 1 }}>/</Typography>

          <Typography sx={{ color: 'white' }}>
            {user?.FullName}/{user?.Email}/{user?.Roles}
          </Typography>
        </Box>

        <Box component="nav" sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Link href='/carrito' component={NextLink}>
            <Button sx={{ color: 'white' }}>
              <Image
                src='/cesta.png'
                alt='Descripción de la imagen'
                width={20}
                height={20}
              />
              Carrito
            </Button>
          </Link>

          <Link href='/categorias' component={NextLink}>
            <Button sx={{ color: 'white' }}>
              <Image
                src='/generos.webp'
                alt='Descripción de la imagen'
                width={20}
                height={20}
              />
              Categorías
            </Button>
          </Link>

          <Link href='/productos' component={NextLink}>
            <Button sx={{ color: 'white' }}>
              <Image
                src='/peliculas.png'
                alt='Descripción de la imagen'
                width={20}
                height={20}
              />
              Productos
            </Button>
          </Link>

          <Link href='/clientes' component={NextLink}>
            <Button sx={{ color: 'white' }}>
              <Image
                src='/usuarios.png'
                alt='Descripción de la imagen'
                width={20}
                height={20}
              />
              Clientes
            </Button>
          </Link>

          <Link href='/proveedores' component={NextLink}>
            <Button sx={{ color: 'white' }}>
              <Image
                src='/valoraciones.png'
                alt='Descripción de la imagen'
                width={20}
                height={20}
              />
              Proveedores
            </Button>
          </Link>
        </Box>

        <Box flex={1} />
        <IconButton
                    size="large"
                    edge="start"
                    aria-label="menu"
                    color="inherit"
                    sx={{}}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )

}
