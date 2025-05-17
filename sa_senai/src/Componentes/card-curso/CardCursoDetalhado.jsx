import { useState, useEffect } from "react";

// react-bootstraps componentes
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import styles from "./CursoCard.module.css";

import { useBuscaCursoPorId } from "../../hook/useApi";

// importar hook para localizar as infos do curso pelo id

const CardCursoDetalhado = (props) => {
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
    <div>
        <Container className={styles.container}>
            <Card className={styles.cardcontainer} style={{marginTop:"1rem"}}>
                <Card.Header className={styles.cardheader}>
                    <Card.Title className={styles.name}>
                        {curso.nome}
                    </Card.Title>
                    <Row
                        className={styles.cursoimg}
                        style={
                            {
                                background:`no-repeat center/100% url(${curso.link2Detalhes})`,
                                filter:"brightness(50%)"
                            }
                        }
                    />
                </Card.Header>

                <Card.Body className='text-center'>
                   
                    <Row>
                        
                        <Col xl={8} lg={10} md={7} sm={10} xs={10} 
                         className='m-auto mb-2 d-flex flex-wrap justify-content-around'>
                            
                                <div className={styles.localidade}>
                                    {curso.localidade}
                                </div>
                                <div className={styles.duracao}>
                                    {curso.duracao}
                                </div>
                                <div className={styles.turno}>
                                    {curso.turno}
                                </div>
                                <div className={styles.modalidade}>
                                    {curso.modalidade}
                                </div>
                                <div className={styles.data}>
                                    {curso.data}
                                </div>
                                <div className={styles.valortotalcontainer}>
                                    <div style={{color:"#F2AB13"}}>
                                        R$ {curso.valorTotal}
                                    </div>
                                </div>
                        </Col>
                                    
                        <Row>
                            <Col className={styles.parcela}>
                                até {curso.qtdParcelas}x de R$ {curso.valorParcela}
                            </Col>
                        </Row>
                    </Row>

                    <Row>
                        <Col>
                            <Button
                                as='input'
                                value="Matricule-se"
                                type='submit'
                                size='lg'
                                className={styles.btn}
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}

export default CardCursoDetalhado