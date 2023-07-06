import React from "react";
import TodoItem from "./TodoItem";
import { styled } from "styled-components";
import { StyleWarning } from "../../core/Warning";
import { AiOutlineFire } from "react-icons/ai";

const TodoContainer = styled.div`
  height: 58%;
  overflow: auto;
  margin-top: 45px;
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
    justify-content: center;
  }
`;

export default function TodoList({ todos, todoDelete, todoChecked, date, filter, todoModify }) {
  let filteredTodos = todos[date];
  if (filter === "Completed") {
    filteredTodos = filteredTodos.filter((el) => el.checked === true);
  } else if (filter === "Incomplete") {
    filteredTodos = filteredTodos.filter((el) => !el.checked);
  }

  return (
    <TodoContainer>
      <ul>
        {filteredTodos?.length ? (
          filteredTodos.map((el) => (
            <TodoItem
              key={el.id}
              todo={el}
              todoDelete={todoDelete}
              todoChecked={todoChecked}
              todoModify={todoModify}
            />
          ))
        ) : (
          <StyleWarning>
            <AiOutlineFire size={100} />
            <h3>오늘은 무엇을 하실건가요?</h3>
          </StyleWarning>
        )}
      </ul>
    </TodoContainer>
  );
}
