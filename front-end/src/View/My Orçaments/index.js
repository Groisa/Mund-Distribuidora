import './index.css'
import Layout from "../../Componentes/layout"
import { Table } from 'react-bootstrap'
import Tbody from '../../Componentes/Tbody'
function MyOrçaments () {

    
    return (
        <Layout>
        <h1> Em Desenvolimento para parte 2</h1>
            <h1 className='text-center'> Meu Orçamento</h1>
            <div className='DivTable'>
            <table className='TableEL'>
                <thead>
                    <td>Produtos</td>
                    <td>Quantidade</td>
                    <td>Valor R$</td>
                </thead>
                <Tbody/>
            </table>
            </div>
        </Layout>
    )
} 
export default MyOrçaments