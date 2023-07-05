import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineFire } from "react-icons/ai";
import { IoTodayOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import Timer from "./Today/Timer";

const HeaderButton = styled.button`
  cursor: pointer;
  font-size: 1.9rem;
  display: flex;
  transition: 0.1s;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  border-radius: 3px;
  padding-left: 20px;
  span {
    padding-top: 3px;
  }
  &.active {
    background-color: var(--active-color);
    color: white;
  }
  width: 21rem;
  height: 6rem;
  color: white;
  font-weight: bold;
`;

const HeaderContainer = styled.header`
  padding: 6rem 0;
  width: 30rem;
  display: flex;
  align-items: center;
  gap: 10rem;
  flex-direction: column;
  justify-content: space-around;
  color: white;

  h1 {
    text-align: start;
    font-size: 3rem;
    font-weight: 400;
    color: #ffffff;
    letter-spacing: 2px;
  }

  .listButtons {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const menuList = [
  { text: "오늘", icon: AiOutlineFire, link: "/" },
  { text: "과거", icon: IoTodayOutline, link: "/past" },
  { text: "통계", icon: BsGraphUp, link: "/statistics" },
];

export default function Header() {
  const location = useLocation();

  return (
    <HeaderContainer>
      <h1>Smart Study</h1>
      <div className="listButtons">
        {menuList.map((item, index) => (
          <Link to={item.link} key={index}>
            <HeaderButton className={location.pathname === item.link ? "active" : ""}>
              <item.icon />
              <span>{item.text}</span>
            </HeaderButton>
          </Link>
        ))}
      </div>
      <Timer />
    </HeaderContainer>
  );
}
