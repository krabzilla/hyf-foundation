const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Friends",
    days: 4,
    hours: 11,
    minutes: 48,
  },
  {
    title: "Ted Lasso",
    days: 5,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText(totalDuration) {
  const lifeHours = 80 * 365 * 24;

  for (const series of seriesDurations) {
    const totalHours = series.days * 24 + series.hours + series.minutes / 60;
    const percentage = (totalHours / lifeHours) * 100;
    console.log(`${series.title} took ${percentage.toFixed(3)} of my life`);
  }
}
// logs out the text found above
logOutSeriesText("Friends");
