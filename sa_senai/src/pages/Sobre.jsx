import React from 'react'

import Container from 'react-bootstrap/Container';
import { Col,Row } from 'react-bootstrap';

import SetentaAnos from '../Componentes/sobre-senai/SetentaAnos';
import Historia from '../Componentes/sobre-senai/Historia';

const Sobre = () => {
  return (
    <Container>
      <Row className='flex-row-reverse'>
        <Col md={12} lg={6}>
          <Historia/>
        </Col>
        <Col md={12} lg={6}>
          <SetentaAnos/>
        </Col>
      </Row>
    </Container>
  )
}

export default Sobre