import Layout from "../../Componentes/layout"
import styled from "styled-components"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { getProductById, upDateProdutcs } from "../../services/products.service"

function ProductsEditView() {
    const { id } = useParams()
    const [productEdit,  setProductEdit] = useState({})
    const navigate = useNavigate()
    const handleChangeUptade = (event) => {
        setProductEdit({
            ...productEdit,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        try {
            upDateProdutcs(id, productEdit )
            navigate('/')
            toast.success('Produto editado com sucesso')
        } catch  {
            toast.error('Erro ao buscar ao alterar produto, tente novamente')
        }
    }
    useEffect(() =>{
        const fetchClass = async () => {
            try {
                const productData = await getProductById(id)
                setProductEdit(productData)
            } catch (error) {
                toast.error('Erro ao buscar produto, recarregue a pagina')
            }
        }
    fetchClass()
    }, [id])
    
    return (
        <Layout>
            <ContainerStyled >
                <TitleElStyled>
                    <i class="bi bi-pencil-square"></i>
                    <h1> Editor De Produtos</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Col} controlId="ImageClass">
                            <Form.Label>Insira o Link da imagem</Form.Label>
                            <Form.Control
                                placeholder="Link Imagem"
                                name='image'
                                onChange={handleChangeUptade}
                                value={productEdit.image}
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Nome do Produto</Form.Label>
                            <Form.Control
                                placeholder="Insira o Produto"
                                onChange={handleChangeUptade}
                                value={productEdit.name}
                                name='name'
                                required
                            />

                        </Form.Group>
                        <Row className="mb-4">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Preço</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Insira o Preço"
                                    onChange={handleChangeUptade}
                                    value={productEdit.price}
                                    name='price'
                                    required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Quantidade</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Insira a Quantidade"
                                    onChange={handleChangeUptade}
                                    value={productEdit.qty}
                                    name='qty'
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-2" controlId="formGridAddress1">
                            <Form.Label>Descrição Curta</Form.Label>
                            <Form.Control
                                placeholder="Insira a Descrição"
                                name='shortDescription'
                                onChange={handleChangeUptade}
                                value={productEdit.shortDescription}
                                required />
                        </Form.Group>
                        <Button type='submit' className='mt-5'>Editar Produto</Button>
                    </Form>
                </TitleElStyled>
            </ContainerStyled>
        </Layout>
    )
}
export default ProductsEditView
const ContainerStyled = styled(Container)`
    padding-top: 8rem;
`
const TitleElStyled = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   & i {
        font-size: 2.5rem;
    }
`