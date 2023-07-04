import React, { useState, useEffect } from "react";
import { formattedDate } from "../core/formattedDate";
import TodoItem from "./TodoItem";
import { styled } from "styled-components";

const StyleTodoContainer = styled.div`
  position: absolute;
  width: 1300px;
  height: 55vh;
  right: 0;
  top: 0;
  bottom: 50px;
  left: 0;
  margin: auto;
`;

export default function TodoList({ todos, todoDelete }) {
  const date = formattedDate();
  const [todayTodos, setTodayTodos] = useState([]);
  useEffect(() => {
    setTodayTodos(todos[date]);
  }, [todos, date]);

  return (
    <StyleTodoContainer>
      {todayTodos ? todayTodos.map((el) => <TodoItem key={el.id} todo={el} />) : <div>ㅈㅅ</div>}
    </StyleTodoContainer>
  );
}
