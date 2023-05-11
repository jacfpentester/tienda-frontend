import { useCarrito } from "@/hooks/useCarrito";
import { CarritoList } from "@/components/carrito/carritoList";
import { Mundo } from "@/components";
import { MainLayouts } from "@/layouts/MainLayouts";

//NextPage --> indica que es un proyecto Next y no Reac
const IndexPage = () => {
    const { carrito, isLoading } = useCarrito('/carrito');
    const respuesta = useCarrito('/carrito');
    console.log(respuesta);
    console.log(isLoading, "c=", carrito);
    return (
        <MainLayouts>
            <h2>Sección Carrito</h2>
            {
                (isLoading)
                    ? <CarritoList carrito={carrito} />
                    : <Mundo />

            }

        </MainLayouts>
    )
}

export default IndexPage