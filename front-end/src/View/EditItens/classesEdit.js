
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Componentes/layout";
import styled from "styled-components"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getClassById, upDateClass } from "../../services/classes.service";
import { toast } from "react-toastify";


function ClassEditView() {
    const { id } = useParams()
    const [classEdit,  setClassEdit] = useState({})
    const navigate = useNavigate()
    const handleChangeUptade = (event) => {
        setClassEdit({
            ...classEdit,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        try {
            upDateClass(id, classEdit )
            navigate('/')
            toast.success('Classe editada com sucesso')
        } catch  {
            toast.error('Erro ao buscar ao alterar classe, tente novamente')
        }
    }
    useEffect(() =>{
        const fetchClass = async () => {
            try {
                const classData = await getClassById(id)
                setClassEdit(classData)
            } catch (error) {
                toast.error('Erro ao buscar Classe, recarregue a pagina')
            }
        }
    fetchClass()
    }, [id])
    
    return (
        <Layout>
            <ContainerStyled >
                <TitleElStyled>
                    <i class="bi bi-pencil-square"></i>
                    <h1> Editor De Classes</h1>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="Add-Classe">
                                <Form.Label>Nome Classe</Form.Label>
                                <Form.Control
                                    placeholder="Insira a Classe"
                                    value={classEdit.name}
                                    onChange={handleChangeUptade}
                                    name='name'
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="Add-DescriptionClass">
                                <Form.Label>Descrição Curta</Form.Label>
                                <Form.Control
                                    placeholder="Insira a descrição curta"
                                    name='shortDescription'
                                    value= {classEdit.shortDescription}
                                    onChange={handleChangeUptade}
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Form.Group as={Col} controlId="ImageClass">
                            <Form.Label>Insira o Link da imagem</Form.Label>
                            <Form.Control
                                placeholder="Link Imagem"
                                name='image'
                                value={classEdit.image}
                                onChange={handleChangeUptade}
                                required
                            />
                        </Form.Group>
                        <Button type='submit' className='mt-5'>Atulizar Produto</Button>
                    </Form>
                </TitleElStyled>
            </ContainerStyled>
        </Layout>
    )
}
export default ClassEditView
const ContainerStyled = styled(Container)`
    padding-top: 8rem;
`
const TitleElStyled = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   & i {
        font-size: 2.5rem;
    }
`
