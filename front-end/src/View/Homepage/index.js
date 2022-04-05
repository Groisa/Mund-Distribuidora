import './index.css'
import Layout from "../../Componentes/layout"
import ApenasLetra from "../../imagens/apenasLetra.png"
import CardGroup from '../../Componentes/Cards/Cardgroups'



function HomePage() {
  return (
    <Layout>
      <div className="ImgTipoGraf"><img src={ApenasLetra} alt='a' width='265px' height='73px' /></div>
      <div className="Novidades Divh1">
        <h1 className='itensTitlePrimary'> Novidades </h1>
        <CardGroup />
      </div>
      <div className="Promo Divh1">
        <h1 className='itensTitle' > Promoções</h1>
        <CardGroup />
      </div>
      <div className="MV Divh1"> 
        <h1 className='itensTitle'>Mais Vendidos</h1>
        <CardGroup />
      </div>
    </Layout>
  )
}
export default HomePage