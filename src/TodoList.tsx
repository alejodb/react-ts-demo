import React from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [newTodo, setNewTodo] = React.useState<string>("");

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                setTodos(
                  todos.map((t) =>
                    t.id === todo.id ? { ...t, completed: !t.completed } : t
                  )
                )
              }
            />
            <span>{todo.task}</span>
            <button onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={() => {
        if (newTodo) {
          setTodos([
            ...todos,
            { id: Date.now(), task: newTodo, completed: false },
          ]);
          setNewTodo("");
        }
      }}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoList;