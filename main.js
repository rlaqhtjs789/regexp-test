// 빽틱을 써서 문자열을 작성하면 줄바꿈이 가능하다.
let str = `
010-2222-3333
rlaqhtjs789@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

//g ==> 해당문자열을 배열로 만들어줌
//gi ===> 대소문자 구분없이 찾아 배열로 만들어줌 
// const regexp = new RegExp('the', 'gi') //생성자 방식
// const regexp = /the/gi; //리터럴 방식
//console.log(str.match(regexp));

//const regexp = /fox/gi
//console.log(regexp.test(str)); //test는 해당문자열 포함되어 있는지 불린으로 트루 펄스값을 반환
//console.log(str.replace(regexp, 'AAA')); // replace 는 해당 문자열을 찾아서 바꾸고자 하는 문자열로 반환
//str = str.replace(regexp, 'AAA');
//console.log(str);

// console.log(str.match(/\.$/gim)); // match : 해당 문자열을 찾아 배열을 생성
// 정규 표현식에서의 \는 탈출을 의미
// $는 해당 문자열의 끝을 의미


//console.log(str.match(/d$/gim)); // 해당문자열의 끝의 d를 찾는다 // 해당문자열은 줄바꿈시 모든줄을 찾아주지 않으면 null을 출력

//console.log(str.match(/h..p/g)); // ..은 글자단위로 찾을수 있는 효과  ex) http, hxyp

//console.log(str.match(/fox|dog/)); //fox 또는 dog를 를찾는데 fox가 먼저 있을경우 그부분만 출력.

console.log(
    str.match(/(?=@).{1,}/g)
) //특수기호는 일반문자화를 시켜줘야됨 그로인하여 앞에 /입력, 하지만 @이는 입력해도 되고 안해도됨
