import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import styles from "./Todo.module.css";

const Todo = ({ todos, completeTodo, deleteTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <>
      {todos.map((todo, index) => (
        <div key={index} className={styles.test1}>
          <div
            key={todo.id}
            onClick={() => completeTodo(todo.id)}
            className={`${todo.isComplete ? styles["completeToDo"] : styles["cursor"]}`}
          >
            {todo.name}
          </div>
          <div className={styles.test2}>
            <RiCloseCircleLine onClick={() => deleteTodo(todo.id)} />
            <TiEdit
              onClick={() =>
                setEdit({
                  id: todo.id,
                  value: todo.name,
                })
              }
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Todo;
