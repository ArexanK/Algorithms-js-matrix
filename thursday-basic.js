//Exercise 1: Palindrome Checker

//T-diagram

//step:iteration 1, 2, 3
//value of i: i=0, i=1, i=2
//condition (letter don't match): st[0]=O st[5]=a, st[1]=l st[4]=l
//output: "olla allo"

function palindrome(string) {
  let str = string.split(" ").join("").toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - 1 - i]) return false;
  }
  return true;
}

console.log(palindrome("olla allo"));
