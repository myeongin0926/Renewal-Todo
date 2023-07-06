import React from "react";
import { styled } from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { formattedDate } from "../../core/formattedDate";
const StyleForm = styled.form`
  position: absolute;
  bottom: 80px;
  width: calc(100% - 140px);
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  input {
    width: 100%;
    height: 80px;
    border: 1px solid var(--light-border);
    font-size: 23px;
    padding-left: 20px;
    transition: 0.2s;
    border-radius: 5px;
    position: relative;
  }
  label {
    font-size: 25px;
    position: absolute;
    top: 27px;
    left: 20px;
    color: #727272;
    background-color: white;
    border-radius: 10px;
    transition: all.2s;
    padding: 0 5px;
  }

  input:valid,
  input:focus {
    border: 1px solid var(--active-color);
  }
  input:focus + label,
  input:valid + label {
    top: -15px;
    padding: 0 5px;
    opacity: 1;
    color: var(--active-color);
  }
  button {
    cursor: pointer;
    border-radius: 5px;
    opacity: 0.7;
    transition: all.2s;
    background-color: var(--active-color);
    font-size: 22px;
    color: white;
    width: 100%;
    padding: 20px;
    height: 70px;
  }
  button.active {
    opacity: 1;
  }
`;

export default function TodoInput({ todoAdd }) {
  console.log("TodoInput실행");

  const [text, setText] = useState("");
  const inputTextHandler = (e) => {
    setText(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const uuid = uuidv4();

    todoAdd({ id: uuid, text, date: formattedDate(new Date()), checked: false });
    setText("");
  };
  return (
    <StyleForm onSubmit={onSubmitHandler}>
      <input
        onChange={inputTextHandler}
        value={text}
        type="text"
        id="todo"
        required=" "
        maxLength={40}
      />
      <label htmlFor="todo">To do</label>
      <button className={text !== "" ? "active" : ""}>등록</button>
    </StyleForm>
  );
}
