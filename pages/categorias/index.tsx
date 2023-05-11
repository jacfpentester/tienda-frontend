import { useCategorias } from '../../hooks/useCategorias';
import { CategoriasList } from '../../components/categorias/categoriasList';
import { Mundo } from '../../components/Mundo';
import { PublicLayouts } from "@/layouts/PublicLayouts";

const IndexPage = () => {
    const { categorias, isLoading } = useCategorias('/categorias');
    const respuesta = useCategorias('/categorias');
    console.log(respuesta);
    console.log(isLoading, "c=", categorias);
    return (
        <PublicLayouts>
            <h2>Categorias de los Productos.</h2>
            {
                (isLoading)
                    ? <CategoriasList categorias={categorias} />
                    : <Mundo />

            }

        </PublicLayouts>
    )
}

export default IndexPage