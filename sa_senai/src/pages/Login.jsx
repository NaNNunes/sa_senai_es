
import Container  from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel  from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import LogoSenai from '../assets/senailogo.png';

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container>
      <Col md={10} lg={9} xl={8} className='m-auto'>
        <Card
          style={{backgroundColor:'#1F29AC', color:"white"}}
          className='p-2 pb-3 mx-auto mt-5 text-center shadow rounded-4'
        >
          <Card.Header style={{border:'none'}}>
            <Row className='fs-1 fw-bold mb-1'>
              <Col style={{textShadow:'1px 2px 3px black'}}>
                Bem-vindo
              </Col>
              <Col>
                <Link to='/home'>
                  <img src={LogoSenai} alt="" width='70%'/>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md={6}>Acesse sua conta</Col>
            </Row>
          </Card.Header>
          <Row>
            <Col md={6}>
              <Card.Body
                style={{backgroundColor:'white'}}
                className='rounded-1'
              >
                <Form>
                  <FloatingLabel
                    className='mb-3'
                    id='userEmailInput'
                    label='Email ou CPF'
                  >
                    <Form.Control
                      type='email'
                      placeholder=''
                    />
                  </FloatingLabel>
                  <InputGroup className="mb-3">
                    <FloatingLabel
                      id='userPassInput'
                      label="Senha"
                    >
                      <Form.Control
                        type='password'
                        placeholder=''
                      />
                    </FloatingLabel>
                    {/* add show pass */}
                  </InputGroup>
                  <Row className='mb-3 text-end'>
                      <Link className='fw-bold text-decoration-none fs-5' style={{color:'#1F29AC'}}>
                        Esqueceu a senha?
                      </Link>
                  </Row>
                    <Button
                      as='input' value='Entrar' type='submit' size='lg'
                      className='w-100 p-3 text-uppercase fw-bold'
                      style={{backgroundColor:'#101F62', borderColor:"white"}}
                    />
                </Form>
              </Card.Body>
            </Col>
                <Col>
                  <Row className='text-start mx-1 mt-2 mb-1'>
                    <Col>
                      Não tem Cadastro?
                    </Col>
                  </Row>
                  <Row className='mb-3 mx-2'>
                    <Link to='/cadastre-se'>
                      <Button
                        as='input' value='Cadastre-se' type='submit' size='lg'
                        className='w-100 p-3 text-uppercase fw-bold'
                        style={{background:'linear-gradient(to right, #FC5707 50%, #F2AB13)', border:'none'}}
                      />
                    </Link>
                  </Row>
            </Col>
          </Row>
        </Card>
      </Col>
    </Container>
  )
}

export default Login