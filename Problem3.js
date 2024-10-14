//The Prime Factor of 13195 are 5,7,13,29. What is the Largest Prime Factor of the Number 600851475143?

let factor = 2;
let n = 600851475143;
while(n>1){
    if(n%factor === 0){
        n = n/factor;
    }
    else{
        factor++;
    }
}
console.log(factor);
