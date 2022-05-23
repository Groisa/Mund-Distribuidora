import { Container } from "react-bootstrap"
import Layout from "../../Componentes/layout"
import CadastroPagina from "./cadastrapagina"
import './index.css'
import LoginPagina from "./loginpage"

function LoginPage() {
   
    return (
        <Layout>
            <Container className="ConteinerDivItens">
                <i class="bi bi-person-circle"></i>
                <h1> Login </h1>
                    <LoginPagina/> 
                <h1> Cadastro </h1>
                <CadastroPagina/>
            </Container>
        </Layout>
    )
}
export default LoginPage