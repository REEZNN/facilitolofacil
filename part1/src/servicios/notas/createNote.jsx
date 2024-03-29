import axios from "axios";

export const createNote = ({ title, body, userId }) => {
  return axios
    .post("https://jsonplaceholder.typicode.com/posts", { title, body, userId }) //
    .then((respuesta) => {
      const { data } = respuesta;
      return data;
    });
};
