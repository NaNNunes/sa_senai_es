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
          <header>
            <BarraNav/>
          </header>
          <section>
            <Container>
              <Outlet/>
            </Container>
          </section>
          <footer>
            <Footer/>
          </footer>
        </div>
      </AuthProvider>
    </>
  )
}

export default App
