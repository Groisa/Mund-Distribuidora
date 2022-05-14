
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Componentes/layout";
import styled from "styled-components"

function ClassEditView() {
    return (
        <Layout>
            <ContainerStyled >
                <TitleElStyled>
                    <i class="bi bi-pencil-square"></i>
                    <h1> Editor De Classes</h1>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="Add-Classe">
                                <Form.Label>Nome Classe</Form.Label>
                                <Form.Control
                                    placeholder="Insira a Classe"
                                    name='ClassUser'
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="Add-DescriptionClass">
                                <Form.Label>Descrição Curta</Form.Label>
                                <Form.Control
                                    placeholder="Insira a descrição curta"
                                    name='DiscriptionClasseUser'
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Form.Group as={Col} controlId="ImageClass">
                            <Form.Label>Insira o Link da imagem</Form.Label>
                            <Form.Control
                                placeholder="Link Imagem"
                                name='ImageUserClass'
                                required
                            />
                        </Form.Group>

                        <Button type='submit' className='mt-5'>Atulizar Produto</Button>
                    </Form>
                </TitleElStyled>
            </ContainerStyled>
        </Layout>
    )
}
export default ClassEditView
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
