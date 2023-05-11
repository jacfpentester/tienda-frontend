import { MainLayouts } from '../../layouts/MainLayouts';
import { Mundo } from '../../components';
import { useProductos } from '@/hooks/useProductos';
import { ProductosList } from '@/components/productos/productosList';

const IndexProductosPage = () => {
  const { productos, isLoading } = useProductos('/productos');
  console.log("l=", isLoading, "c=", productos);

  return (
    <MainLayouts>
      <h2>Sección de Productos</h2>
      <ProductosList producto = {productos} />
            {
                (isLoading)
                    ? <ProductosList producto = {productos} />
                    : <Mundo />
            }
        </MainLayouts>
  )
}

export default IndexProductosPage;