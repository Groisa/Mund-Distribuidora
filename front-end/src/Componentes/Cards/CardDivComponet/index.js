import { Link } from "react-router-dom"



function CardDivComponet({products}) {
    return (
        <section className="SecCategory">
            <div className="DivCard">
                <div><img src={products.image} alt='a' /></div>
                <div className="ItensConteines">
                    <h2> {products.name} #{products.id}</h2>
                    <p>{products.shortDescription} </p>
                    <Link to={`/produtos/${products.id}`} className="ResetLink"><button> Ir para</button></Link>
                </div>
            </div> 
        </section>
    )
}
export default CardDivComponet