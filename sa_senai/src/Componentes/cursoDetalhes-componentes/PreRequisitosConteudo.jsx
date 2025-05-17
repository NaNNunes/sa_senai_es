import {Col, Row, Card, Container, ListGroup} from "react-bootstrap";

import cardStyle from "./conteudoCards.module.css"

import personIcon from "../../assets/icones/personicon.png";
import conteudoIcon from "../../assets/icones/conteudoicon.png";

const PreRequisitosConteudo = () => {
  return (
    <div>
      <Container>
        <Card className={cardStyle.cardcontent}>
          <Row>
            <Col xs={1} className={cardStyle.iconesubtitle}>
              <img src={personIcon} width="70px"/>
            </Col>
            <Col className={cardStyle.subtitlecontent}>
              <Card.Title className={cardStyle.subtitle}>
                Pré-Requisitos
              </Card.Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <ListGroup variant="flush" className={cardStyle.lista}>
                <ListGroup.Item action className="text-dark">
                    Ter acesso à internet
                </ListGroup.Item>
                <ListGroup.Item action className="text-dark">
                    Ter idade mínima de 16 anos completos
                </ListGroup.Item>
                <ListGroup.Item action className="text-dark">
                        Estar matriculado no 2º ano do ensino médio OU
                        ter concluído o ensino médio OU
                        estar matriculado na Educação de Jovens e Adultos (EJA) nível médio
                        OU ter sido aprovado em disciplinas de exames de massa de nível médio
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card>

        <Card className={cardStyle.cardcontent}>
          <Row>
            <Col xs={1} className={cardStyle.iconesubtitle}>
              <img src={conteudoIcon} width="70px"/>
            </Col>
            <Col className={cardStyle.subtitlecontent}>
              <Card.Title className={cardStyle.subtitle}>
                Conteúdo
              </Card.Title>
            </Col>
          </Row>
          <Card.Body className={cardStyle.texto}>
            <Card.Text>
              Este curso possui 80% de carga horária na modalidade de ensino presencial
              e 20% para ensino a distância
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default PreRequisitosConteudo