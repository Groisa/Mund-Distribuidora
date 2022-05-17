import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { UserNew } from "../../services/Users.service"
import { userLogin } from "../../store/Users/users.action"
import { toast } from "react-toastify"

function CadastroPagina() {
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [dataCadastro, setDataCadastro] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        password: '',
        endereço: '',
        cep: ''
    })
    const handleChange = (event) => {
        setDataCadastro({
            ...dataCadastro,
            [event.target.name]: event.target.value
        })
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setIsSubmiting(true)
            const userData = await UserNew(dataCadastro)
            dispatch(userLogin(userData))
            navigate('/')
            toast.success('Cadastro efetuado com sucesso!')
        } catch (error) {
            const message = error.message === 'Email already exists'
                ? 'Email ja cadastrado.'
                : 'Erro ao fazer cadastro.'
            toast.error(message)
        }
        setIsSubmiting(false)
    }
    return (
        <section className="SectionForm">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col} controlId="LoginName" className="pt-2">
                        <Form.Label >Nome</Form.Label>
                        <Form.Control
                            className="pt-2"
                            placeholder="Insira seu nome"
                            onChange={handleChange}
                            value={dataCadastro.nome}
                            name='nome'
                            required
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="LoginSobreNome" className="pt-2">
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Control
                            className="pt-2"
                            placeholder="Insira seu Sobrenome"
                            onChange={handleChange}
                            value={dataCadastro.sobrenome}
                            name='sobrenome'
                            required
                        />
                    </Form.Group>
                </Row>
                <Form.Group as={Col} controlId="LoginEmailCadastro" className="pt-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        className="pt-2"
                        placeholder="Insira seu email"
                        type="email"
                        onChange={handleChange}
                        value={dataCadastro.email}
                        name='email'
                        required
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="LoginPasswordCadastro" className="pt-2">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        className="pt-2"
                        placeholder="Insira sua senha"
                        type="password"
                        onChange={handleChange}
                        value={dataCadastro.password}
                        name='password'
                        minLength={6}
                        required
                    />
                </Form.Group>
                <Row className="pt-2">
                    <Form.Group as={Col} controlId="LoginEndereço" className="pt-2">
                        <Form.Label >Endereço</Form.Label>
                        <Form.Control
                            className="pt-2"
                            placeholder="Insira seu endereço"
                            onChange={handleChange}
                            value={dataCadastro.endereço}
                            name='endereço'
                            required
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="LoginCEP" className="pt-2">
                        <Form.Label>Cep</Form.Label>
                        <Form.Control
                            className="pt-2"
                            placeholder="Insira seu CEP"
                            onChange={handleChange}
                            value={dataCadastro.cep}
                            name='cep'
                            required
                        />
                    </Form.Group>
                </Row>
                <Button type='submit' disabled={isSubmiting} className='mt-5'>Cadastrar</Button>
            </Form>
        </section>
    )
}
export default CadastroPagina