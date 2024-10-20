//Fibonacci Sequence

// define a function takes numbers as parameters
//define variables, and set one variable to be 1
//for loop start from 1 and end at the givin number
//shift the value of the variable
//return the result

//t-diagram
//step: i=2, i=3
//seq2:0,0,1
//seq1:0,1,1
//seq:-,seq=0+1=1,seq=1+1=2
//output: 3

function Fibonacci(num) {
  let seq = 1;
  let seq1 = 0;
  let seq2 = 0;
  for (let i = 2; i <= num; i++) {
    seq2 = seq1;
    seq1 = seq;
    seq = seq1 + seq2;
  }
  return seq;
}

console.log(Fibonacci(4));
