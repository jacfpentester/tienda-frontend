import { ClientesList } from "@/components/clientes/clientesList";
import { Mundo } from "../../../components";
import { useClientes } from "../../../hooks/useClientes";
import { MainLayouts } from '../../../layouts/MainLayouts';

const IndexClientesPage = () => {

    const { clientes, isLoading } = useClientes('/clientes');
    console.log("l=", isLoading, "c=", clientes);
    return (
        <MainLayouts>
            <ClientesList clientes={clientes}/>
        </MainLayouts>
    )

}

export default IndexClientesPage;