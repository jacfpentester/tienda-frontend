import { useProductos } from "@/hooks/useProductos";
import { PublicLayouts } from "@/layouts/PublicLayouts";
import { useRouter } from "next/router";
import { IProducto } from "@/interfaces/productos";
import { ProductosDetails } from "@/components/productos/productosDetails";

interface Props {
  ID: string
}

const ProductoPage = () => {
  const router = useRouter();
  console.log(router)
  const ID = router.query
  const { productos, isLoading } = useProductos(`/productos/${ ID.id }`);
  const producto= productos[0] || {} as IProducto;
  return (
    <PublicLayouts>
      <h2>Detalle del Producto {ID.id} {`${router.query.id}`}</h2>
      <ProductosDetails producto={producto} />
    </PublicLayouts>

  )
}

export default ProductoPage