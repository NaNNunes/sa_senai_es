// stilo
import styles from "./CursoCard.module.css";

// componentes
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { Link } from "react-router-dom";

const CursoCard = (props) => {
  return (
    <Container className={styles.container}>
        <Card className={styles.cardcontainer}>
            <Card.Header className={styles.cardheader}>
                <Card.Title className={styles.cursotitle}>
                    <Link 
                        to={`/cursos/${props.id}`} 
                        className={styles.name}
                    >
                        {props.nome}
                    </Link>
                </Card.Title>
                <Row 
                    className={styles.cursoimg} 
                    style={{background: `no-repeat center/100% url(${props.imgUrl})`}}/>
            </Card.Header>

            <Card.Body>
                <Row>
                    <Col xs={2}>
                        <div className={styles.localidade}>
                            {props.localidade}
                        </div>
                    </Col>
                    <Col className={styles.valores}>
                        <Row className={styles.total}>
                            <div>R$ {props.valorTotal}</div>
                        </Row>
                        <Row className={styles.parcela}>
                            <div>até {props.qtdParcelas}x de R$ {props.valorParcela}</div>
                        </Row>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <Link to={`/cursos/${props.id}`}>
                            <Button
                                as='input'
                                value={"Matricule-se"}
                                type='submit'
                                size='lg'
                                className={styles.btn}
                            />
                        </Link>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default CursoCard