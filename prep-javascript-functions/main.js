function addTwoNumbers(num1, num2){
    return num1+num2;
}
const result= addTwoNumbers(2,2)
console.log(result);

function convertHoursToMinutes(hours){
    return hours*60;
}
const minutes=convertHoursToMinutes(2);
console.log(minutes);

function getGreeting(name){
return `Hello ${name}`;
}
console.log(getGreeting('World'));

function addAndMultiplyBy5(num1, num2){
    return (num1+num2)*5;
}
console.log(addAndMultiplyBy5(10,5));

function multiplyAddDivideBy5(num1, num2){
    return num1*num2/5;
}
console.log(multiplyAddDivideBy5(35,10));

function subtractTwoNumbers(num1, num2){
    return num1-num2;
}
console.log(subtractTwoNumbers(22,7));

function getCircleCircumference(radius){
    return 2*Math.PI*radius;
}
console.log(getCircleCircumference(5));

function getFullName(firstName, lastName){
    return firstName+" "+lastName;
}
console.log(getFullName('Juan', 'Ramirez'));

function cube(number){
    return Math.pow(number,3);
}
console.log(cube(5));


