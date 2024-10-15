//A palindromic number reads the same both ways. The largest palindrome made from the product of two-digit numbers is 9009 = 91 x 99.
//Find the largest palindrome made from the product of two 3 - digit numbers.
let x = 100;
let y = 999;
let result = 0;
for(let i = x; i <= y; i++){
    for(let j = y; j >= x; j--){
        let product = i*j;
        let str = product.toString();
        let ifPal = str.split("").reverse().join("");
        if(str === ifPal && product > result){
            result = product;
        }
    }
}
console.log(result);
