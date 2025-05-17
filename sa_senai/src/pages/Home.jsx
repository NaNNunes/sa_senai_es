import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import CursoCard from '../Componentes/card-curso/CursoCard.jsx';

// hooks
import { useListaCursos } from '../hook/useApi.js'

const Home = () => {
  
  const cursos = useListaCursos();

  return (
    <Container>
        <Row>
          {cursos.map((curso) =>(
              <Col key={curso.id} xxl={4} xl={6} lg={6} md={10} className='m-auto'>
                <CursoCard
                  key={curso.id}
                  id={curso.id}
                  nome={curso.nome}
                  localidade={curso.localidade}
                  valorTotal={curso.valorTotal}
                  valorParcela={curso.valorParcela}
                  qtdParcelas={curso.qtdParcelas}
                  imgUrl={curso.imgUrl}
                />
              </Col>
            ))}
        </Row>
    </Container>
  )
}

export default Home