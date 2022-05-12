import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { login } from "../../services/Users.service"
import { useNavigate } from "react-router-dom"
import { userLogin } from "../../store/Users/users.action"

function LoginPagina() {
    const [isSubmiting,  setIsSubmiting] = useState(false)
    const [dataForm, setDataForm] = useState({
        email: '',
        password: ''
    })
    const handleChange = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setIsSubmiting(true)
            const userData = await login(dataForm)
            // envia redux
            dispatch(userLogin(userData))
            navigation('/')
            toast.success('Logado Com sucesso!')
        } catch (error) {
            const message = error.message === 'Credentials invalid.'
                ? 'E-mail ou senha inválidos.'
                : 'Falha ao fazer login. Tente novamente.'
            toast.error(message)
            console.log(error)
        }
        setIsSubmiting(false)
    }
    return (
        <section className="SectionForm">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col} controlId="LoginEmail">
                        <Form.Label >Email</Form.Label>
                        <Form.Control
                            className="pt-2"
                            placeholder="Insira seu email"
                            type='email'
                            name="email"
                            onChange={handleChange}
                            value={dataForm.email}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="LoginPassaword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            className="pt-2"
                            placeholder="Insira sua senha"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={dataForm.password}
                        />
                    </Form.Group>
                </Row>
                <Button type='submit' disabled={isSubmiting} className='mt-5'>Entrar</Button>
            </Form>
        </section>
    )
}
export default LoginPagina