import { useState, useEffect } from "react";
import { Note } from "./Note.jsx";
import axios from "axios";

const App5 = (props) => {
  // props es un objeto para poder acceder a todas las propiedades del componente App4 cuando es llamado desde el main

  //"notess" es la propiedad que tiene App4 (se utiliza props.notes para acceder a la propiedad "notess" que contiene el array)

  // eslint-disable-next-line react/prop-types
  const [notes, setNotes] = useState([props.notess]); //accede y actualiza las variables que esta en el array del main
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    // Sirve para no hacer un render infinito, es un HOOK

    axios
      .get("https://jsonplaceholder.typicode.com/posts") 
      .then((respuesta) => {//lo que obtiene lo tramsforma en JSON por defecto
        //cuanto ya tengo la respuesta haz algo
        const { data } = respuesta;
        setNotes(data);
      });
  }, []); //el [] es para que se ejecute la 1ra vez nomas ya que seria un bucle infinito

  const handleChange = (event) => {
    //evalua lo que contiene la caja
    setNewNote(event.target.value);
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    console.log("crear nota");

    const noteToAddTostate = {
      title: newNote,
      body: newNote,
      userId:1
    };
    
    axios
    .post('https://jsonplaceholder.typicode.com/posts', noteToAddTostate) //
    .then(respuesta =>{
        const {data} = respuesta;
        setNotes(prevNotes=>prevNotes.concat(data)) 
        //concatenar las notas previas con las notas nuevas creadas
    })
    setNewNote("");
  };

  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {notes.map(
          (
            parametro //el parametro es un objeto para acceder a la informacion
          ) => (
            <Note key={parametro.id} {...parametro} />
          )
        )}
      </ol>
      <form onSubmit={handleSumbit}>
        <input type="text" onChange={handleChange} value={newNote}></input>
        <button>Crear Nota</button>
      </form>
    </div>
  );
};
export default App5;
