'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a,b,c){ //eslint-disable-line
  c = c || 0;
  var total = a + b + c;
  var message = 'The sum of ' + a + ' and ' + b + ' is ' + total + '.';
  return [total, message];
}


// Richards Comments
// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a,b,c){ //eslint-disable-line
  c = c || 1;
  var ans = a * b * c;
  var message = 'The product of ' + a + ' and ' + b + ' is ' + ans + '.';
  return [ans, message];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a,b,c){ //eslint-disable-line
  var total1 = sum(a,b);
  var intsum = total1[0];
  //console.log(intsum);
  var total2 = sum(intsum,c);
  var summ = total2[0];
  //console.log(summ);
  var total3 = multiply(a,b);
  var intmult = total3[0];
  //console.log(intmult);
  var total4 = multiply(intmult,c);
  var multiplyy = total4[0];
  //console.log(multiplyy);
  var element3 = a + ' and ' + b + ' and ' + c + ' sum to ' + summ + '.';
  var element4 = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + multiplyy + '.';
  return [ ,element3, element4];
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2,3,4]; //eslint-disable-line

function sumArray(testArray){ //eslint-disable-line
  var stringNums = testArray.toString();
  var a = testArray[0];
  var b = testArray[1];
  var c = testArray[2];
  var summ = sum(a,b,c);
  //console.log(stringNums + ' was passed in as an array of numbers, and ' + summ[0] + ' is their sum.' );
  return[summ,(stringNums + ' was passed in as an array of numbers, and ' + summ[0] + ' is their sum.' )];

}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(testArray){ //eslint-disable-line
  var stringNums = testArray.toString();
  var a = testArray[0];
  var b = testArray[1];
  var c = testArray[2];
  var multt = multiply(a,b,c);
  //console.log(multt[0]);
  return[multt[0], 'The numbers ' + stringNums + ' have a product of ' + multt[0] + '.'];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(2,3,4);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
