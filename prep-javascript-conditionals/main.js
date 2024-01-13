/* Your JS goes in this file */
const age = 33; 
function isAdult(age){
  if(age<18){
    return false;
  }else{
   return true;
  }
}

console.log(isAdult(age));

const student1Score=99;
function didStudentPass(score){
  if(score >= 70 ){
    return true;
  }else{
    return false;
  }
}
console.log(didStudentPass(student1Score));

const student2Score=100;
function gradeCalculator(score){
  if(score<60){
    return 'F';
  }else if(score <70){
    return 'D'; 
  }else if(score < 80){
    return 'C'; 
  }else if(score<90){
    return 'B';
  }else if(score < 100){
    return 'A'; 
  }else{
    return 'A++';
  }
}
console.log(gradeCalculator(student2Score));

const season = 'summer';
function seasonMessenger(season){
  if(season==='summer'){
    return "It's hot today";
    }else if(season==='spring'){
      return "The flowers are blooming.";
    }else if(season=== 'autumn'){
      return "The leaves are changing colors."
    }else if (season==='winter'){
      return "It's cold today. ";
    }else {
      return "please enter a valid season. ";
    }
}
console.log(seasonMessenger(season));

const dayOfTheWeek='saturday';
function dayDetector(dayOfTheWeek)
{
if(dayOfTheWeek==='saturday'||dayOfTheWeek==='sunday'){
  return "have a good weekend.";
}else{
  return "It's a weekday!";
}
}
console.log(dayDetector(dayOfTheWeek));







