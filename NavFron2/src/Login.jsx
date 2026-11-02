
import { useNavigate } from "react-router-dom"

function Login(){
    let navigate = useNavigate()
    function llevarDash(){
        navigate("/dash")
    }
    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Escriba correo" />
            <input type="password" placeholder="Escriba password" />
            <button onClick={llevarDash}>Aceptar</button>
        </div>
    )
}
export default Login