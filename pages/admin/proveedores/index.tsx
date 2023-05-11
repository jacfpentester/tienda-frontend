import { useProveedores } from "@/hooks/useProveedores";
import { ProveedoresList } from "@/components/proveedores/proveedoresList";
import { Mundo } from "@/components/Mundo";
import { MainLayouts } from "@/layouts/MainLayouts";

//NextPage --> indica que es un proyecto Next y no Reac
const IndexPage  = () => {
    const { proveedores, isLoading } = useProveedores('/proveedores');
    const respuesta = useProveedores('/proveedores');
    console.log(respuesta);
    console.log(isLoading, "c=", proveedores);
    return (
        <MainLayouts>
            <h2>Sección Proveedores</h2>
            {
                (isLoading)
                    ? <ProveedoresList proveedores={proveedores} />
                    : <Mundo />

            }

        </MainLayouts>
    )
}

export default IndexPage