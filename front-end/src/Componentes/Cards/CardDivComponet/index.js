import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { UserType } from "../../../Constantes/typeUser"
import { selectUser } from "../../../store/Users/user.selctor"
import styled from "styled-components"


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
            {user && user.type === UserType.admin 
                        &&
                     <DivEditDelete>
                         <div>
                            <i class="bi bi-trash-fill"></i>
                         </div>
                         <div>
                            <i class="bi bi-pencil-square"></i>
                         </div>
                     </DivEditDelete>   
                    }
        </section>
    )
}
export default CardDivComponet

const DivEditDelete = styled.div `
    border: solid 1px; 
    border-radius: 10px;
    padding: 5px;
    display: flex;
    background-color: white;
    i {
        margin: 10px;
        border: solid 1px; 
        border-radius: 5px;
        cursor: pointer;
        padding: 1px;
    }
`