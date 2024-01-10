const person={
  firstName: 'William', 
  lastName:  'Zhang',
  hobby: 'basketball' 
}
console.log("person: ", person);
const fullName = person['firstName']+ " "+person['lastName']
console.log(`the person's name is: ${fullName}.`);
person.job='software developer'; 
console.log(`the person's current job is: ${person.job}`);
person['previousJob']='student';
console.log(`the person's previous job is: ${person['previousJob']}`);
console.log("the complete person object is: ", person);
