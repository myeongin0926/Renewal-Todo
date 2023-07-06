import React, { useState } from "react";
import TodoInput from "../components/Today/TodoInput";
import TodoList from "../components/Today/TodoList";
import { StyleSection } from "../core/Section";
import { formattedDate } from "../core/formattedDate";
import FilterListButtons from "../components/Today/FilterListButtons";
export default function Today({ todos, todoAdd, todoDelete, todoChecked, todoModify }) {
  const [date, setDate] = useState(formattedDate(new Date()));
  const [filter, setFilter] = useState("All");
  const filterHandler = (str) => {
    setFilter(str);
  };
  return (
    <StyleSection>
      {todos[date]?.length ? (
        <FilterListButtons filter={filter} filterHandler={filterHandler} />
      ) : (
        ""
      )}
      <TodoList
        todos={todos}
        todoDelete={todoDelete}
        filter={filter}
        todoChecked={todoChecked}
        date={date}
        todoModify={todoModify}
      />
      <TodoInput todoAdd={todoAdd} />
    </StyleSection>
  );
}
