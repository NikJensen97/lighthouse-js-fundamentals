function ageCalculator(name, birthday, today){
  var age = today - birthday;
  
  
  var calculation = name + " is " + age + " years old.";
  return calculation;
}

console.log('Suzie', 2000, 2023);
