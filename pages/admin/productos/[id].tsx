import { useRouter } from "next/router";

import { PublicLayouts } from '../../../layouts/PublicLayouts';


interface Props {
    ID: string
}

const ProductoPage = () => {
    const router = useRouter();
    const ID = router.query;
    console.log(ID)
  return (
    <PublicLayouts>
        <h2>Detalle del Producto {ID.Nombre}</h2>
    </PublicLayouts>
    
  )
}

export default ProductoPage
