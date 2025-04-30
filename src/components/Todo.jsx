import PropTypes from "prop-types";

function Todo({todo}) {
  return (
    <div className="todo">
      <p>{todo.content}</p>
    </div>
  );
}

Todo.propTypes = {
    todo: PropTypes.func.isRequired,
}

export default Todo; 
