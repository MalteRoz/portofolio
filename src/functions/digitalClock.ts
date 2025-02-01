export const formatTime = (time: Date) => {
  let hours = padZero(time.getHours());
  const minutes = padZero(time.getMinutes());
  const seconds = padZero(time.getSeconds());

  return `${hours}:${minutes}:${seconds}`;
};

export const padZero = (number: number) => {
  return (number < 10 ? "0" : "") + number;
};
