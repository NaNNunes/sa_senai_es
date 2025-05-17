import { useState, useEffect } from "react";

// styles
import containerStyle from "./imgAndTitulo.module.css";
import cardStyle from "./conteudoCards.module.css";

// react bootstrap componentes
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

import objetivoIcon from "../../assets/icones/objetivoicon.png"
import papeladaIcon from "../../assets/icones/papeladaIcon.png"

import { useBuscaCursoPorId } from "../../hook/useApi";

const CursoObjetivo = (props) => {

    const {buscaCursoPorId} = useBuscaCursoPorId();
    const [curso, setCurso] = useState({});

    useEffect(()=>{
        async function fetchCurso() {
            try{
                const curso = await buscaCursoPorId(props.id);
                console.log("curso encontrado: ", curso);
                setCurso(curso);
            }
            catch(erro){
                console.log(erro.message);
            }
        }
        fetchCurso();
    },[])

  return (
    <Container className={containerStyle.cont}>
        <Row className={containerStyle.cursonome}>
            <Col>
                {curso.nome}
            </Col>
        </Row>
        <Row
            style={
                {
                    height:"300px",
                    backgroundImage:`url(${curso.link2Detalhes})`,
                    backgroundRepeat:"no-repeat",
                    backgroundPosition:"bottom/100%",
                    backgroundSize:"cover",
                    borderRadius:"0 0 10px 10px",
                    boxShadow:"3px 4px 5px rgba(0,0,0, .5)",
                }
            }
        >
            <Col>
                <Card className={cardStyle.cardcontent}
                    style={{marginTop:"40%"}}
                >
                    <Row>
                        <Col xs={1} className={cardStyle.iconesubtitle}>
                            <img src={objetivoIcon} width="70px" />
                        </Col>
                        <Col className={cardStyle.subtitlecontent}>
                            <Card.Title className={cardStyle.subtitle}>
                                Objetivo do Curso
                            </Card.Title>
                        </Col>
                    </Row>
                    <Card.Body className={cardStyle.texto}>
                        <Card.Text>
                            {curso.objetivo}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={cardStyle.cardcontent}
                >
                    <Row>
                        <Col xs={1} className={cardStyle.iconesubtitle}>
                            <img src={papeladaIcon} alt="" width="70px"/>
                        </Col>
                        <Col className={cardStyle.subtitlecontent}>
                            <Card.Title className={cardStyle.subtitle}>
                                Documentos para Matrícula
                            </Card.Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ListGroup variant="flush" className={cardStyle.lista}>
                                <ListGroup.Item action className="text-dark">
                                    Cadastro de Pessoa Física (CPF)
                                </ListGroup.Item>
                                <ListGroup.Item action className="text-dark">
                                    Carteira de Identidade Nacional (RG)
                                </ListGroup.Item>
                                <ListGroup.Item action className="text-dark">
                                    CNH ou Carteira de Trabalho <br/>
                                    (páginas correspondentes a identificação)
                                </ListGroup.Item>
                                <ListGroup.Item action className="text-dark">
                                    Título de Eleitor e comprovante da última votação
                                </ListGroup.Item>
                                <ListGroup.Item action className="text-dark">
                                    Certificado de reservista para brasileiro 
                                    que complete 19 anos e até 45 anos de idade 
                                    entre 1º de janeiro e 31 de dezembro do ano em que efetivar a matrícula
                                </ListGroup.Item>
                                <ListGroup.Item action className="text-dark">
                                    Comprovante de residência atualizado 
                                    (contas com CEP recebidas nos últimos 3 meses preferencialmente entregue pelos Correios)
                                </ListGroup.Item>
                                <ListGroup.Item action className="text-dark">
                                    Guarda Judicial - caso menor de 18 anos 
                                    e não resida com os responsáveis legais
                                </ListGroup.Item>
                                <ListGroup.Item action className="text-dark">
                                    Histórico Escolar do Ensino Médio - 
                                    para quem já concluiu o Ensino Médio
                                </ListGroup.Item>
                                <ListGroup.Item action className="text-dark">
                                    Declaração de Matrícula na escola regular 
                                    comprovando matrícula na 2ª ou 3ª série do 
                                    Ensino Médio original - para quem não concluiu o Ensino Médio
                                </ListGroup.Item>
                                <ListGroup.Item action className="text-dark">
                                    Cartão de Vacina 
                                    (Páginas identificação e vacinação) 
                                    para MENORES de 18 ANOS
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    </Container>
    )
    
}

export default CursoObjetivo