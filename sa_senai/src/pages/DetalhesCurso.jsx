// componentes
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ObjetivoDocumentos from '../Componentes/cursoDetalhes-componentes/ObjetivoDocumentos.jsx';
import PreRequisitosConteudo from '../Componentes/cursoDetalhes-componentes/PreRequisitosConteudo.jsx';
import CardCursoDetalhado from '../Componentes/card-curso/CardCursoDetalhado.jsx';

// router-dom
import { useParams } from 'react-router-dom';

const DetalhesCurso = () => {
  const {id} = useParams(); 
  return (
    <Container>
      <Row className='d-flex flex-row-reverse'>
        <Col lg={6} xs={12}>
          <ObjetivoDocumentos
            id={id}
          />
        </Col>
        <Col lg={6} xs={12}>
            <CardCursoDetalhado
              id={id}
            />
            <PreRequisitosConteudo/>
        </Col>
      </Row>

      
    </Container>
  )
}

export default DetalhesCurso