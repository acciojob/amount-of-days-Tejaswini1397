function daysOfAYear(year) {
   
  const year1 = parseInt(year);

 // Check if the year is a leap year
 const isLeapYear = (year1% 4 === 0 && year1% 100 === 0) || (year1% 400 === 0);

 // Return the number of days based on leap year1status
 return isLeapYear ? 366 : 365;
   
}
 const userInput = prompt();
console.log(daysOfAYear( userInput));
