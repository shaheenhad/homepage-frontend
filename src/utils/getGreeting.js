const today = new Date();
const timeHours = today.getHours();

function getGreeting(time) {
  if (5 <= time && time < 12) {
    return "morning";
  } else if (12 < time && time < 18) {
    return "afternoon";
  } else {
    return "evening";
  }
}

const greeting = getGreeting(timeHours);

export { greeting };
