function getSleepHours(day) {
    switch (day.toLowerCase()) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 4.5;
        break;
      case 'wednesday':
        return 6;
        break;
      case 'thursday':
        return 9;
        break;
      case 'friday':
        return 5;
        break;
      case 'saturday':
        return 8;
        break;
      case 'sunday':
        return 9;
        break;
    }
  };
  
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  function getIdealSleepHours() {
    idealHours = 6
    return idealHours * 7
  };
  
  function calculateSleepDebt() {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    sleepDifference = idealSleepHours - actualSleepHours;
    if (actualSleepHours === idealSleepHours) {
      console.log(`Well done. You are getting the perfect amount of sleep.`)
    };
    if (actualSleepHours < idealSleepHours) {
      console.log(`You're short by ${sleepDifference}. You need to catch up on some sleep, amigo. Have a nap today.`)
    };
    if (actualSleepHours > idealSleepHours) {
      console.log(`You have a sleep advantage of ${sleepDifference}. You are getting more than your fair share of sleep. Maybe try to get some work done?`)
    };
  };
  
  calculateSleepDebt();