//Selection Sort

// define a function take an array as parameter
//define a variable to hold the index of the min number in  the array
//define a variable
//for loop to iterate through the array
// for loop to do the comparision and find the min number in the array
// switch places of the array elements
//return the sorted array

//T-diagram
//index i= 0 i=1
//index j=1, j=2
//condition 1 min-index: arr[1]=(100), arr[0]=12
//condition 2:

function SelectionSort(arr) {
  let MinIndex;
  let temp;
  for (let i = 0; i < arr.length; i++) {
    MinIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[MinIndex]) {
        MinIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[MinIndex];
    arr[MinIndex] = temp;
  }
  return arr;
}

let array = [12, 100, 22, 33, 15, 45, 39, 81];
console.log(SelectionSort(array));
