const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTime(travelInfo) {
  const totalHours = travelInfo.destinationDistance / travelInfo.speed;
  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
}
const travelTime = calculateTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
