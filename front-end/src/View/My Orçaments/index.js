import './index.css'
import Layout from "../../Componentes/layout"
import { Button, Card, Container } from 'react-bootstrap'
import styled from "styled-components"

function MyOrçaments() {
    return (
        <Layout>
            <StyledContainer>
                <StyledSubContainer>
                    <StyledCard >
                        <Card.Header>Classe</Card.Header>
                        <Card.Body>
                            <Card.Title>Produtos</Card.Title>
                            <Card.Text>
                                <StyledDivText>
                                    <StyledDivInput>
                                        <p>Quantidade</p>
                                        <StyledInput value='1' />
                                    </StyledDivInput>
                                    <p>Valor R$ 3,52</p>
                                </StyledDivText>
                            </Card.Text>
                            <Button variant='transparent'><i class="bi bi-trash-fill"></i></Button>
                        </Card.Body>
                    </StyledCard>
                    <StyledCard >
                        <Card.Header>Classe</Card.Header>
                        <Card.Body>
                            <Card.Title>Produtos</Card.Title>
                            <Card.Text>
                                <StyledDivText>
                                    <StyledDivInput>
                                        <p>Quantidade</p>
                                        <StyledInput value='1' />
                                    </StyledDivInput>
                                    <p>Valor R$ 3,52</p>
                                </StyledDivText>
                            </Card.Text>
                            <Button variant='transparent'><i class="bi bi-trash-fill"></i></Button>
                        </Card.Body>
                    </StyledCard>
                </StyledSubContainer>
            </StyledContainer>
            <div className='d-flex justify-content-center'>
                <StyledCardTotal className='m-4'>
                    <Card.Body>
                        <StyledDivToralPrice>
                            <p>Total</p>
                            <p>R$ 1500,52</p>
                        </StyledDivToralPrice>
                    </Card.Body>
                </StyledCardTotal>
            </div>
        </Layout>
    )
}
export default MyOrçaments
const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const StyledCard = styled(Card)`
    margin: 1rem;
    @media(min-width: 576px) {
        width: 375px;
    }
`
const StyledCardTotal = styled(Card) `
   @media (min-width: 992px) {
        width: 850px;
    }
`
const StyledSubContainer = styled.div`
    padding-top: 8rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (min-width: 992px) {
        width: 850px;
    }
`
const StyledDivText = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    padding-top: 10px ;
    @media (max-width: 375px ) {
        flex-direction: column;
        align-items: center;
    }
`
const StyledInput = styled.input`
    width: 50px;
    border: solid;
    height: 35px;
    border-radius: 10px;
    text-align: center;
    margin-left: 10px;
`
const StyledDivInput = styled.div`
    display: flex;
    padding-left: 10px;
    font-size: 20px;
    align-items: flex-start;
`
const StyledDivToralPrice = styled.div`
    font-weight: bold;
    display: flex;
    font-size: 22px;
    justify-content: space-evenly;
`