import Layout from "../../Componentes/layout";
import './index.css'
import Box from '../../imagens/BoxProducts.png'
import SecCategory from "../../Componentes/Cards/SecCategory";
import { useEffect, useState } from "react";


function Products() {
    const [ProductsPrimary, setProductsPrimary] = useState([])
    useEffect(() => {
        fetch(' http://localhost:3001/products')
            .then((response) => response.json())
            .then((data) => {
                setProductsPrimary(data)
            })
    }, [])
    return (
        <Layout>
            <div className="CompanentBox">
                <img src={Box} alt='a' />
            </div>
            {ProductsPrimary.map(products => (
                <div className="ProductsCategory" key={products.id}>
                    <SecCategory products={products} />
                </div>
            ))}
        </Layout>
    )
}

export default Products