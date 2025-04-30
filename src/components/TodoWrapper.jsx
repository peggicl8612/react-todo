import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([
    // 通常使用資料庫裡的 id
    { content: "swipe1", id: Math.random() },
    { content: "swipes", id: Math.random() },
  ]);

  const addTodo = (content) => {
    // ... 是其餘運算子，將陣列、物件的內容展開
    setTodos([...todos, { content: content, id: Math.random() }]);
  };

  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <CreateForm addTodo={addTodo}/>
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default TodoWrapper;
