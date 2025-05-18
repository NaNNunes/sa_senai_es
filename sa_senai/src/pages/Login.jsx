
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

// Importando o hook useState para monitorar a mudança das variáveis
import { useState, useEffect } from "react";

//Importação do navigate pra transitar entre páginas
import { useNavigate } from "react-router-dom";

// Importando o hook useForm do react-hook-form
import { useForm } from "react-hook-form";

// Importando o hook useVerificaLogin
import { useVerificaLogin } from "../hook/useApi.js";

// Importa o hook de usar um contexto
import { useContext } from "react";
// Importa o contexto de usuário
import { AuthContext } from "../context/UserContext.jsx";

const Login = () => {
  // Usa as variaveis do contexto de usuário
  const { logout } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Criando o navigate
  const navigate = useNavigate();

  // Usando a funcao VerificaLogin do hook de verificacao
  const { verificaLogin } = useVerificaLogin();

  // funcao pra caso de sucesso na validacao do formulario
  // data é o objeto com os campos do formulário
  const onSubmit = (data) => {
    console.log("Dados:", data);

    // envia data para o hook de verificacao de login e guarda a reposta na variavel res
    const res = verificaLogin(data);

    // caso a resposta seja de sucesso, redireciona para a pagina home
    if (res === "Login efetuado com sucesso") {
      alert("Login efetuado com sucesso");
      navigate("/home");
    } 
    
    // caso a resposta seja de erro, mostra a mensagem retornada para o alerta
    else {
      alert(res);
    }
  };

  //Caso tenha erro no formulario, mostra mensagens de erro nos campos 
  const onError = (errors) => {
    console.log("Erros:", errors);
  };

  // Assim que entrar nessa página, o localStorage é resetado
  useEffect(() => {
    //Resetar localstorage
    logout()
  }, []);

  return (
    <div>
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
                <Form onSubmit={handleSubmit(onSubmit, onError)}>
                  <FloatingLabel
                    className='mb-3'
                    id='userEmailInput'
                    label='Email'
                  >
                    <Form.Control
                      type='email'
                      placeholder=''
                      {
                        ...register("email")
                      }
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
                        {
                          ...register("senha")
                        }
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
    </div>
  )
}

export default Login