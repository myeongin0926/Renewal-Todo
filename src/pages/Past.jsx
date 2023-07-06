import React from "react";
import { StyleSection } from "../core/Section";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { formattedDate } from "../core/formattedDate";
import PastTodoList from "../components/Past/PastTodoList";
import { styled } from "styled-components";

const StylePastSection = styled(StyleSection)`
  display: flex;
  align-items: center;
  gap: 30px;
  .react-calendar {
    height: 55%;
    width: 100%;
    flex: 0.7;
    border: none;
  }
  .react-calendar__navigation__label > span {
    font-size: 20px;
    font-weight: bold;
    line-height: 50px;
  }
  .react-calendar__month-view__weekdays {
    abbr {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .react-calendar__tile {
    height: 50px;
    transition: all.2s;
    font-size: 18px;
    line-height: 0px;
  }

  .react-calendar__tile:focus,
  .react-calendar__tile--active {
    color: white;
    background-color: #3cff00 !important;
  }

  .react-calendar__tile--now,
  .react-calendar__tile--now:hover {
    background: rgb(255, 0, 0);
    color: #ffffff;
  }

  .react-calendar__navigation__arrow.react-calendar__navigation__next2-button,
  .react-calendar__navigation__arrow.react-calendar__navigation__prev2-button {
    display: none;
  }
  .react-calendar__navigation {
    width: 300px;
    margin: 0 auto 30px;
    position: relative !important;
    top: 0;
    left: 0;
  }
  .react-calendar__navigation__arrow {
    font-size: 30px;
  }
  .react-calendar__month-view__weekdays__weekday,
  .react-calendar__month-view__weekdays__weekday--weekend {
    color: #000000;
    text-decoration: none;
    border: none;
    abbr {
      text-decoration: none;
    }
  }
`;
export default function Past({ todos }) {
  const [choiceDate, setChoiceDate] = useState(formattedDate(new Date()));

  const handleDateChange = (newDate) => {
    setChoiceDate(formattedDate(newDate));
  };
  return (
    <StylePastSection>
      <Calendar value={choiceDate} onChange={handleDateChange} showNeighboringMonth={false} />
      <PastTodoList date={choiceDate} todos={todos} />
    </StylePastSection>
  );
}
