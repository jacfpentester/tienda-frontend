import { IProducto } from "@/interfaces/productos/IProducto";
import { Grid } from "@mui/material";
import { FC } from "react"
import { ProductosCard } from "./productosCard";

interface Props {
    productos: IProducto[]
}


export const ProductosCardList:FC<Props> = ({ productos }) => {
  return (
    <Grid container spacing={4}>
      {
        productos.map( (producto ) => (
          <ProductosCard 
          producto = { producto }
            key = { producto.ID }
          />
        ))
      }

    </Grid>
  )
}