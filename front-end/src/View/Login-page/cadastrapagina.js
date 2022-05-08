import { Button, Col, Form, Row } from "react-bootstrap"

function CadastroPagina () {
    return (
        <section className="SectionForm">
        <Form>
            <Row>
                <Form.Group as={Col} controlId="LoginName" className="pt-2">
                    <Form.Label >Nome</Form.Label>
                    <Form.Control
                        className="pt-2"
                        placeholder="Insira seu nome"
                        type='email'
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="LoginSobreNome" className="pt-2">
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control
                        className="pt-2"
                        placeholder="Insira seu Sobrenome"
                        type="password"
                    />
                </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="LoginEmailCadastro" className="pt-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    className="pt-2"
                    placeholder="Insira seu email"
                    type="email"
                />
            </Form.Group>
            <Form.Group as={Col} controlId="LoginPasswordCadastro" className="pt-2">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                    className="pt-2"
                    placeholder="Insira sua senha"
                    type="password"
                />
            </Form.Group>
            <Row className="pt-2">
                <Form.Group as={Col} controlId="LoginEndereço" className="pt-2">
                    <Form.Label >Endereço</Form.Label>
                    <Form.Control
                        className="pt-2"
                        placeholder="Insira seu endereço"
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="LoginCEP" className="pt-2">
                    <Form.Label>Cep</Form.Label>
                    <Form.Control
                        className="pt-2"
                        placeholder="Insira seu CEP"
                        type='number'
                    />
                </Form.Group>
            </Row>
            <Button type='submit' className='mt-5'>Cadastrar</Button>
        </Form>
    </section>
    )
}
export default CadastroPagina