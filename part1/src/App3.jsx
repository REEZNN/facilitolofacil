const notes = [//siempre debe ser un array
  {
    id: 1,
    content: "HTML is easy",
    important: true,
    date:2024
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
    date:2023
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
    date:2022
  },
];

const App3 = () => {
  return (
    <div>
      {notes.map((note) => {
        // eslint-disable-next-line react/jsx-key
        return (<div>
          <p><strong>{note.content}</strong></p>
          <small><time>{note.date}</time></small>
          </div>
        )
      })}
    </div>
  );
};
export default App3;
