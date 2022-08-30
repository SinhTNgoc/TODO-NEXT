import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("Todos")) || []);
  }, []);

  const addToDo = (todo) => {
    if (!todo.name) {
      return;
    }

    setTodos((prev) => {
      const newTodos = [todo, ...prev];
      localStorage.setItem("Todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    console.log(updateTodos);
    setTodos(updateTodos);
  };

  const deleteTodo = (id) => {
    const removeArr = [...todos.filter((todo) => todo.id !== id)];
    localStorage.setItem("Todos", JSON.stringify(removeArr));
    setTodos(removeArr);
  };

  const updateTodo = (id, newValue) => {
    if (!newValue.name) {
      return;
    }
    const updateTodos = todos.map((item) => (item.id === id ? newValue : item));
    localStorage.setItem("Todos", JSON.stringify(updateTodos));
    setTodos((prev) => prev.map((item) => (item.id === id ? newValue : item)));
  };
  return (
    <div className={styles.center}>
      <h1>To do ....</h1>
      <TodoForm onSubmit={addToDo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
