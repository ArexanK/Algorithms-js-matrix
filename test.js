// let x= [2,1,6,4,-7]
// let arr=[]

// for(let i=0; i< x.length; i++){
//     arr.unshift(x[i])
// }
// console.log(arr)


let x = [2, -2, 4, -3];
let result=[]
for (let i = 0; i < x.length; i++) {
  if (x[i] >= 0) {
   result.push(x[i])
  }
}
console.log(result);
