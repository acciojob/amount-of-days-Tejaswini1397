//your JS code here. If required.
function daysOfAYear(year) {
    const userInput = prompt('Enter a year (between 1 and 9999):');
const year1 = parseInt(userInput, 10);

 // Check if the year is a leap year
 const isLeapYear = (year1% 4 === 0 && year1% 100 !== 0) || (year1% 400 === 0);
alert(`Number of days in ${year1}: ${isLeapyear? 366 : 365}`);
 // Return the number of days based on leap year1status
 return isLeapYear ? 366 : 365;
   
}
daysOfAYear();