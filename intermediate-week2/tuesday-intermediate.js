//Find the longest Word in a String

//function takes string as parameter
//define variable to hold the word length
//for loop to loop through the array 
//if condition check the word length
//true assign the word to variable
//return variable

//T-diagram
//step: i=0, i=1
//explaination: max=0 arr[0]=the, max=[3] arr[1]= quick
//condition: true,true
//return: string "The quick brown fox jumped over the lazy dog"



function FindLongWord(str){
    let arr=str.split(' ')
    let max = 0
    for(let i=0; i<arr.length; i++){
        if(max<arr[i].length){
            max=arr[i].length
        }
    }
    return max
}
let string= "The quick brown fox jumped over the lazy dog";
console.log(FindLongWord(string));
