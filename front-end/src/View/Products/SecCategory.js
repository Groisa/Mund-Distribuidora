import { Card } from "react-bootstrap"
import { useSelector } from "react-redux"
import { UserType } from "../../Constantes/typeUser"
import { selectUser } from "../../store/Users/user.selctor"
import styled from "styled-components"

function SecCategory({ product }) {
    const user = useSelector(selectUser)
    return (
        <section className="SecCategory " >
            {product?.map(products => (
                <Card className='CardConteiner bg-transparent' key={products.id}>
                    <Card.Img variant="top" src={products.image} alt='a' />
                    <Card.Body className='CardConteiners'>
                        <Card.Title>{products.name}</Card.Title>
                        <Card.Text>
                            {products.shortDescription}
                        </Card.Text>
                        {/* <div className="ButtomEl">
                            <button>Orçar</button>
                        </div> */}
                        <div className="text-center DivItensSpan">
                        <span className="SpanQTY">{products.qty} Quantidade</span>
                        <span>R${products.price}</span>
                        </div>
                    </Card.Body>
                </Card>
            ))}
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
export default SecCategory
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
        padding: 1px ;
    }
`