// Title Case a Sentence

//function  with string as parameter
//define a variable  contain giving sting in lowcase and changed to array
//for loop iterate through givin array
//change first letter each element in the array to capital (.upperCase())

//t-diagram
//step: i=0, i=1, i=2
// condition: arr[0]= sHoRt, arr[1]= AnD, arr[2]= sToUt
//result: arr=[ Short and Stout]

function TitleCase(st) {
  let arr = st.toLowerCase().split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}
let string = "Short And Stout";
console.log(TitleCase(string));
