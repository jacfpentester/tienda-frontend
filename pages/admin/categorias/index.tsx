import { useCategorias } from "@/hooks/useCategorias";
import { CategoriasList } from "@/components/categorias/categoriasList";
import { Mundo } from "@/components";
import { MainLayouts } from "@/layouts/MainLayouts";

//NextPage --> indica que es un proyecto Next y no Reac
const IndexPage = () => {
    const { categorias, isLoading } = useCategorias('/categorias');
    const respuesta = useCategorias('/categorias');
    console.log(respuesta);
    console.log(isLoading, "c=", categorias);
    return (
        <MainLayouts>
            <h2>Sección Categorias</h2>
            {
                (isLoading)
                    ? <CategoriasList categorias={categorias} />
                    : <Mundo />

            }

        </MainLayouts>
    )
}

export default IndexPage