import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import senaiLogo from "../../assets/senailogo.png";

import instaIcon from "../../assets/icones/instaicon.png"
import ytIcon from "../../assets/icones/yticon.png"
import faceIcon from "../../assets/icones/faceicon.png"

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
                    <Col className="mb-2" xs={12} md={6}>
                        <Card.Text >
                            Desde 1952 qualificando pessoas para o setor industrial
                        </Card.Text>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Row className="m-auto">
                            <Col>
                                <img src={instaIcon} alt="" width="30px" className="mx-3"/>
                                <img src={faceIcon} alt="" width="30px" className="mx-3" />
                                <img src={ytIcon} alt="" width="30px" className="mx-3" />
                            </Col>
                            
                        </Row>
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
        <Row className="pt-3 text-center mt-5 fs-4 fw-semibold" style={{backgroundColor:"#1E29A8"}}>
            <Col>
                2025 - SENAI ES
            </Col>
        </Row>
        
    </footer>
  )
}

export default Footer