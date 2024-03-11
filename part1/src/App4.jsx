import { useState, useEffect } from "react";
import {Note} from "./Note.jsx"

const App4 = (props) => {
    // eslint-disable-next-line react/prop-types
    const [notes,setNotes]=useState([props.notes]);
    const [newNote,setNewNote]=useState("");

    useEffect (() => {
        console.log("useEffect"); 
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) =>response.json())
        .then((json) => {
        setNotes(json)
        })
        }, [])

        
    const handleChange=(event)=>{
        setNewNote(event.targert.value);
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
            {notes.map((note)=>(
                <Note key={note.title}{...note}/>
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
