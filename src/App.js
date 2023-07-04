import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Statistics from "./pages/Statistics";
import Past from "./pages/Past";
import Today from "./pages/Today";

const RowDiv = styled.div`
  display: flex;
  height: 100vh;
`;

export default function App() {
  const [todos, setTodos] = useState({});
  console.log(todos);
  const todoAddHandler = (item) => {
    const key = item.date;
    setTodos((prevTodos) => ({
      ...prevTodos,
      [key]: prevTodos[key] ? [...prevTodos[key], item] : [item],
    }));
  };

  const todoDeleteHandler = (item) => {
    setTodos((prevTodos) => {
      const key = item.date;
      return {
        ...prevTodos,
        [key]: prevTodos[key].filter((todo) => todo.id !== item.id),
      };
    });
  };

  return (
    <BrowserRouter>
      <RowDiv>
        <Header />
        <div style={{ flex: 1, height: "100vh" }}>
          <Routes>
            <Route
              path="/"
              element={
                <Today todos={todos} todoAdd={todoAddHandler} todoDelete={todoDeleteHandler} />
              }
            />
            <Route path="/past" element={<Past />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </div>
      </RowDiv>
    </BrowserRouter>
  );
}
