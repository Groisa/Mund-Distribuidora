import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import CardDivComponet from "../../Componentes/Cards/CardDivComponet";
import Layout from "../../Componentes/layout";
import Loading from "../../Componentes/Loading";
import BoxClass from '../../imagens/boxClasses.png'
import { getClass } from "../../services/classes.service";
import './index.css'

function ProductsClass() {
    const [productsclass, setProductsclass] = useState([])
    const [loading, setLoading] = useState(true)
    const [erroCatch, seterroCatch] = useState()
    const fetchClass = async () => {
        try {
            const data = await getClass()
            setProductsclass(data)
            setLoading(false)
        }
         catch (err) {
            const message = err.message === 'Response not ok.'
            ? '404'
            : 'Falha ao buscar informações do curso. Recarregue a página.'
            seterroCatch(message)
          setLoading(false)
        }
    } 
    useEffect(() => {
        fetchClass()
    }, [])
    return (
        <Layout>
            <div className="CompanentBox">
                <img src={BoxClass} alt='a' />
            </div>
            <h1 className="text-center"> Categorias </h1>
            {loading && (
                <Loading />
            )}
            {erroCatch && (
                <Alert variant="primary">{erroCatch}</Alert>
            )}

            {productsclass.map(products => (
                <div className="ProductsCategory" key={products.id}>
                    <CardDivComponet products={products} onDelete={fetchClass}/>
                </div>
            ))}
        </Layout>
    )
}
export default ProductsClass