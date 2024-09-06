let arr = [1, 2, 3, 4, 5];

console.log('arr = ', arr);
console.log('arr 개수 : ', arr.length);

//배열 요소 접근
console.log('첫 번째 요소 접근 : ', arr[0]);
console.log('두 번째 요소 접근 : ', arr[1]);

//배열의 전체 요소에 접근 : 배열의 순회 for문의 차이 알아보기
console.log('for')
for (let i = 0; i < arr.length; i++) {
   console.log(`${i + 1}번째 : ${arr[i]}`);
}

console.log('for ... in')
for (let i in arr) {
   console.log(`${parseInt(i) + 1}번째 : ${arr[i]}`)//i는 문자열로 온다
}

console.log('for ... of')
for (let item of arr) {
   console.log(`${item} : ${item % 2 == 0 ? '짝' : '홀'}`)//삼항연산은 수식
}

//구조 분해 : return의 여러 값을 각각 변수에 할당한다
for (let [i, item] of arr.entries()) {
   console.log(`${parseInt(i) + 1}번째 : ${item} : ${item % 2 == 0 ? '짝' : '홀'}`)//삼항연산은 수식
}

console.log('foreach') //for entries와 반환되는 변수 순서가 다르다
arr.forEach((item, i) => {
   console.log(`${parseInt(i) + 1}번째 : ${item} : ${item % 2 == 0 ? '짝' : '홀'}`)//삼항연산은 수식
});

// arr = [] ;
// arr.length = 0 ;
// console.log('arr = ', arr) ;

//맨 뒤에 추가
arr.push(6);
console.log('arr push : ', arr);
//맨 뒤에 삭제
arr.pop();
console.log('arr pop', arr);

//맨 처음 추가
arr.unshift(6);
console.log('arr unshift : ', arr);
//맨 처음 삭제
arr.shift();
console.log('arr shift : ', arr);

//splice로 삭제
let arr2 = arr.splice(2, 2); //배열형태로 반환
console.log('arr splice : ', arr);
console.log('arr2 : ', arr2);

//splice로 변경
arr.splice(1, 1, 'a');
console.log('arr :', arr)

//splice로 추가
arr.splice(2, 0, 3); //0하면 배열에 추가한다
console.log('arr :', arr);

arr = [1, 2, 3, 4, 5] ;
arr2 = [];

for (let item of arr){
   let item2 = item * 2 ;
   arr2.push(item2);
}
console.log('arr for ... of 결과 arr2 : ', arr2) ;

arr2 = arr.map((item)=>{
   let item2 = item * 2 ;
   return item2 ;
}) ;
console.log('arr map 결과 arr2 : ', arr2) ;

arr2 = arr.map((item, i)=>{
   let item2 = item * 2 ;
   console.log(i) ;
   return item2 ;
}) ;

   //      ||
   //      ||
   //     \  /
   //      \/

//callback 함수 내에 매개변수 1개면 () 생략 가능
//새로 변수 만들 필요 없다
//callback 함수 body부분에 return만 있을 때 {}와 return 생략 가능
arr2 = arr.map(item => item * 2) ;
console.log('arr map 결과 arr2 : ', arr2) ;

arr2 = arr.map((item, i) => item * i) ;
console.log('arr map index * 요소 결과 arr2 : ', arr2) ;

arr2 = arr.map(item => item % 2 == 0 ? '짝' : '홀' ) ;
console.log('arr map 결과 arr2 : ', arr2) ;

arr2 = [] ;
for (let item of arr) {
   if (item % 2 == 0) arr2.push(item) ;
}

console.log('arr for ... of 결과 arr2 : ', arr2) ;

arr2 = arr.filter(item => item % 2 == 0) ;
console.log('arr filter 결과 arr2 : ', arr2) ;

arr = [4, 5, 1, 2, 3] ;
console.log(`${arr} => 오름차순 정렬 ${arr.sort()}`)
console.log(`${arr} => 오름차순 정렬 ${arr.sort((a, b)=>a-b)}`)
console.log(`${arr} => 내림차순 정렬 ${arr.sort((a, b)=>b-a)}`)