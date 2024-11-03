const fs = require('fs');

fs.readFile('asal_sayi.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Dosya okunamadı:", err);
        return;
    }

    const primeNumbers = data.split(',').map(num => parseInt(num.trim()));

    const allNumbers = [];
    for (let i = 1; i <= 89; i++) {
        if (!primeNumbers.includes(i)) {
            allNumbers.push(i);
        }
    }

    const completeNumbers = [...primeNumbers, ...allNumbers].sort((a, b) => a - b);
    
    const result = completeNumbers.join(', ');

    fs.writeFile('tum_sayilar.txt', result, (err) => {
        if (err) {
            console.error("Dosya yazılamadı:", err);
            return;
        }
        console.log("tum_sayilar.txt dosyası başarıyla oluşturuldu.");
    });
});
