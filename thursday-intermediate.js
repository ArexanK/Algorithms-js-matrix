//Sum All Numbers in a Range

//define a function takes an array as parameter
//define variable
//for loop starting the min number in the array and en at the largest num
//return variable

//t-diagram
//step: i=5. i=6
//condition= sum=0+5=6, sum= 5+6=11



function sum(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i < Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}
let array = [10, 5];
console.log(sum(array));
