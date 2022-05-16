import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../../Componentes/layout";
import { getAuthorizationHeaders } from "../../services/api.service";

const InitialForm = {
    ClassUser: '',
    DiscriptionClasseUser: '',
    ProductUser: '',
    PriceUser: '',
    QtyUser: '',
    DescriptionProductUser: '',
    ImageUserClass: '',
    ImageUserProducts: '',
    IdClassName: ''
}
function FormItens() {
    const { id } = useParams()
    const [formDados, setFormDados] = useState(InitialForm)
    const [isSubmiting, setIsSubmiting] = useState(false)
    const handleChangeUptade = (event) => {
        setFormDados({
            ...formDados,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setIsSubmiting(true)
            await fetch(`${process.env.REACT_APP_API_URL}/items`, {
                method: 'POST',
                body: JSON.stringify({
                    name: formDados.ClassUser,
                    shortDescription: formDados.DiscriptionClasseUser,
                    image: formDados.ImageUserClass,
                }),
                headers: {
                    'content-type': 'application/json',
                    ...getAuthorizationHeaders()
                }
            })
            setFormDados(InitialForm)
            toast.success('Classe cadastrada com sucesso!')
        } catch {
            toast.error('Não foi possivel fazer o cadastro!')
        }
        setIsSubmiting(false)
    }
    const handleSubmitProducts = async (event) => {
        event.preventDefault()

        try {
            setIsSubmiting(true)
            await fetch(`${process.env.REACT_APP_API_URL}/products`, {
                method: 'POST',
                body: JSON.stringify({
                    name: formDados.ProductUser,
                    shortDescription: formDados.DescriptionProductUser,
                    image: formDados.ImageUserProducts,
                    price: formDados.PriceUser,
                    qty: formDados.QtyUser,
                    itemId: parseInt(formDados.IdClassName)
                }),
                headers: {
                    'content-type': 'application/json',
                    ...getAuthorizationHeaders()
                }
            })
            setFormDados(InitialForm)
            toast.success('Produto cadastrado com sucesso!')
        } catch {
            toast.error('Não foi possivel fazer o cadastro!')
        }
        setIsSubmiting(false)
    }
    return (

        <Layout>
            <Container className="ConteinerDivItens">
                <i class="bi bi-cloud-plus"></i>
                <h1> Adicionar Classes De produtos </h1>
                <section className="SectionForm">
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="Add-Classe">
                                <Form.Label>Nome Classe</Form.Label>
                                <Form.Control
                                    placeholder="Insira a Classe"
                                    value={formDados.ClassUser}
                                    name='ClassUser'
                                    onChange={handleChangeUptade}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="Add-DescriptionClass">
                                <Form.Label>Descrição Curta</Form.Label>
                                <Form.Control
                                    placeholder="Insira a descrição curta"
                                    value={formDados.DiscriptionClasseUser}
                                    name='DiscriptionClasseUser'
                                    onChange={handleChangeUptade}
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Form.Group as={Col} controlId="ImageClass">
                            <Form.Label>Insira o Link da imagem</Form.Label>
                            <Form.Control
                                placeholder="Link Imagem"
                                value={formDados.ImageUserClass}
                                name='ImageUserClass'
                                onChange={handleChangeUptade}
                                required
                            />
                        </Form.Group>

                        <Button type='submit' disabled={isSubmiting} className='mt-5'>Cadastrar Classe</Button>
                    </Form>
                    {/* products */}
                </section>
                <i class="bi bi-cloud-plus"></i>
                <h1> Adicionar Produtos </h1>
                <section className="SectionForm">
                    <Form onSubmit={handleSubmitProducts}>
                        <Form.Group as={Col} controlId="ImageClass">
                            <Form.Label>Insira o Link da imagem</Form.Label>
                            <Form.Control
                                placeholder="Link Imagem"
                                value={formDados.ImageUserProducts}
                                name='ImageUserProducts'
                                onChange={handleChangeUptade}
                                required
                            />
                            <Form.Text>Insira a imagem hospedada no <a href="https://cloudinary.com/" target='_blank'>Cloudinary</a></Form.Text>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Nome do Produto</Form.Label>
                            <Form.Control
                                placeholder="Insira o Produto"
                                value={formDados.ProductUser}
                                name='ProductUser'
                                onChange={handleChangeUptade}
                                required
                            />

                        </Form.Group>
                        <Row className="mb-4">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Preço</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Insira o Preço"
                                    value={formDados.PriceUser}
                                    name='PriceUser'
                                    onChange={handleChangeUptade}
                                    required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Quantidade</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Insira a Quantidade"
                                    value={formDados.QtyUser}
                                    name='QtyUser'
                                    onChange={handleChangeUptade}
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-2" controlId="formGridAddress1">
                            <Form.Label>Descrição Curta</Form.Label>
                            <Form.Control
                                placeholder="Insira a Descrição"
                                value={formDados.DescriptionProductUser}
                                name='DescriptionProductUser'
                                onChange={handleChangeUptade}
                                required />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formGridAddress1">
                            <Form.Label>Escolha a Classe</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Insira o Id da classe"
                                value={formDados.IdClassName}
                                name='IdClassName'
                                onChange={handleChangeUptade}
                                required />
                        </Form.Group>
                        <Button type='submit' disabled={isSubmiting} className='mt-5'>Cadastrar Produto</Button>
                    </Form>
                </section>
            </Container>
        </Layout>
    )
}
export default FormItens