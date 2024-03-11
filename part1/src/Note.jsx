// eslint-disable-next-line react/prop-types
export const Note = ({ title, body }) => {
  return (
    <li>
      <p>{title}</p>
      <small>{body}</small>
    </li>
  );
};
