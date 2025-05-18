import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import senaiLogo from "../../assets/senailogo.png";

const Footer = () => {
  return (
    <div 
        style={
            {
                margin:"20vh 0 0",
                padding:"1rem",
                backgroundImage:"linear-gradient(to bottom, #46BED6, #1F29AC)",
                color:'white'
            }
        }
    >
        
        <Card.Footer className="">
            
            
            <Row className="fst-italic my-2">
                <Col className="m-auto d-flex justify-content-center">
                    <Row className="d-flex justify-content-around">
                        <Col xs="5" sm="4" md="3">
                            <img src={senaiLogo} alt="" width='100%'/>
                        </Col>
                        <Col className="fs-5 fw-bold">Serviço Nacional de Aprendizagem Industrial</Col>
                    </Row>
                </Col>
            </Row>
            <Row className="my-2"> 
                <Col className="m-auto">
                    <Card.Text >
                        Desde 1952 qualificando pessoas para o setor industrial
                    </Card.Text>
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <Card.Subtitle>
                        SAC - Serviço de Atendimento ao Cliente
                    </Card.Subtitle>
                </Col>
            </Row>

            

        </Card.Footer>
        
    </div>
  )
}

export default Footer