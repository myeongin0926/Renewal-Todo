import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { formattedDate } from "../../core/formattedDate";
import formatTime from "../../core/formatTime";
const TimerContainer = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h4 {
    letter-spacing: 5px;
  }

  span {
    font-size: 35px;
    letter-spacing: 3px;
  }
  span:nth-child(1) {
    font-size: 18px;
    opacity: 0.5;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    button {
      font-size: 18px;
      width: 21rem;
      height: 6rem;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s;
      display: none;
    }

    button.active {
      background-color: #2c2c2c;
      display: block;
      color: white;
    }
  }
`;

export default function Timer() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const timeStart = () => {
    if (!timer) {
      const newTimer = setInterval(() => {
        setTime((prevTime) => {
          const updatedTime = prevTime + 1;
          const timerObj = JSON.parse(localStorage.getItem("timer")) || {};
          timerObj[formattedDate(new Date())] = updatedTime;
          localStorage.setItem("timer", JSON.stringify(timerObj));
          return updatedTime;
        });
      }, 1000);
      setTimer(newTimer);
    }
  };

  const timeStop = () => {
    clearInterval(timer);
    setTimer(null);
  };

  useEffect(() => {
    const studyTime = localStorage.getItem("timer");
    if (studyTime) {
      const timerObj = JSON.parse(studyTime);
      const today = formattedDate(new Date());
      if (timerObj.hasOwnProperty(today)) {
        setTime(parseInt(timerObj[today]));
      }
    }
    return () => {
      timeStop();
    };
  }, []);

  return (
    <TimerContainer>
      <span>{formattedDate(new Date())}</span>
      <span>{formatTime(time)}</span>
      <div>
        <button className={timer ? "" : "active"} onClick={timeStart}>
          Start
        </button>
        <button className={timer ? "active" : ""} onClick={timeStop}>
          Stop
        </button>
      </div>
    </TimerContainer>
  );
}
