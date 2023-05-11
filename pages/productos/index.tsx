import { ProductosCardList } from '@/components/productos';
import { useProductos } from '@/hooks/useProductos';
import { PublicLayouts } from '../../layouts/PublicLayouts';


const IndexProductosPage = () => {
  const { productos, isLoading } = useProductos('/productos');
  console.log("l=", isLoading, "c=", productos);

  return (
    <PublicLayouts>
      <h2>Sección de Productos</h2>
      <ProductosCardList productos = {productos} />
    </PublicLayouts>
  )
}

export default IndexProductosPage;