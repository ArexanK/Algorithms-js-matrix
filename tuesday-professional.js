//Magic Squares
///A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15


//define 2 variable to hold the sum of each the diagonal numbers
//condition to check if the sum of the diagonals is equal
// true print true
//false print false

//T-diagram
//dia1= 15
//dia2= 15
//condition= true


let arr=[8,1,6,3,5,7,4,9,2]

//0=8 1=1 2=6 3=3 4=5 5=7 6=4 7=9 8=2

let dia1=arr[0]+arr[4]+arr[8]
let dia2= arr[2]+arr[4]+ arr[6]
if(dia1== dia2){
  console.log(true)  
}else{
    console.log(false)
}





