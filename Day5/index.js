function isPrime(num){
    for (let i=1; i<=num; i++){
        if(num%i ===0){
            return true;
        }
    }
    return false;
}
console.log(isPrime(5))
