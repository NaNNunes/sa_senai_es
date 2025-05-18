import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import senaiLogo from "../../assets/senailogo.png";

const Footer = () => {
  return (
    <footer
        style={
            {
                margin:"17vh 0 0",
                padding:"1rem",
                backgroundImage:"linear-gradient(to bottom, #46BED6, #1F29AC)",
                color:'white'
            }
        }
    >
        
        <Container>
            <Card.Footer className="100 px-5">
            
            
                <Row className="fst-italic my-2">
                    <Col className="m-auto">
                        <Row className="">
                            <Col xs="12" sm="4" md="3">
                                <img src={senaiLogo} alt="" width='100%'/>
                            </Col>
                            <Col className="fs-5 fw-bold">
                                Serviço Nacional de Aprendizagem Industrial
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="my-2">
                    <Col className="">
                        <Card.Text >
                            Desde 1952 qualificando pessoas para o setor industrial
                        </Card.Text>
                    </Col>
                    <Col>
                        
                    </Col>
                </Row>
            
                <Row className="mt-3 text-center">
                    <Col>
                        <Card.Subtitle>
                            SAC - Serviço de Atendimento ao Cliente
                        </Card.Subtitle>
                    </Col>
                </Row>
            
            </Card.Footer>
        </Container>
        
    </footer>
  )
}

export default Footer