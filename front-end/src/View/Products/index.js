import Layout from "../../Componentes/layout";
import './index.css'
import Box from '../../imagens/BoxProducts.png'
import ImagemTeste from '../../imagens/teste.png'
import { Card } from "react-bootstrap";

function Products() {
    return (
        <Layout>
            <div className="CompanentBox">
                <img src={Box} alt='a' />
            </div>
            <section className="SecCategory ">
                <Card className='CardConteiner bg-transparent'>
                    <Card.Img variant="top" src={ImagemTeste} />
                    <Card.Body className='CardConteiners'>
                        <Card.Title>Nome Produto</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className="ButtomEl">
                            <button>Orçar</button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='CardConteiner bg-transparent'>
                    <Card.Img variant="top" src={ImagemTeste} />
                    <Card.Body className='CardConteiners'>
                        <Card.Title>Nome Produto</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className="ButtomEl">
                            <button>Orçar</button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='CardConteiner bg-transparent'>
                    <Card.Img variant="top" src={ImagemTeste} />
                    <Card.Body className='CardConteiners'>
                        <Card.Title>Nome Produto</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className="ButtomEl">
                            <button>Orçar</button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='CardConteiner bg-transparent'>
                    <Card.Img variant="top" src={ImagemTeste} />
                    <Card.Body className='CardConteiners'>
                        <Card.Title>Nome Produto</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className="ButtomEl">
                            <button>Orçar</button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='CardConteiner bg-transparent'>
                    <Card.Img variant="top" src={ImagemTeste} />
                    <Card.Body className='CardConteiners'>
                        <Card.Title>Nome Produto</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className="ButtomEl">
                            <button>Orçar</button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='CardConteiner bg-transparent'>
                    <Card.Img variant="top" src={ImagemTeste} />
                    <Card.Body className='CardConteiners'>
                        <Card.Title>Nome Produto</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className="ButtomEl">
                            <button>Orçar</button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='CardConteiner bg-transparent'>
                    <Card.Img variant="top" src={ImagemTeste} />
                    <Card.Body className='CardConteiners'>
                        <Card.Title>Nome Produto</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className="ButtomEl">
                            <button>Orçar</button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='CardConteiner bg-transparent'>
                    <Card.Img variant="top" src={ImagemTeste} />
                    <Card.Body className='CardConteiners'>
                        <Card.Title>Nome Produto</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className="ButtomEl">
                            <button>Orçar</button>
                        </div>
                    </Card.Body>
                </Card>
            </section>
        </Layout>
    )
}

export default Products