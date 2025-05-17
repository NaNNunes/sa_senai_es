import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'

import CronoIcon from "../../assets/icones/cronoicon.png"
import SenaiVitoriaImg from "../../assets/senaivitoriaimg.png"

const Historia = () => {
  return (
    <Container className='my-3 border-0 rounded-2 shadow pb-3'>
       
        <Card className='rounded-5 shadow text-center' style={{margin:"0 -1.5%"}}>
            <Card.Header
                style={
                        {
                            background:"linear-gradient(to right, #FC5707, #51199E)",
                            color:"white",
                        }
                    }
            >
                <Card.Title className='text-uppercase fw-bold fs-3'>
                    Serviço Nacional de Aprendizagem Industrial
                </Card.Title>
            </Card.Header>
            <Card.Img
                src={SenaiVitoriaImg}
                style={
                    {   
                        filter:"brightness(85%)",
                        margin:"auto",
                        borderRadius:"0px 0px 10px 10px"
                    }
                }
            />
        </Card>

        <Row className='my-3 text-uppercase'>
            <Col md={2} sm={2} xs={2} className='mt-1 ms-5'>
                <img src={CronoIcon} width="80px"/>
            </Col>
            <Col className='mt-4 ' style={{marginLeft:"15%"}}>
                <h3 className='fw-bold'>História</h3>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col style={{textAlign: "justify"}}>
                <p>
                    O Senai surgiu no Espírito Santo em 25 de março de 1952.
                    A primeira escola funcionou em um galpão cedido pela CVRD (hoje Vale).
                </p>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col style={{textAlign: "justify"}}>
                <p>
                    A primeira escola, chamada Pedro Nolasco,
                    oferecia cursos de marcenaria e mecânica,
                    em Cariacica. Nos anos seguintes,
                    o Senai se expandiu para atender às necessidades da indústria ferroviária,
                    incorporando a Escola Ferroviária João Neiva.
                </p>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col style={{textAlign: "justify"}}>
                <p>
                    Em 1964, foi inaugurado o Centro Jerônimo Monteiro em Vitória,
                    com equipamentos modernos e alta concorrência pelas vagas. 
                    A expansão continuou nas décadas de 1970 e 1980, 
                    com novos centros de formação em Cachoeiro de Itapemirim, Linhares, 
                    Serra, Colatina e Vila Velha.
                </p>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col style={{textAlign: "justify"}}>
                <p>
                    Com o tempo, o Senai se tornou uma referência em educação profissional, 
                    firmando parcerias estratégicas com grandes empresas e 
                    expandindo seu alcance para novos setores, como Automação, 
                    Construção Civil, Tecnologia da Informação, entre outros. 
                    Para garantir o acesso em todo o estado, também investiu em unidades 
                    móveis equipadas para atender diferentes áreas da indústria.
                </p>
            </Col>
        </Row>
    </Container>
  )
}

export default Historia