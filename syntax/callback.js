// function a() {
//     console.log('A');
// }

var a = function () {   // 익명함수 : 함수가 곧 값이다
    console.log('A');
}

function slowfunc(callback) {
    callback();
}

slowfunc(a);