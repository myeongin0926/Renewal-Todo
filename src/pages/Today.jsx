import React, { useState, useEffect } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { StyleSection } from "../core/Section";
import { styled } from "styled-components";

export default function Today({ todos, todoAdd, todoDelete }) {
  return (
    <StyleSection>
      <TodoList todos={todos} todoDelete={todoDelete} />
      <TodoInput todoAdd={todoAdd} />
    </StyleSection>
  );
}

//   const [time, setTime] = useState(0);
//   const [timer, setTimer] = useState(null);

//   const timeStart = () => {
//     const newTimer = setInterval(() => {
//       setTime((prevTime) => prevTime + 1);
//     }, 1000);
//     setTimer(newTimer);
//   };

//   const timeStop = () => {
//     clearInterval(timer);
//     setTimer(null);
//   };

//   useEffect(() => {
//     return () => {
//       clearInterval(timer);
//     };
//   }, [timer]);
