import { ProveedoresList } from '../../components/proveedores/proveedoresList';
import { Mundo } from '../../components/Mundo';
import { useProveedores } from "@/hooks/useProveedores";
import { PublicLayouts } from "@/layouts/PublicLayouts";

const IndexPage = () => {
    const { proveedores, isLoading } = useProveedores('/proveedores');
    const respuesta = useProveedores('/proveedores');
    console.log(respuesta);
    console.log(isLoading, "c=", proveedores);
    return (
        <PublicLayouts>
            <h2>Sección Proveedores</h2>
            {
                (isLoading)
                    ? <ProveedoresList proveedores={proveedores} />
                    : <Mundo />

            }

        </PublicLayouts>
    )
}

export default IndexPage