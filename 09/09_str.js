//문자열 연습
let s = 'Hello JS?!';

console.log('문자열 : ', s);
console.log('문자열길이 : ', s.length);
console.log('문자열대문자변환 : ', s.toUpperCase());
console.log('문자열소문자변환 : ', s.toLowerCase());
console.log('숫자확인 : ', isNaN(s));
console.log('첫번째글자 : ', s.charAt(0));
console.log('첫번째글자 : ', s[0]);
console.log('마지막글자 : ', s.charAt(s.length - 1));
console.log('마지막글자 : ', s[s.length - 1]);
console.log('마지막글자 : ', s.slice(-1));
console.log('**문자열 분리', s.split('')); //분리자를 ''로 설정하면 한글자씩 잘라준다
for(let c of s) {
   console.log(c);
}

for(let i in s) {
   console.log(i, '=>', s[i])
}// 문자열의 인덱스가 반환된다

//문자열 확인
console.log('h문자열 확인 : ', s.indexOf('h'));
console.log('h문자열 확인 : ', s.includes('h'));
console.log('JS문자열 확인 : ', s.indexOf('JS'));
console.log('JS문자열 확인 : ', s.includes('JS'));

//문자열 자르기
console.log('문자열 자르기 : ', s.substring(5, 0));
console.log('문자열 자르기 : ', s.slice(5, 0));



// s = '1234'
// console.log('문자열 : ', s);
// console.log('숫자확인 : ', isNaN(s)); false;
