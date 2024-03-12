import ReactDOM from 'react-dom/client'
import App4 from './App4.jsx'
import './index.css'

const array = [//siempre debe ser un array (OBJETO)
//ejemplo:
  {userId:1,
    id: 1,
    title: "HTML is easy",
    body:2024
  },
  {userId:1,
    id: 2,
    title: "Browser can execute only JavaScript",
    body:2023
  },
  {userId:1,
    id: 3,
    title: "GET and POST are the most important methods of HTTP protocol",
    
    body:2022
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App4 notess={array}/>
    //se pasa al App4 el array atraves de la propiedad "notess"
    //"notess" es una propiedad que contiene el array  
)
