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

const BarraNav = () => {
  const userName = ''
  const navigate = useNavigate();
  const onClick = () =>{
    navigate('/login');
  }

  return (
    <div>
        <Navbar 
          style={
            {
              background:"linear-gradient(to bottom, #1F29AC, #101F62)"
            }
          }
          expand="sm"
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
                  <Navbar.Text>
                      {
                        // to show the user name
                        userName === "" && null
                      }    
                  </Navbar.Text>
                  <Button 
                    className='fw-bold text-uppercase shadow-sm'
                    style={{
                      backgroundColor:"#101F62", 
                      border:"1px solid rgb(255,255,255, .1)"
                    }}
                    onClick={onClick}
                  >
                    Entrar
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default BarraNav