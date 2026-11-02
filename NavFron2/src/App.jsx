import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"

  //componentes
import Login from "./Login"
import Registro from "./Registro"
import Dashboard from "./Dashboard"
import Nav from "./Nav"
import Productos from "./Productos"
import Contacto from "./Contacto"

function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/logeo" element={<Login></Login>}></Route>
        <Route path="/registro" element={<Registro></Registro>}></Route>
        <Route path="/dash" element={<Dashboard></Dashboard>}></Route>
        <Route path="/productos" element={<Productos></Productos>}></Route>
        <Route path="/contacto" element={<Contacto></Contacto>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
