let a = 6;
let count = 3;

let primes = [2, 3, 5];

while (primes.lenght <= 10001){
    let x = true;

    for (let i = 2; i * i <= a; i++){
        if (a % i == 0){
            x = false;
        }
    }
    if (x == true){
        primes[count] = a;
        count++;
    }
    
    ++a;
}

console.log(primes[10001]);