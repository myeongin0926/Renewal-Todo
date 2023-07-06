import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Past from "./pages/Past";
import Today from "./pages/Today";

const RowDiv = styled.div`
  display: flex;
  height: 100vh;
  --light-border: #cecece;
  --active-color: #2c2c2c;
  --white: #fff;
  --bg-color: rgb(18, 18, 18);
  background-color: var(--bg-color);
`;

export default function App() {
  const [todos, setTodos] = useState({});

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    } else {
      setTodos({});
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const todoTextModify = (item, text) => {
    setTodos((prevTodos) => {
      const key = item.date;
      return {
        ...prevTodos,
        [key]: prevTodos[key].map((todo) => (todo.id !== item.id ? todo : { ...todo, text })),
      };
    });
  };
  const todoCheckedHandler = (item) => {
    setTodos((prevTodos) => {
      const key = item.date;
      return {
        ...prevTodos,
        [key]: prevTodos[key].map((todo) =>
          todo.id === item.id ? { ...todo, checked: !todo.checked } : todo
        ),
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
                <Today
                  todos={todos}
                  todoAdd={todoAddHandler}
                  todoDelete={todoDeleteHandler}
                  todoChecked={todoCheckedHandler}
                  todoModify={todoTextModify}
                />
              }
            />
            <Route path="/past" element={<Past />} />
          </Routes>
        </div>
      </RowDiv>
    </BrowserRouter>
  );
}
