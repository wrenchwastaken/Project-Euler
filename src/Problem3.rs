//The prime factors of 13195 are 5,7,13,29.
//What is the largest prime factor of the number 600851475143?

fn largest_prime_factor(mut n:u64)->u64{
    if n <= 1{
        panic!("Invalid Input: Must be a positive integer");
    }
    let mut largest_prime_factor=1;
    while n%2 == 0{
        n/=2;
    }
    let mut i=3;
    while i*i <=n{
        while n%i==0{
            n/=i;
            largest_prime_factor=i;
        }
        i+=2;
    }
    if n > 1{
        largest_prime_factor=n;
    }
    largest_prime_factor
}

//calling the largest_prime_factor function
fn main(){
    let n = 600851475143;
        println!("{:?} is the largest prime factor.",largest_prime_factor(n));
}
