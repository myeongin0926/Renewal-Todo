import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import { AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";
import { GoPencil } from "react-icons/go";

const TodoItemContainer = styled.li`
  width: 32.6%;
  height: 220px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  gap: 15px;
  flex-direction: column;
  border: 1px solid var(--light-border);
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;

  input {
    display: none;
  }

  span {
    font-size: 18px;
    flex: auto 0.6;
    padding: 0 1rem;
  }

  .postIcons {
    display: flex;
    justify-content: space-between;
    width: 100%;

    label,
    button {
      opacity: 0.5;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    button:hover,
    label:hover {
      opacity: 1;
    }
  }

  &.complete {
    label {
      background-color: #4dff4d;
      color: white;
      opacity: 1;
      border-radius: 3px;
    }
  }

  &:hover {
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  }
`;

const ModifyBox = styled.form`
  height: 100px;
  top: 0;
  background-color: #ffffff;
  flex: 0.7;

  input {
    display: block;
    width: 300px;
    height: 40px;
    padding-left: 3px;
    font-size: 20px;
    border: 1px solid var(--light-border);
    text-align: center;
  }

  button {
    width: 300px;
    height: 50px;
    margin-top: 10px;
    background-color: var(--active-color);
    color: white;
  }
`;

export default function TodoItem({ todo, todoDelete, todoChecked, todoModify }) {
  const [modify, setModify] = useState(false);
  const [text, setText] = useState(todo.text);
  const inputRef = useRef(null);
  console.log('TodoItem실행')
  useEffect(() => {
    if (modify) {
      inputRef.current.focus();
    }
  }, [modify]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text) {
      todoModify(todo, text);
      setModify(false);
    } else {
      alert("텍스트를 입력해주세요");
      inputRef.current.focus();
    }
  };

  return (
    <TodoItemContainer className={`${todo.checked ? "complete" : ""}`}>
      <div className="postIcons">
        <input
          type="checkbox"
          checked={todo.checked}
          id={todo.id}
          onChange={() => todoChecked(todo)}
        />
        <label htmlFor={todo.id}>
          <AiOutlineCheck size={27} />
        </label>
        {!modify && (
          <button onClick={() => setModify(true)}>
            <GoPencil size={27} />
          </button>
        )}
        <button onClick={() => todoDelete(todo)}>
          <AiOutlineDelete size={27} />
        </button>
      </div>
      {!modify ? (
        <span>{text}</span>
      ) : (
        <ModifyBox onSubmit={onSubmitHandler}>
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={30}
          />
          <button>수정</button>
        </ModifyBox>
      )}
    </TodoItemContainer>
  );
}
