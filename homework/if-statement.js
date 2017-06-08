function whichGradeToBeOrNotToBe(age) {
  if (age >= 15 && age <= 18 ) {
      return "High";
  }
  else if (age >= 12 && age <= 14 ) {
      return "Middle";
  }
  else if (age >= 5 && age <= 11 ) {
      return "Elementary";
  }
  else {
  return "You are either too young or too old... SORRY!"
    
  }
}

whichGradeToBeOrNotToBe(4);
whichGradeToBeOrNotToBe(19);