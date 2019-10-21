var fs = require('fs');

// readFileSync - 비동기 => A B C
// console.log('A');
// var result = fs.readFileSync('syntax/sample.txt', 'utf8');
// console.log(result);
// console.log('C');

// readFile 동기 => A C B
// readFile은 return값이 없음. callback 함수 필요
// readFile의 콜백함수는 error, 결과값을 인자로 갖는다
console.log('A');
    // 파일이 read되는 동안 function 실행해라
fs.readFile('syntax/sample.txt', 'utf8', function (err, result) {
    console.log(result);
});
console.log('C');