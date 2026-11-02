import { useState } from "react"

function Productos(){
    const [nombre, setNombre] = useState("")
    const [categoria, setCategoria] = useState("")
    const [precio, setPrecio] = useState("")
    const [cantidad, setCantidad] = useState("")

    const [productos,setProductos] = useState([])

    async function guardar(){
        let respuesta = await fetch("http://localhost:5000/productos",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                categoria: categoria,
                precio: precio,
                cantidad: cantidad
            })
        })
        let datos = await respuesta.json()
        alert(datos.mensaje)

        consultar()
    }

    async function consultar(){
        let respuesta = await fetch("http://localhost:5000/productos",{
            method: "GET"
        })

        let datos = await respuesta.json()
        setProductos(datos)
    }

    return(
        <div>
            <h1>Formulario Productos</h1>

            <input type="text" placeholder="Escriba nombre del producto" onChange={(e)=>setNombre(e.target.value)}/>
            <input type="text" placeholder="Escriba categoria" onChange={(e)=>setCategoria(e.target.value)}/>
            <input type="text" placeholder="Escriba precio" onChange={(e)=>setPrecio(e.target.value)}/>
            <input type="text" placeholder="Escriba cantidad" onChange={(e)=>setCantidad(e.target.value)}/>

            <button onClick={guardar}>Aceptar</button> <br />
            <button onClick={consultar}>Consultar Productos</button> <br />

            <br /><h2>Lista de Productos</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>

                <tbody>
                    {productos.map((producto, index)=>(
                        <tr key={index}>
                            <td>{producto.nombre}</td>
                            <td>{producto.categoria}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.cantidad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Productos