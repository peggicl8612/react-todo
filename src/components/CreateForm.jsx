import { useState } from "react";
import PropTypes from "prop-types";

function CreateForm({addTodo}) {
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止表單的預設行為
    addTodo(content);
    setContent('')
  };
  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}
CreateForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
}
export default CreateForm;

// 這個檔案是用來創建新的 Todo 的表單組件。
// 它使用了 useState 來管理輸入框的內容，並在表單提交時調用 addTodo 函數來添加新的 Todo。
// 這個組件的 props 包含一個 addTodo 函數，這個函數會在表單提交時被調用，並將輸入框的內容傳遞給它。
// 這樣可以讓父組件（TodoWrapper）來處理添加新的 Todo 的邏輯。
