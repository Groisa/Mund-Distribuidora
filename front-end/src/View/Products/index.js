import Layout from "../../Componentes/layout";
import './index.css'
import Box from '../../imagens/BoxProducts.png'
import { useCallback, useEffect, useState } from "react";
import SecCategory from "./SecCategory";
import { useParams } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";
import Loading from "../../Componentes/Loading";
import NotFound from "../NotFound";
import FormItens from "./FormAddItens";
import { getProducts } from "../../services/products.service";


function Products() {
    const {id} = useParams()
    const [productsPrimary, setProductsPrimary] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState()
    const fetchProducts = useCallback(async () => {
        try {
            const data = await getProducts(id)
            setProductsPrimary(data)
            setLoading(false)
        }catch (err) {
            const message = err.message === 'Response not ok'
            ? '404'
            : 'Falha ao buscar produtos'
            setErrorMsg(message)
            setLoading(false)
        }
    },[id])
    useEffect(() => {
        fetchProducts()
    } , [fetchProducts])
    if (loading) {
        return <Loading/>
    }
    if (errorMsg === '404') {
        return <NotFound/>
    }
    return (
        <Layout>
            <div className="CompanentBox">
                <img src={Box} alt='a' />
            </div>
            <Container>
                {errorMsg ? (
                <Alert variant="danger" className="mt-3">{errorMsg}</Alert>
                ) : (
                <>
                   <SecCategory product={productsPrimary.products} onDelete={fetchProducts}/>
                </>
                )}
            </Container>
        </Layout>
    )
}

export default Products