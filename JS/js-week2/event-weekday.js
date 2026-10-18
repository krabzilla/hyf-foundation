function getEventWeekday(daysUntilEvent) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const todayNumber = new Date().getDay();
  const eventNumber = (todayNumber + daysUntilEvent) % 7;

  return weekdays[eventNumber];
}

console.log(getEventWeekday(15));
console.log(getEventWeekday(0)); // today: Tuesday
console.log(getEventWeekday(7)); // one week later: Tuesday
console.log(getEventWeekday(9)); // Thursday
