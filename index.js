function myFunction(){


function getSleepHours(day){
  let inputNumber = Number(document.getElementById("sleepHours").value)
  if (day === "Monday") {
    return inputNumber;
  }
  else if (day === "Tuesday") {
    return inputNumber;
  }
  else if (day === "Wednesday") {
    return inputNumber;
  }
  else if (day === "Thursday") {
    return inputNumber;
  }
  else if (day === "Friday") {
    return inputNumber;
  }
  else if (day === "Saturday") {
    return inputNumber;
  }
  else if (day === "Sunday") {
    return inputNumber;
  }
  else{
    return "Error!!!"
  }

}

function getActualSleepHours(){
const sum = getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday")
  return sum;


}

const getIdealSleepHours = idealHours => {
  return (idealHours * 7)
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);

  if (actualSleepHours === idealSleepHours){
    return ("You've got the perfect amount of sleep.")
  }
  else if(actualSleepHours > idealSleepHours){
    return ("You've got " + (actualSleepHours - idealSleepHours) + " more hours of sleep this week.")
  }
  else if(actualSleepHours < idealSleepHours){
    return ("You should get some rest because you've slept " + (idealSleepHours - actualSleepHours) + " hours less than you should have this week.")
  }
  else{
     return "Error! Something went wrong, check your code.";
  }


}
document.getElementById("answer").innerHTML = getActualSleepHours();
document.getElementById("answer2").innerHTML = calculateSleepDebt();

}





