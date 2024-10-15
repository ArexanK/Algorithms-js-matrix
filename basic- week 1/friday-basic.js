//Exercise 1: 3rd highest number in Array

//T-diagram
//step: iteration 1, 2, 3
//value of i: i=0, i=2, 1=3
//condition 1:  z[0]=1 first=0 true, z[1]=10 first=1 true, z[2]= 2 first 10 false, z[3]=8 first=10 (false)
//condition 2:- , - , second=1z[i]=2 true,second=2z[3]=8 true
///condition 3: show the third highest number of the array which is 5
//output:

let first = 0;
let second = 0;
let third = 0;
let z = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < z.length; i++) {
  if (first < z[i]) {
    third = second;
    second = first;
    first = z[i];
  } else if (second < z[i]) {
    third = second;
    second = z[i];
  } else if (third < z[i]) {
    third = z[i];
  }
}

console.log(third);
