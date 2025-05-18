import { Outlet } from 'react-router-dom'

import Container from "react-bootstrap/Container";

import BarraNav from './Componentes/navegacao/BarraNav'

import { AuthProvider } from "./context/UserContext.jsx";
import Footer from './Componentes/footer/Footer.jsx';

function App() {
  return (
    <>
      <AuthProvider>
        <div>
          <BarraNav/>
          <Container>
            <Outlet/>
          </Container>
          <Footer/>
        </div>
      </AuthProvider>
    </>
  )
}

export default App
