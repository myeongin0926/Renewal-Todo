import React from "react";
import styled from "styled-components";
import { Button } from "../core/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineFire } from "react-icons/ai";
import { IoTodayOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";

const StyleHeader = styled.header`
  padding: 3rem;
  background-color: var(--light-grey-color);
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  h1 {
    text-align: start;
    font-size: 3rem;
    font-weight: 400;
    color: black;
  }
`;
const StyleButton = styled(Button)`
  width: 30rem;
  height: 8rem;
`;

export default function Header() {
  const [list, setList] = useState([
    { text: "오늘", active: true, icon: AiOutlineFire, link: "/" },
    { text: "과거", active: false, icon: IoTodayOutline, link: "/past" },
    { text: "통계", active: false, icon: BsGraphUp, link: "/statistics" },
  ]);

  const listHandler = (item) => {
    setList((prevList) =>
      prevList.map((el) =>
        el.text === item.text ? { ...el, active: true } : { ...el, active: false }
      )
    );
  };

  useEffect(() => {
    const pathname = window.location.pathname;
    setList((prevList) =>
      prevList.map((el) => {
        if (el.link === pathname) {
          return { ...el, active: true };
        } else {
          return { ...el, active: false };
        }
      })
    );
  }, []);

  return (
    <StyleHeader>
      <h1>Smart Study</h1>

      <div className="listButtons">
        {list.map((item, index) => (
          <Link to={item.link} key={index}>
            <StyleButton active={item.active.toString()} onClick={() => listHandler(item)}>
              {<item.icon />}
              <span>{item.text}</span>
            </StyleButton>
          </Link>
        ))}
      </div>
    </StyleHeader>
  );
}
