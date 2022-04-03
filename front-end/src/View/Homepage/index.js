import './index.css'
import Layout from "../../Componentes/layout"
import ApenasLetra from "../../imagens/apenasLetra.png"
import ImagemTeste from '../../imagens/teste.png'

function CardGroup() {
  return (
    <div className='CenterAlign'>
      <div className="Cardgroup">
          <div className="CardComponents">
            <img src={ImagemTeste} alt='imagem do produto'/>
            <button className='CardSpanComponent'> Nome Produto</button>
          </div>
          <div className="CardComponents">
            <img src={ImagemTeste} alt='imagem do produto'/>
            <button className='CardSpanComponent'> Nome Produto</button>
          </div>
          <div className="CardComponents">
            <img src={ImagemTeste} alt='imagem do produto'/>
            <button className='CardSpanComponent'> Nome Produto</button>
          </div>
          <div className="CardComponents">
            <img src={ImagemTeste} alt='imagem do produto'/>
            <button className='CardSpanComponent'> Nome Produto</button>
          </div>
          <div className="CardComponents">
            <img src={ImagemTeste} alt='imagem do produto'/>
            <button className='CardSpanComponent'> Nome Produto</button>
          </div>
          <div className="CardComponents">
            <img src={ImagemTeste} alt='imagem do produto'/>
            <button className='CardSpanComponent'> Nome Produto</button>
          </div>
          <div className="CardComponents">
            <img src={ImagemTeste} alt='imagem do produto'/>
            <button className='CardSpanComponent'> Nome Produto</button>
          </div>
          <div className="CardComponents">
            <img src={ImagemTeste} alt='imagem do produto'/>
            <button className='CardSpanComponent'> Nome Produto</button>
          </div>
          <div className="CardComponents">
            <img src={ImagemTeste} alt='imagem do produto'/>
            <button className='CardSpanComponent'> Nome Produto</button>
          </div>
      </div>
    </div>
  )
}

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