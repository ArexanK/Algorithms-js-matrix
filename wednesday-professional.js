//Search and Replace

//Perform a search and replace the sentence using the arguments provided and return the new sentence.
//The first argument is the sentence to perform the search and replace on.
//The second argument is the word that you will be replacing (before).
//The third argument is what you will be replacing the second argument with (after).

//define a function that takes 3 strings as parameters
//transform string into an array using string methods
//for loop to iterate
//condition to check the word match
//condition true check the word with capital letter
//condition false replace word with new word

//t-diagram
//index:i=0, i=1
//condition 1: arr[0]= 'quick', arr[1]= 'Brown'
// condition 2: false 'quick' (not a capital letter),  'brown' true (its capital letter)
//result: 'quick Yellow fox ...

let st = "quick Brown Fox jumped over the lazy dog";
function SearchAndReplace(string, before, after) {
  let arr = string.trim().split(" "); //['quick', 'Brown', 'Fox', 'jumped', 'over', 'the', 'lazy', 'dog']
  for (let i = 0; i < arr.length; i++) {
    // arr[0]= 'quick', arr[1]='brown', arr[2]=''fox'
    if (arr[i].toLowerCase() == before.toLowerCase()) { 
      // arr[i]= 'Brown' == before.toLowercase() 'brown' if its true it will be replaced to 'Brown'
      if (arr[i][0] == arr[i][0].toUpperCase()) {
        arr[i] = after[0].toUpperCase() + after.slice(1);
      } else {
        arr[i] = after;
      }
    }
  }
  return arr.join(" ");
}

console.log(SearchAndReplace(st, "Brown", "Yellow"));




// let str= "quick Brown Fox jumped over the lazy dog"
// function SearchAndReplace(string, before, after){
//     let arr= str.trim().split(' ')
// for(let i=0; i< str.length; i++){
//     if(arr[i].toLowerCase() == before.toLowerCase()){
//         if(arr[i][0] == arr[1][0].toUpperCase)
//             arr[i] = arr[0].toUpperCase + after.slice(1)
//     }else {
//         arr[1]=after;

//     }

// }
// return arr.join("")
// }

// console.log(SearchAndReplace(str, "Brown", "Yellow"));