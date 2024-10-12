// If we list all natural numbers below 10 that are either divisible by 3 or 5. It will be 3,5,6 and 9. The sum of these will be 23. Similarly find the sum of no. below 1000.

let x = 1000;
let array = [];
for(let i=1; i<x;i++){
    if(i%3 === 0 || i%5 === 0){
        array.push(i);
    }
}
console.log(sumarray = array.reduce((accumulator, next) => accumulator + next));
