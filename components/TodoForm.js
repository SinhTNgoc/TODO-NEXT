import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: uuidv4(),
      name: input,
    });
    setInput("");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {!props.edit ? (
          <>
            <input
              type="text"
              placeholder="Add To Do"
              value={input}
              onChange={handleChange}
              ref={inputRef}
            />
            <button>Add</button>
          </>
        ) : (
          <>
            <input
              type="text"
              value={input}
              onChange={handleChange}
              ref={inputRef}
            />
            <button>Update</button>
          </>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
