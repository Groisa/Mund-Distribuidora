import { Card } from "react-bootstrap"
function SecCategory({ product }) {
    return (
        <section className="SecCategory " >
            {product?.map(products => (
                <Card className='CardConteiner bg-transparent' key={products.id}>
                    <Card.Img variant="top" src={products.image} alt='a' />
                    <Card.Body className='CardConteiners'>
                        <Card.Title>{products.name}</Card.Title>
                        <Card.Text>
                            {products.shortDescription}
                        </Card.Text>
                        {/* <div className="ButtomEl">
                            <button>Orçar</button>
                        </div> */}
                        <div className="text-center DivItensSpan">
                        <span className="SpanQTY">{products.qty} Quantidade</span>
                        <span>R${products.price}</span>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </section>
    )
}
export default SecCategory