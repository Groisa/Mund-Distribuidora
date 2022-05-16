import { useSelector } from "react-redux"
import { Button, Modal } from "react-bootstrap"
import { Link } from "react-router-dom"
import { UserType } from "../../../Constantes/typeUser"
import { selectUser } from "../../../store/Users/user.selctor"
import styled from "styled-components"
import { delClass } from "../../../services/classes.service"
import { toast } from "react-toastify"
import { useState } from "react"

function CardDivComponet({ products, onDelete }) {
    const [dataClass, setDataClass] = useState()
    const handleClick = (products) => {
       setDataClass(products)
    }
    const handleHide = () => setDataClass(undefined)
    const handleDelete = async() => {
        try {
            await delClass(dataClass.id)
            await onDelete()
            handleHide()
            toast.success('Produto deletado com sucesso!')
        } catch {
            toast.error('Falha ao deletar classe. Tente Novamente!')
        }
    }
    const user = useSelector(selectUser)
    return (
        <>
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
                        <button onClick={() => handleClick(products)}>
                            <i class="bi bi-trash-fill"></i>
                        </button>
                        <Link to={`/editorclasses/${products.id}`}>
                            <i class="bi bi-pencil-square"></i>
                        </Link>
                    </DivEditDelete>
                }
            </section>
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
    )
}
export default CardDivComponet

const DivEditDelete = styled.div`
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
    button {
        border: none;
    }
`