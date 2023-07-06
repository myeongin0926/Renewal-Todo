import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import PastTodoItem from "./PastTodoItem";
import { RiEmotionUnhappyLine, RiEmotionHappyLine } from "react-icons/ri";
const StyleDateTodo = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  h2 {
    font-size: 30px;
    color: #3e3e3e;
    letter-spacing: 3px;
  }
  h3 {
    font-size: 23px;
    color: #313131;
    padding: 2rem 0;
    margin-top: 50px 0;
  }
`;
const StyleTodoListBox = styled.ul`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
const StyleInfo = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: #929292;
  flex-direction: column;
  gap: 20px;
`;

export default function PastTodoList({ date, todos }) {
  const choiceDateTodo = todos[date] || [];
  const completeTodo = choiceDateTodo.filter((el) => el.checked);
  const inCompleteTodo = choiceDateTodo.filter((el) => !el.checked);
  return (
    <StyleDateTodo>
      <h2>{date}</h2>
      <h3>Complete</h3>
      <StyleTodoListBox>
        {completeTodo.length ? (
          completeTodo.map((item, i) => <PastTodoItem key={i} item={item} />)
        ) : (
          <StyleInfo>
            <RiEmotionUnhappyLine size={40} />
            {inCompleteTodo.length ? "다음에는 완료해봐요!" : "데이터가 없습니다"}
          </StyleInfo>
        )}
      </StyleTodoListBox>
      <h3>Incomplete</h3>
      <StyleTodoListBox>
        {inCompleteTodo.length ? (
          inCompleteTodo.map((item, i) => <PastTodoItem key={i} item={item} />)
        ) : (
          <StyleInfo>
            {completeTodo.length ? (
              <>
                <RiEmotionHappyLine size={40} />
                모두 완료하셨군요!
              </>
            ) : (
              <>
                <RiEmotionUnhappyLine size={40} />
                데이터가 없습니다
              </>
            )}
          </StyleInfo>
        )}
      </StyleTodoListBox>
    </StyleDateTodo>
  );
}
