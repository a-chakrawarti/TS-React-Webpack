import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  //   debugger;

  interface ITodo {
    text: string;
    complete: boolean;
  }
  // <ITodo[]> : Array of interface(object) ITodo
  const [todos, setTodos] = useState<ITodo[]>([]);

  type FormElem = React.FormEvent<HTMLFormElement>;
  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text: string): void => {
    const newTodo: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodo);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos); 
  };
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      <section>
        {todos.map((item: ITodo, index: number) => (
          <div key={index}>
            <p style={{ textDecoration: item.complete ? "line-through" : "" }}>
              {item.text}
            </p>
            <button type="button" onClick={() => completeTodo(index)}>
              {item.complete ? "Undone" : "Done"}
            </button>
            <button type="button" onClick={() => removeTodo(index)}>
              Remove
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
