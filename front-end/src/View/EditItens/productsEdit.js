import Layout from "../../Componentes/layout"
import styled from "styled-components"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

function ProductsEditView() {
    return (
        <Layout>
            <ContainerStyled >
                <TitleElStyled>
                    <i class="bi bi-pencil-square"></i>
                    <h1> Editor De Produtos</h1>
                    <Form >
                        <Form.Group as={Col} controlId="ImageClass">
                            <Form.Label>Insira o Link da imagem</Form.Label>
                            <Form.Control
                                placeholder="Link Imagem"
                                name='ImageUserProducts'
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Nome do Produto</Form.Label>
                            <Form.Control
                                placeholder="Insira o Produto"
                                name='ProductUser'
                                required
                            />

                        </Form.Group>
                        <Row className="mb-4">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Preço</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Insira o Preço"
                                    name='PriceUser'
                                    required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Quantidade</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Insira a Quantidade"
                                    name='QtyUser'
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-2" controlId="formGridAddress1">
                            <Form.Label>Descrição Curta</Form.Label>
                            <Form.Control
                                placeholder="Insira a Descrição"
                                name='DescriptionProductUser'
                                required />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formGridAddress1">
                            <Form.Label>Escolha a Classe</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Insira o Id da classe"
                                name='IdClassName'
                                required />
                        </Form.Group>
                        <Button type='submit' className='mt-5'>Cadastrar Produto</Button>
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