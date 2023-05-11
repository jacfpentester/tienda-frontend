import { PublicLayouts } from "@/layouts/PublicLayouts"
import { Button } from "@mui/material"
import { NextPage } from "next"


const indexPage: NextPage = () => {

  return (
    <PublicLayouts>
      <h2>SECCIÓN HOME - Tienda</h2>
      <img src="inicio.jpg" width="800"
     height="800"></img>
    </PublicLayouts>
  )
}

export default indexPage

