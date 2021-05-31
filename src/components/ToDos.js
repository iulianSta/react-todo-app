// ToDos function
const ToDos = (props) => {
  // Map Todos to assign a key with the index from each toDo
  // Determine an id for each toDo
  // Create a done and remove property for each toDo
  const userTodos = props.list.map((toDo, i) => (
    <li key={i}>
      <input
        type="checkbox"
        defaultChecked={toDo.done}
        onChange={() => props.check(toDo.id)}
      />
      {toDo.title}
      <i
        onClick={() => {
          props.remove(toDo.id);
        }}
      >
        🗑
      </i>
    </li>
  ));
  return <ul>{userTodos}</ul>;
};

export default ToDos;
