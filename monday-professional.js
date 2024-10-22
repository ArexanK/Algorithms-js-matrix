//Game of 3s
//If the number is divisible by 3, divide it by 3.
//If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.

// define a function with parameter as number
// make a while loop start with num and end at 1
//condition to check if the number i is devisible by 3 
//true , divide by number of 3
// false, ass -1 or +1 to make it divide by 3 
// return the number 1 



//T-diagram
//index: 100, 33, 11, 4
//condition 1: 100 is not divislbe by 3 false, true, false
//condition 2: (-1) 99 true, - , false
//result: num=100-1=99 /3 = 33, num=33/3= 11, num=11+1=12/3=4


function GameOfThree(num) { //num = 100
  while (num > 1) {  //100 / 3 = false + 1 = 99
    if (num % 3 == 0) { 
      console.log(num, 0);
      num /= 3; //99/ 3= 33
    } else if (num % 3 == 1) {
      console.log(num, -1);
      num = num - 1;
      num /= 3;
    } else {
      console.log(num, +1);
      num = num + 1;
      num /= 3;
    }
  }
  return num;
}
console.log(GameOfThree(100));
