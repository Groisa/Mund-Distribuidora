import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import CardDivComponet from "../../Componentes/Cards/CardDivComponet";
import Layout from "../../Componentes/layout";
import Loading from "../../Componentes/Loading";
import BoxClass from '../../imagens/boxClasses.png'
import './index.css'

function ProductsClass () {
    const [productsclass, setProductsclass] = useState([])
    const [loading, setLoading] = useState(true)
    const [erroCatch, seterroCatch] =useState()
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/items`)
        .then((response) => response.json())
        .then((data) => {
            setProductsclass(data)
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
                <img src={BoxClass} alt='a'/>
            </div>
            <h1 className="text-center"> Categorias </h1>
            {loading && (
                <Loading/>
            )}
            {erroCatch && (
                <Alert variant="primary">{erroCatch}</Alert>
            )}

            {productsclass.map(products => (
                <div className="ProductsCategory" key={products.id}>
                    <CardDivComponet products={products}/>
                </div>
            ))}
        </Layout>
    )
}
export default ProductsClass