//sum all primes

//define a variable
//for loop to do divisions start from num-1 and end at 2
//condition to check the remain of the division and determine
// true start another for loop
//false condition check if the number is prime and then sum
//return the sum

//T-diagram
// index i : i=10
//index j: j=9
//condition: false, false
//condition 2( when true): 


function sumAllPrimes(number){
    let sum=0
    for(let i= number; i>=2; i--){
        let isPrime=true
        for(let j=i-1; j>= 2; j--){
            if(i%j==0){
                isPrime=false
                break
            }
        }
if (isPrime== true){
    sum=sum + i
}
    }
    return sum
}
console.log(sumAllPrimes(17))


