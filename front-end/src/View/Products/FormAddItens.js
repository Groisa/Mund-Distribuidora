import { Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Componentes/layout";

function FormItens() {
    return (
        <Layout>
            <Container className="ConteinerDivItens">
                <i class="bi bi-cloud-plus"></i>
                <h1> Adicionar Classes De produtos </h1>
                <section className="SectionForm">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Nome Classe</Form.Label>
                                <Form.Control
                                    placeholder="Insira a Classe" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Descrição Curta</Form.Label>
                                <Form.Control
                                    placeholder="Insira a descrição curta" />
                            </Form.Group>
                        </Row>
                        <Form.Select aria-label="Default select example">
                            <option>Selecione a imagem</option>
                            <option value="1">Produtos Voltados a Casa</option>
                            <option value="2">Produtos Voltados a automóveis</option>
                            <option value="3">Produtos Voltados ao uso Pessoal </option>
                        </Form.Select>
                    </Form>
                </section>
                <i class="bi bi-cloud-plus"></i>
                <h1> Adicionar Produtos </h1>
                <section className="SectionForm">
                    <Form>
                        <Form.Select aria-label="Default select example">
                            <option>Selecione a Classe</option>
                            <option value="1">Material Eletrico</option>
                            <option value="1">Material Domestico</option>
                        </Form.Select>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Nome do Produto</Form.Label>
                            <Form.Control
                                placeholder="Insira o Produto" />
                        </Form.Group>
                        <Row className="mb-4">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Preço</Form.Label>
                                <Form.Control
                                    placeholder="Insira o Preço" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Quantidade</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Insira a Quantidade" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-2" controlId="formGridAddress1">
                            <Form.Label>Descrição Curta</Form.Label>
                            <Form.Control
                                placeholder="Insira a Descrição" />
                        </Form.Group>
                    </Form>
                </section>
            </Container>
        </Layout>
    )
}
export default FormItens