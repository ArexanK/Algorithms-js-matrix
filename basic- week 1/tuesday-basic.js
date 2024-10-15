//1. Addition
//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5.

//define a variable that holds the sum of the numbers
//for loop start with 200 and end with 2700
// make a condition that check if 3 or 5 is divisible
// add number
//output sum

//t-diagram
//step:iteration 1, iteration2, iteration 3 (for loop)
//value of i: i=200, i=201, i=202
//condition: true (divided by 3 and 5), true(divided by 3 and 5),  false(only divided by 3 not 5)
//output: sum=0+200=200, sum=200+201=401, sum=200+ 202=402

let sum = 0;
for (let i = 200; i <= 2700; i++) {
  if ((i % 3 == 0 || i % 5 == 0) && !(i % 3 == 0 && i % 5 == 0)) {
    sum = sum + i;
    //sum+=i
  }
}
console.log(sum);

//2. Shift the Values
//Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

// make first an empty array
//make an array let x= [2,1,6,4,-7]
//use for loop to iterate through array
// use .unshift() method to add one of more elements to the beginning of the array
// output

//T-diagram
//step: iteration 1, iteration2, iteration 3, iteration4, iteration 5(for loop)
//value of i:i=0, i=1, i=2, i=3, i=4, i=5
//condition (arr): [2], [1, 2], [6,1,2], [4,6,1,2], [-7,4,6,1,2]
//output: [-7,4,6,1,2]

let arr = [];
let x = [2, 1, 6, 4, -7];
for (let i = 0; i < x.length; i++) {
  arr.unshift(x[i]);
}
console.log(arr);

//3. FizzBuzz
//Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".

// start with for loop that starts with 1 and ends with 135
//if true replace with fizzbuzz if false check condition is divisible by 3 (if statement)
// true make it say 'Fizz'
// false check if the element it divisible by 5
// true then replace by 'Buzz'
// output

//T-diagram
//step: iterations 1, 2, 3
//value of i: i=0, i=1, i=2, i=3
// first condition: i % 3 == 0 && i % 5 == 0 - [true 0 is divisible by 3 an][false][false][false]
//second condition: i % 3 == 0 [true][false][false][true= 3 is divisible by 3)]
//third condition:  i % 5 == 0 [true][false][false][false]
//output:arr[0] = "fizzBuzz", arr[1] = 1, arr[2] = 2, arr[3] = "fizz"

let arr = [];
for (let i = 0; i <= 135; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    arr[i] = "fizzBuzz";
  } else if (i % 3 == 0) {
    arr[i] = "fizz";
  } else if (i % 5 == 0) {
    arr[i] = "Buzz";
  } else {
    arr[i] = i;
  }
}
console.log(arr);

//4. Fibonacci
//For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
//A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

//make variable with empty array
//make for loop to loop through array from 1 to 1 million
// condition with if statement for thew first 2 numbers
// the current element is the sum of the previous element
// output array

//t-diagram
//step:iterations 1, 2, 3 (for loop)
//value of i: i=0, i=1, i=3
//first condition:arr[0]=0, arr[1]=1, arr[2]=1
//second condition:arr[0]=0,[0], arr[1]=1,[0,1], arr[2]=1,[0,1,1]
//output: 0,1,1,

let arr = [];
for (let i = 0; i < 1000000; i++) {
  if (i == 0 || i == 1) {
    arr[i] = i;
  } else {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
}
console.log(arr);

//5. Remove the Negative
//Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

//T-diagram
//step:iterations 1, 2, 3 (for loop)
//value of i: i=0, i=1, i=3
//first condition:x[i]=1 (false), x[i]=-2 (true so it deletes the -2),
//output: 1,4,1

let x = [1, -2, 4, 1];
for (let i = 0; i < x.length; i++) {
  if (x[i] < 0) {
    x.splice(i, 1);
    i = i - 1;
  }
}
console.log(x);

//6. Communist Censorship
//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice

//T-diagram
//step: iterations 1, 2, 3 (for loop)
// value of 1: i=0, i=1, i=3
// condition match: x[i]= "Man" (false), x[1]=I (false), x[2]="Love"(false), x[3]="The"(false), x[4]="Matrix"(false), x[5]="Program"(true)
//output : ['Man', 'I','Love','The','Matrix','*******']

let x = ["Man", "I", "Love", "The", "Matrix", "Program"];
let arr = "javascript";
let str = "";

for (let i = 1; i < arr.length; i++) {
  str += "*";
}
for (let i = 0; i < x.length; i++) {
  if (arr == x[i]) {
    x[i] = str;
  }
}
console.log(x);
