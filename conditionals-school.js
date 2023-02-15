const whichSchool  = function (age) {
  if (age <= 12) {
    return 'Elementary School';
 
  }
  else if(age > 12 && age <= 18) {
    return 'Secondary School';
 
}
else return 'Lighthouse Labs';
 
};
// replace 10 with any number for different results
console.log(whichSchool(10));
