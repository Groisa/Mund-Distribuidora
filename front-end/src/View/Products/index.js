import Layout from "../../Componentes/layout";
import './index.css'
import Box from '../../imagens/BoxProducts.png'
import { useEffect, useState } from "react";
import SecCategory from "./SecCategory";
import { useParams } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";
import Loading from "../../Componentes/Loading";
import NotFound from "../NotFound";


function Products() {
    const {id} = useParams()
    const [productsPrimary, setProductsPrimary] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState()
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}?_embed=products`)
                if (!response.ok){
                    throw new Error('Response not Ok')
                }
                const data = await response.json()
                setProductsPrimary(data)
                setLoading(false)
            }catch (err) {
                const message = err.message === 'Response not ok'
                ? '404'
                : 'Falha ao buscar produtos'
                setErrorMsg(message)
                setLoading(false)
            }
        }
        fetchProducts()
    } , [id])
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
                   <SecCategory product={productsPrimary.product}/>
                )}
            </Container>
        </Layout>
    )
}

export default Products