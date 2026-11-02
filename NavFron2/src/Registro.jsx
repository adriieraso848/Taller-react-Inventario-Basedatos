import { useNavigate } from "react-router-dom"

function Registro(){
    let navigate = useNavigate()
    function llevarLogin(){
        navigate("/")
    }
    return(
        <div>
            <h1>Registrarse</h1>
            <input type="text" placeholder="Escriba nombre completo" />
            <input type="text" placeholder="Escriba correo" />
            <input type="password" placeholder="Escriba password" />
            <button onClick={llevarLogin}>Registrarse</button>
        </div>
    )
}
export default Registro