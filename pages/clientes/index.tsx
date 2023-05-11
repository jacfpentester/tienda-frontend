import { useClientes } from '../../hooks/useClientes';
import { ClientesList } from '../../components/clientes/clientesList';
import { Mundo } from '../../components/Mundo';
import { PublicLayouts } from "@/layouts/PublicLayouts";

const IndexPage = () => {
    const { clientes, isLoading } = useClientes('/clientes');
    const respuesta = useClientes('/clientes');
    console.log(respuesta);
    console.log(isLoading, "c=", clientes);
    return (
        <PublicLayouts>
            <h2>Listado de Clientes.</h2>
            {
                (isLoading)
                    ? <ClientesList clientes={clientes} />
                    : <Mundo />

            }

        </PublicLayouts>
    )
}

export default IndexPage