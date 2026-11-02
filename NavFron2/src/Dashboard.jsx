import { useNavigate } from "react-router-dom"

function Dashboard(){
    let navigate = useNavigate()
    function llevarDash(){
        navigate("/productos")
    }
    function llevarContacto(){
        navigate("/contacto")
    }
    return(
        <div>
            <h1>Bienvenido Al Inventario</h1>
            <button onClick={llevarDash}>Ir a Productos</button> <br />
            <button onClick={llevarContacto}>Canales de atención</button>
        </div>
    )
}
export default Dashboard