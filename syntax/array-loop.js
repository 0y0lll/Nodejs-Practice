var number = [1, 100, 12, 34];
var i = 0;
var total = 0;

while (i < number.length) {
    total = total + number[i];
    i = i + 1;
}

console.log(`total : ${total}`);