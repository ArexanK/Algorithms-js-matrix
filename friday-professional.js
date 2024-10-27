//odd numbers fibonacci
function fib(num) {
  let current = 1;
  let prev1 = 0;
  let prev2 = 0;

  // for(let i=2; i<=num; i++){
  //     if(current <= num && current%2!==0){
  //         sum+=current
  //     }

  // }

  while (current <= num) {
    if (current % 2 !== 0) {
      sum += current;
    }
    prev2 = prev1;
    prev1 = current;
    current = prev1 + prev2;
  }
  return sum;
}
console.log(fib(10));
