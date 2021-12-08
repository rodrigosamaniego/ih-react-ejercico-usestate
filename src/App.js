//imports
import './App.css';
import React, {useState} from 'react';//-> import de react con useState


function App() {
  //A definir nueva respuesta
  const [respuesta, setRespuesta] = useState({
    emotion: "",
    description: ""
  })

  //B Listado de comentarios
  const[listadoRespuestas, setListRespuestas] = useState([

  ])

  console.log(respuesta)


  //Funciones del componente
  const capturarDatos = (e) => {
    console.log(e)
    console.log(e.target.value)
   
  




  return setRespuesta({
    ...respuesta,
    [e.target.name]: e.target.value
  })
}

//CRUD
//Crear
const agregarRespuesta = (e) => {
  e.preventDefault()
  setListRespuestas([
    ...listadoRespuestas,
    respuesta
  ])

  setRespuesta({
    emotion: "",
    description: ""
  })
}

//3 Retorno
return (
  <>
    <h2>Perdieron los pumas</h2>
    <form onSubmit={(event) => {agregarRespuesta(event)}}>
      <h2>¿Cómo te sientes?</h2>
      <input
        name="emotion"
        value={respuesta.emotion}
        onChange={(event) => {capturarDatos(event)}}
      />
      <h3>¿Por qué?</h3>
      <input
        name="description"
        value={respuesta.description}
        onChange={ (event) => capturarDatos(event)}
      />
      <br />
      <br />
      <button>Añadir respuesta</button>
    </form>

    <hr />
    <h2>Cómo se siente la gente</h2>
    {
      listadoRespuestas.map((elem) => {
        return(
          <>
            <h4>{elem.emotion}</h4>
            <p>{elem.description}</p>
          </>
        )
      })
    }
      
  </>
)
}

export default App;
