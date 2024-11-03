const fs = require('fs');

fs.readFile('quiz6.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Dosya okunurken hata oluştu:", err);
        return;
    }
    
    const lines = data.trim().split('\n');
    
    lines.forEach(line => {
        const [x, a, b, c] = line.split(',').map(Number);
        const A = a * Math.pow(x, 2) + b * x + c;
        console.log(`x=${x}, a=${a}, b=${b}, c=${c} için A değeri: ${A}`);
    });
});