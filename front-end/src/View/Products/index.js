import Layout from "../../Componentes/layout";
import './index.css'
import Box from '../../imagens/BoxProducts.png'
import SecCategory from "../../Componentes/Cards/SecCategory";

function Products() {
    return (
        <Layout>
            <div className="CompanentBox">
                <img src={Box} alt='a' />
            </div>
            <SecCategory/>  
        </Layout>
    )
}

export default Products