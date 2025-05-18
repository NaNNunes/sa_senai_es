import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useNavigate } from 'react-router-dom';

import SenaiLogo from "../../assets/senailogo.png";


// Importa o hook de usar um contexto
import { useContext } from "react";
// Importa o contexto de usuário
import { AuthContext } from "../../context/UserContext.jsx";

const BarraNav = () => {
  // Usa as variaveis do contexto de usuário
  const { usuarioNome, logout } = useContext(AuthContext);

  const userName = ''
  const navigate = useNavigate();

  return (
    <div>
        <Navbar 
          style={
            {
              background:"linear-gradient(to bottom, #1F29AC, #101F62)"
            }
          }
          expand="md"
          data-bs-theme="dark"
        >
            <Container>
              <Navbar.Toggle aria-controls='my-nav'/>
              <Navbar.Brand href='/home' style={{width:"10rem"}}>
                <img
                  src={SenaiLogo} alt="" width="100%"
                  style={{
                      boxShadow:"0px 2px 3px rgba(0,0,0, 0.2)"

                    }
                  }
                />
                </Navbar.Brand>
                <Navbar.Collapse id='my-nav'>
                <Nav className="me-auto">
                  <Nav.Link href='/quemsomos' className='fw-bold'>
                    Quem Somos
                  </Nav.Link>
                  <NavDropdown 
                    title="Cursos" 
                    id="cursos-dropdown" 
                    className='fw-bold'
                    menuVariant='dark'
                  >
                    <NavDropdown.Item href="#action/3.1">
                      iniciação Profissional
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Qualificação Profissional
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Especialização Profissional
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/home">
                      Curos Técnicos
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav className='justify-content-end'>
                  <Navbar.Text className='me-5'>
                      {usuarioNome}
                  </Navbar.Text>
                  {
                    usuarioNome === "Visitante" ? (
                      <>
                        <Button 
                          className='fw-bold text-uppercase shadow-sm '
                          style={{
                            backgroundColor:"#101F62", 
                            border:"1px solid rgb(255,255,255, .1)"
                          }}
                          href='/login'
                        >
                          Entrar
                        </Button>
                      </>
                    ) :(
                      <>
                        <Button 
                          className='fw-bold text-uppercase shadow-sm ms-3'
                          variant='danger'
                          href='/login'
                          onClick={logout}
                        >
                          Sair
                        </Button>
                      </>
                    )
                  }


                  
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default BarraNav