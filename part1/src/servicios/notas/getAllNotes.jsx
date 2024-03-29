import axios from "axios";

export const getAllNotes = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((respuesta) => {
      //lo que obtiene lo tramsforma en JSON por defecto
      //cuanto ya tengo la respuesta haz algo
      const { data } = respuesta; //destructurando la respuesta del objeto  se extrae la propiedad 'data'
      return data;
    });
};
