//Largest Number in Arrays
//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

//define function take an array as parameter
//define variable with empty array
//for loop to iterate through loop
//for loop each array
//if condition to compare value
//if true push array in empty array
//output largest number of array

//T-diagram
//step: i=0, i=1, i=2
//condition i: arr=[0][4,5,1000,3], arr[1]=[13, 27, 18, 26]
//step : j=0, j=1, j=2
//condition j: x[0]=4 arr[0][0]= 4 false, x[0]=4 arr[0][1]= 5 true, x[0]=5 arr[0][2]= 1000 true,


function largestOfFour(arr) {
  let x = [];
  for (let i = 0; i < arr.length; i++) {// go through the length of the array
    x.push(arr[i][0]);// 0 of the array i which is [4, 5,1000,3]
    for (let j = 0; j < arr[i].length; j++) { //loop to go through all the separated array []
      if (x[i] < arr[i][j]) { //[xf[i] check first subArray smaller than [i][j] the element inside subarray
        x[i] = arr[i][j];
      }
    }
  }
  return x;
}
let largestNumbers = [
  [4, 5, 1000, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];
console.log(largestOfFour(largestNumbers));
