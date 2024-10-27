//Exercise 1: Factorialize

//T-diagram
//step:iteration 1, 2, 3
//value opf i: i=1 , i=2, i=3
//condition: factor=1*1= 1, factor=1*2=2, factor=2*3=6
//output:

function factorialize(num) {
  let factor = 1;
  for (let i = 1; i <= num; i++) {
    factor=factor *i;
  }
  return factor;
}
console.log(factorialize(5));
