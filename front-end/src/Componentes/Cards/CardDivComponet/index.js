import { Link } from "react-router-dom"
import ImagemTeste from '../../../imagens/teste.png'


function CardDivComponet({products}) {
    return (
        <section className="SecCategory">
            <div className="DivCard">
                <div><img src={products.image} alt='a' /></div>
                <div className="ItensConteines">
                    <h2> {products.name}</h2>
                    <p>{products.description} </p>
                    <Link to='/produtos' className="ResetLink"><button> Ir para</button></Link>
                </div>
            </div> 
        </section>
    )
}
export default CardDivComponet