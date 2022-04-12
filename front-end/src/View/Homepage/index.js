import './index.css'
import Layout from "../../Componentes/layout"
import ApenasLetra from "../../imagens/apenasLetra.png"
import CardGroup from '../../Componentes/Cards/Cardgroups'
import CaminhaoEntrega from "../../imagens/caminhãohome.jpg"
import { Container } from 'react-bootstrap'
import EstradaSemFim from "../../imagens/estradasemfim.png"



function HomePage() {
  return (
    <Layout>
      <div className='DivImage'>
        <img src={CaminhaoEntrega} />
      </div>
      <section className='SectionEl'>
        <div className='HeaderPage '>
          <img src={EstradaSemFim} className="RoadsterNoEnd" />
          <span className='slideInUp'> A melhor e mais</span>
          <span className='slideInUp'>Completa Distribuidora</span>
        </div>
        <div className='ElSumario'>
            <div className='SumarioEl'>
                <h1 className='text-center titleone' >Quem Somos</h1>
                <p className='DescriptionEnterprise'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros convallis, congue justo ut, iaculis ex. Proin vel sollicitudin purus. Sed id blandit risus. In vitae ultricies nisi. Phasellus nibh orci, pellentesque sit amet molestie sed, condimentum id est. Pellentesque a iaculis est. Suspendisse potenti. Integer sed nisl laoreet, rhoncus ex eu, auctor tellus. Fusce nunc nibh, tempus id hendrerit eu, vestibulum in libero.</p>
            </div>
          </div>
      </section>

    </Layout>
  )
}
export default HomePage