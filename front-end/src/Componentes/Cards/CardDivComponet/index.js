import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { UserType } from "../../../Constantes/typeUser"
import { selectUser } from "../../../store/Users/user.selctor"



function CardDivComponet({ products }) {
    const user = useSelector(selectUser)
    return (
        <section className="SecCategory">
            <div className="DivCard">
                <div><img src={products.image} alt='a' /></div>
                <div className="ItensConteines">
                    <h2>
                        {products.name}
                        {user && user.type === UserType.admin 
                            &&
                            <> # {products.id} </>
                        }
                    </h2>
                    <p>{products.shortDescription} </p>
                    <Link to={`/produtos/${products.id}`} className="ResetLink"><button> Ir para</button></Link>
                </div>
            </div>
        </section>
    )
}
export default CardDivComponet