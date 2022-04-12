import { Carousel } from "react-bootstrap"
import "./index.css"
import Eletrica from "../../imagens/Eletrica.jpg"
import Pintura from "../../imagens/tintas-residenciais-001.jpg"
import Gamer from "../../imagens/alguns-itens-sao-indispensaveis-para-montar-o-seu-pc-gamer-1614232957829_v2_4x3.jpg"

function Carrosel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Eletrica}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>A Eletrica da sua Casa também importa</h3>
                </Carousel.Caption>
            </Carousel.Item> 
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Pintura}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>A Pintura da sua Casa merece o Melhor</h3>
                </Carousel.Caption>
            </Carousel.Item>  
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Gamer}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>O mundo Gamer te Espera</h3>
                </Carousel.Caption>
            </Carousel.Item>      
        </Carousel>
    )
}
export default Carrosel