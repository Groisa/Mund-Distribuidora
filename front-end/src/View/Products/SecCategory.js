import { Button, Card, Modal } from "react-bootstrap"
import { useSelector } from "react-redux"
import { UserType } from "../../Constantes/typeUser"
import { selectUser } from "../../store/Users/user.selctor"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { delProducs } from "../../services/products.service"
import { useState } from "react"


function SecCategory({ product, onDelete }) {
    const user = useSelector(selectUser)
    const [dataClass, setDataClass] = useState()
    const handleClick = (products) => {
        setDataClass(products)
    }
    const handleHide = () => setDataClass(undefined)
    const handleDelete = async () => {
        try {
            await delProducs(dataClass.id)
            await onDelete()
            handleHide()
            toast.success('Produto deletado com sucesso!')
        } catch {
            toast.error('Falha ao deletar classe. Tente Novamente!')
        }
    }
    return (
        <section className="SecCategory " >
            {product?.map(products => (
                <>
                    <Card className='CardConteiner bg-transparent' key={products.id}>
                        <Card.Img variant="top" src={products.image} alt='a' />
                        <Card.Body className='CardConteiners'>
                            <Card.Title>{products.name}</Card.Title>
                            <Card.Text>
                                {products.shortDescription}
                            </Card.Text>
                            <div className="text-center DivItensSpan">
                                <span className="SpanQTY">{products.qty} Quantidade</span>
                                <span>R${products.price}</span>
                                {user && user.type === UserType.usuario 
                                    &&
                                    <ButtonStyle>
                                        <i class="bi bi-bag-check-fill"></i>
                                    </ButtonStyle>
                                }
                            </div>
                        </Card.Body>
                        {user && user.type === UserType.admin
                            &&
                            <DivEditDelete>
                                <button onClick={() => handleClick(products)}>
                                    <i class="bi bi-trash-fill"></i>
                                </button>
                                <Link to={`/editorprodutos/${products.id}`}>
                                    <i class="bi bi-pencil-square"></i>
                                </Link>
                            </DivEditDelete>
                        }

                    </Card>

                    {/* Modal */}
                    <Modal show={dataClass}>
                        <Modal.Header >
                            <Modal.Title>Deseja realmente excluir?</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                            <Button variant="warning" onClick={handleDelete}>
                                Excluir
                            </Button>
                            <Button variant="secondary" onClick={handleHide}>
                                Cancelar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            ))}

        </section>
    )
}
export default SecCategory
const DivEditDelete = styled.div`
    border: solid 1px; 
    padding: 5px;
    display: flex;
    justify-content: space-around;
    background-color: white;
    i {
        margin: 10px;
        border: solid 1px; 
        border-radius: 5px;
        cursor: pointer;
        padding: 1px ;
    }
    button {
        border: none;
    }
`
const ButtonStyle = styled.button`
    border: none;
    background: none;
`