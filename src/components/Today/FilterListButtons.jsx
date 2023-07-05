import React from "react";
import { styled } from "styled-components";

const StyleButtons = styled.div`
  width: 100%;
  margin: auto;
  height: 65px;
  display: flex;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid var(--light-border);
  button {
    font-size: 20px;
    flex: 1;
    transition: all.2s;
    cursor: pointer;
  }
  button.active {
    background-color: var(--active-color);
    color: white;
  }
`;

export default function FilterListButtons({ filterHandler, filter }) {
  const list = ["All", "Completed", "Incomplete"];
  return (
    <StyleButtons>
      {list.map((el, i) => (
        <button
          className={el === filter ? "active" : ""}
          key={i}
          onClick={(e) => {
            filterHandler(e.target.textContent);
          }}
        >
          {el}
        </button>
      ))}
    </StyleButtons>
  );
}
