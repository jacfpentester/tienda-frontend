import { useCarrito } from '../../hooks/useCarrito';
import { CarritoList } from '../../components/carrito/carritoList';
import { Mundo } from '../../components/Mundo';
import { PublicLayouts } from "@/layouts/PublicLayouts";

const IndexPage = () => {
    const { carrito, isLoading } = useCarrito('/carrito');
    const respuesta = useCarrito('/carrito');
    console.log(respuesta);
    console.log(isLoading, "c=", carrito);
    return (
        <PublicLayouts>
            <h2>Listado de Carritos de Compra realizados.</h2>
            {
                (isLoading)
                    ? <CarritoList carrito={carrito} />
                    : <Mundo />

            }

        </PublicLayouts>
    )
}

export default IndexPage