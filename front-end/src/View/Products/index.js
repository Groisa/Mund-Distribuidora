import Layout from "../../Componentes/layout";
import './index.css'
import Box from '../../imagens/BoxProducts.png'
import SecCategory from "../../Componentes/Cards/SecCategory";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import Loading from "../../Componentes/Loading";

function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [erroCatch, seterroCatch] =useState()
    useEffect(() => {
        fetch("http://localhost:3001/products")
        .then((response) => response.json())
        .then((data) => {
            setProducts(data)
        })
        .finally(() => {
            setLoading(false)
        })
        .catch (() => {
            seterroCatch('Falha ao buscar classes de produtos. Tente Novamente')
        })
    }, [])
    return (
        <Layout>
            <div className="CompanentBox">
                <img src={Box} alt='a' />
            </div>
            {loading && (
                <Loading/>
            )}
            {erroCatch && (
                <Alert variant="danger">{erroCatch}</Alert>
            )}
            {products.map(products=> (
                <div key={products.id}>
                    <SecCategory products={products}/> 
                </div>
            ))}
             
        </Layout>
    )
}

export default Products