var name = ' <<<<>>>> ';
// var str = 'Maecenas' + name + 'at mi sit amet metus ultrices semper.\n\nNulla' + name + 'in nisi sed lorem placerat maximus non in lectus. Donec elementum pharetra nibh, eget aliquet tortor lacinia in. Proin rutrum urna id velit fermentum, nec faucibus lectus egestas. Praesent eu tortor libero. Nam nec ipsum et tellus mattis pretium sed eget lorem. Ut cursus at libero id sodales. Phasellus lacus lectus, facilisis sed quam ac, suscipit efficitur est. Ut ex felis, placerat sed ligula mattis, imperdiet laoreet nisi. Nulla maximus iaculis nunc et congue. Fusce felis massa, efficitur nec maximus non, pharetra vitae tortor. Aliquam sollicitudin tincidunt libero, cursus fermentum odio maximus' + name + 'in.';


// 비교적 최신 문법 template literal
// literal : 데이터 타입을 표현하는 방법, 기호
// ` : 리터럴 시작과 끝을 표기하는 기호

var str = `Maecenas${name}at mi sit amet metus ultrices semper.\n\nNulla${name}in nisi sed lorem placerat maximus non in lectus. Donec elementum pharetra nibh, eget aliquet tortor lacinia in. Proin rutrum urna id velit fermentum, nec faucibus lectus egestas. Praesent eu tortor libero. Nam nec ipsum et tellus mattis pretium sed eget lorem. Ut cursus at libero id sodales. Phasellus lacus lectus, facilisis sed quam ac, suscipit efficitur est. Ut ex felis, placerat sed ligula mattis, imperdiet laoreet nisi. Nulla maximus iaculis nunc et congue. Fusce felis massa, efficitur nec maximus non, pharetra vitae tortor. Aliquam sollicitudin tincidunt libero, cursus fermentum odio maximus' + name + 'in.`;

console.log(str)

