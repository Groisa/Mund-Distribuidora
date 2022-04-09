import { Card } from "react-bootstrap"
function SecCategory ({products}) {
    return(
        <section className="SecCategory ">
                <Card className='CardConteiner bg-transparent'>
                    <Card.Img variant="top" src={products.image} alt='a' />
                    <Card.Body className='CardConteiners'>
                        <Card.Title>{products.name}</Card.Title>
                        <Card.Text>
                            {products.shortDescription}
                        </Card.Text>
                        <div className="ButtomEl">
                            <button>Orçar</button>
                        </div>
                    </Card.Body>
                </Card>
            </section>
    ) 
}
export default SecCategory