// 직각삼각형_출력하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for (let i = 0; i < Number(input[0]); i++) {
        console.log('*'.repeat(i + 1));
    }
<<<<<<< HEAD
});
=======
});
>>>>>>> 5ae11d8804eca0ee95680c2228111cdb04fcc3ac
