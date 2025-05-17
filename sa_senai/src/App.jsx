
import Container from "react-bootstrap/Container";

import BarraNav from './Componentes/navegacao/BarraNav'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <BarraNav/>
      <Container>
        <Outlet/>
      </Container>
    </div>
  )
}

export default App
