export const timerLanking = (data, day) => {
  const date = new Date();
  date.setDate(date.getDate() - day);
  return data.filter((item) => new Date(item.date) >= date).sort((a, b) => b.time - a.time);
};
