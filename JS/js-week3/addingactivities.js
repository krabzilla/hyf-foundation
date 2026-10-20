const activities = [];
const usageLimit = 120;

function addActivity(date, activity, duration) {
  const newActivity = { date: date, activity: activity, duration: duration };
  activities.push(newActivity);
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Facebook", 15);
addActivity("24/7-18", "Netflix", 120);
console.log(activities);

function showStatus(activities) {
  let total = 0;
  for (const activity of activities) {
    total = total + activity.duration;
  }
  if (activities.length === 0) {
    console.log(`Add some activities before calling showStatus`);
  } else {
    console.log(
      `You have added ${activities.length} activities. They amount to ${total} min of usage`,
    );
  }
  if (total >= usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  }
}
showStatus(activities);
