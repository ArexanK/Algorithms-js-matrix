// 1. print 1 to 135 : Write a program using JavaScript that will print all the numbers from 1 to 135.

// 1. start by making a variable (let)
// 2. use a for loop  i is less or equal to 135
// 3. each iteration print the value of i
// 4. increment i by 1 after each loop iteration
// 5. let it continue until i is 135

for (let i = 0; i <= 135; i++) {
  //is i less than 135 or equal to 135, when 136 loop stop, counting from 0 to 135
  console.log(i);
}

// 2. Print Odd Numbers 1 - 135 : Write a program using JavaScript that will print all the odd numbers from 1 to 135.

// 1. start by making a variable (let)
// 2. use a for loop  i is less or equal to 135
// 3. make if statement to check if i is odd number by trying to divide it by 2
// 4. if true print value i
// 5. increment i by 1 after each loop iteration

//T-diagram:
//step: iteration 1, iteration 2, iteration 3 (of the loop)
// value of i: i = 1, i= 2, i= 3 etc
// is it odd: i = 1 (yes) i = 2(no ) i= 3(yes)
//output: i= 1 (1) i=2(-) i= 3(3)

for (let i = 0; i <= 135; i++) {
  if (i % 2 != 0) {
    // if i is odd number like 3 and is not divisble by 2 condition will be true
    console.log(i);
  }
}

// for (let i = 0; i <= 135; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// 3.Sum of Printed Numbers : Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far.

// 1. start with making a variable let sum with value of 0
// 2. use for loop and make a variable of i with value of 1, so it starts with 1
// 3. then make i is less or equal to 135
// increment i by 1 after each loop iteration
// 4. give sum + i which will be value of 1
// 5. so if the value of i is 1 then sum will be value of 1
//(i = 1 sum= 1,  i= 2 sum= 3, i=3 sum= 6)
// use a template literal to print and see the value

//T-diagram:
// step: iteration 1 to 135
// value of i : i= 1, i=2, i= 3, etc until i= 135
// value of sum: sum=1, sum=3, sum 6 etc until sum= 9180
// output: "The number is 1 ands sum is 1" until "The number is 135 ands sum is 9180"

let sum = 0;
for (let i = 1; i <= 135; i++) {
  sum = sum + i;
  console.log(`The number is ${i} ands sum is ${sum}`);
}

//4. Print the elements of an array
//Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes.

// 1. define array with the 4 elements [1,4,2,12]
// 2. for loop to loop through array
// 3. use property .length to check what the length is of the Array
// 4. you start with 0, so the length of z is 0,1,2,3

//T-diagram
// step: iteration 1, iteration 2, iteration 3, iteration 4
//value of i: 0, 1, 2, 3
// condition: true, true, true, true
// output: 0,1,2,3

let z = [1, 4, 2, 12];
for (let i = 0; i < z.length; i++) {
  console.log(i);
}

//5. Find Max
//Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.

// 1. make a variable that holds a value of the max
// 2. for loop to loop through array
// 3. if condition to check the variable
// 4. make output the max

//T-diagram
//step: iteration 1, iteration 2, iteration 3
//value i: i=0, i=1, i=2
//condition: false, false, true
//value max output: 2, 2, 2

let x = [2, -3, -1];
let max = x[0];
for (let i = 0; i < x.length; i++) {
  if (max < x[i]) {
    max = x[i];
  }
}
console.log(max);

//6. Get Average
//Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.

// 1. make 3 variables ( let average, let sum, let x), 2 with a value of 0 and let x with the value of 2,1,3
// 2. loop through each element of the array with for loop
// 3. calculate sum of the elements in the array
// 4. calculate the average and assign it to the average variable
// 5. print value 2

//T-diagram:
// step: iteration 1, iteration 2, iteration 3
// value of i: i=0, i=2, i=3
// value of sum= sum + x[1]: sum=0+2= 2, sum=2 + 1= 3, sum=3 + 3=6
// output: 2, 3, 6

let sum = 0;
let average = 0;
let x = [2, 1, 3];
for (let i = 0; i < x.length; i++) {
  sum = sum + x[i];
}
average = sum / x.length;
console.log(average);

//7. Eliminate the Negatives
//Given an array X, write a program that will remove all negative numbers and replace them with a 0.

//1. make a variable let x and assign a value with array of 2 negative numbers and 2 normal numbers
//2. loop through each element of the array with for loop
//3. use if statement, array element is less than 0 and its negative number
//4. use .splice() method, you can delete which element you want in the array
// 5. x.splice(i, 1)
//6. output [2,4] negative numbers are deleted

//T-diagram:
//step:iteration 1, iteration 2
//value of i: i=0, i=1
//condition:x[0]= 2 (false),  x[1]=-2 (true)
//output: [2,0,4,0]

let x = [2, -2, 4, -3];
//let result=[]
for (let i = 0; i < x.length; i++) {
  if (x[i] < 0) {
    x.splice(i, 1);
    //result.push[xi]
  }
}
console.log(x);

//8. Number to String
//Write a program that takes an array of numbers and turns the negative values into strings.

// 1.make a for loop to iterate
// 2.if condition to check if the element is negative
// 3.if its true replace the element with "turning" string

//T-diagram
//step:iteration 1, iteration 2, iteration 3, iteration 4
//value i: i=0, i=1, i=2, i=3
//condition negative: z[0]= 2 (false, no changes), z[-1]=1(true, negative so 'turning'), z[3]= 4(false, no changes), z[4]=-5(true, changes to 'turning')
//output: 2, 'turning', 4, 'turning'

let z = [2, -3, 4, -5];
for (let i = 0; i < z.length; i++) {
  if (z[i] < 0) {
    z[i] = "turning";
  }
}
console.log(z);
