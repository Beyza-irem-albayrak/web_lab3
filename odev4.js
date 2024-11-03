const fs = require('fs');

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const primes = [];
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
}

fs.writeFile('asal.txt', primes.join(', '), 'utf8', (err) => {
    if (err) {
        console.error("Dosya yazılamadı:", err);
        return;
    }
    console.log("Asal sayılar asal.txt dosyasına başarıyla yazıldı.");
});
