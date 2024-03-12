import { useState, useEffect } from "react";
import {Note} from "./Note.jsx"

const App4 = (props) => { // props es un objeto para poder acceder a todas las propiedades del componente App4 cuando es llamado desde el main
    
    //"notess" es la propiedad que tiene App4 (se utiliza props.notes para acceder a la propiedad "notess" que contiene el array) 

    // eslint-disable-next-line react/prop-types
    const [notes,setNotes]=useState([props.notess]); //accede y actualiza las variables que esta en el array del main
    const [newNote,setNewNote]=useState("");

    useEffect (() => {// Sirve para no hacer un render infinito, es un HOOK

        fetch("https://jsonplaceholder.typicode.com/posts")//fetch devuelve una promesa
        .then((respuesta) =>respuesta.json()) //esta respuesta transformala en un JSON
        .then((json) => { //cuanto ya tengo el JSON haz algo
        setNotes(json)
        })
        }, []) //el [] es para que se ejecute la 1ra vez nomas ya que seria un bucle infinito

        
    const handleChange=(event)=>{//evalua lo que contiene la caja
        setNewNote(event.target.value);
    }

    const handleSumbit=(event)=>{
        event.preventDefault()
        console.log("crear nota")
        const noteToAddTostate={
            id:notes.length +1,
            title:newNote,
            body:newNote
        }

        setNotes((prevNotes)=>{prevNotes.concat(noteToAddTostate)});
        setNewNote("");
    }

  return (
    <div>
        <h1>Notes</h1>
        <ol>
            {notes.map((parametro)=>(//el parametro es un objeto para acceder a la informacion
                <Note key={parametro.title} {...parametro}/>
            ))}
        </ol>
        <form onChange={handleSumbit}>

            <input type="text" onChange={handleChange}></input>
            <button>Crear Nota</button>
        </form>
    
    </div>
  );
}
export default App4;
