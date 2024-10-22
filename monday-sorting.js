// Bubble Sort

//define a variable with array of numbers
//

//T-diagram
//index i=
//condition 1=
//condition 2=

// let arr = [6, 14, 22, 9, 5];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     let temp; //holds the 22
//     if (arr[j] > arr[j + 1]) {
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }

//   }
// }
// console.log(arr);

function sorting(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      let temp; //holds the 22
      if (arr[j] > arr[j + 1]) {
        temp=arr[j]
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

let arr = [6, 14, 22, 9, 5];
console.log(sorting(arr));
