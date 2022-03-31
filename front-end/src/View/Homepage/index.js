import Layout from "../../Componentes/layout"
import ApenasLetra from "../../imagens/apenasLetra.png"
function HomePage () {
    return (
     <Layout>
       <div className="ImgTipoGraf"><img src={ApenasLetra} alt='a' width='265px' height='73px'/></div>
     </Layout>
    )
  }
  export default HomePage