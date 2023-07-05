import React from "react";
import { StyleSection } from "../core/Section";
import { timerLanking } from "../core/timerLanking";
export default function Statistics() {
  const localData = JSON.parse(localStorage.getItem("timer"));
  let dataArray = [];
  let oneWeekLanking;
  let oneMonthLanking;

  if (localData) {
    for (let key in localData) {
      dataArray.push({ date: key, time: localData[key] });
    }

    oneWeekLanking = timerLanking(dataArray, 7);
    oneMonthLanking = timerLanking(dataArray, 30);
  }

  console.log({ oneWeekLanking, oneMonthLanking, dataArray });

  return <StyleSection></StyleSection>;
}
