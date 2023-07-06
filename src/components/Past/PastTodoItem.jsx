import React from "react";
import { styled } from "styled-components";

const StyleItem = styled.li`
  font-size: 20px;
  padding: 20px;
  background-color: #ff000020;
  border-radius: 2px;
  &.complete {
    background-color: #00ff0025;
  }
`;

export default function PastTodoItem({ item }) {
  return <StyleItem className={item.checked ? "complete" : ""}>{item.text}</StyleItem>;
}
