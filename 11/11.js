document.addEventListener('DOMContentLoaded', () => {
   const txt1 = document.querySelector('#txt1');
   const sec1 = document.querySelectorAll('.secBt1');
   const sec2 = document.querySelectorAll('.secBt2');
   const sec3 = document.querySelectorAll('.secBt3');
   const secBt41 = document.querySelector('#secBt41') ;
   const secBt42 = document.querySelector('#secBt42') ;

   //object 생성
   let obj = {
      apple:'🍎', 
      carrot:'🥕', 
      banana:'🍌', 
   } ;

   let jsonDt ;
   secBt41.addEventListener('click', (e)=>{
      e.preventDefault();

      jsonDt = JSON.stringify(obj) ;

      console.log('obj = ', obj) ;
      console.log('obj = ', obj['apple']) ;
      console.log('jsonDt = ', jsonDt) ;
      console.log('jsonDt = ', jsonDt["apple"]) ;//json형태로는 실행되지 않음
   });
   
   secBt42.addEventListener('click', (e)=>{
      e.preventDefault();

      obj2 = JSON.parse(jsonDt) ;

      console.log('obj2 = ', obj2) ;
      console.log('obj2 = ', obj['apple']) ;
   });


   //추가
   for (let bt of sec1) {
      bt.addEventListener('click', (e) => {
         e.preventDefault();

         let additem = bt.innerHTML.replace('+', '');
         txt1.value = txt1.value + additem;
      });
   }

   //삭제
   for (let bt of sec2) {
      bt.addEventListener('click', (e) => {
         e.preventDefault();

         let delitem = bt.innerHTML.replace('-', '');

         //replace 할 때마다 length 변경된다(여기선 문제 없음)
         // for (let i = 0; i < txt1.value.length; i++) {
         //    txt1.value = txt1.value.replace(delitem, '') ;
         // }

         // let tmArr = txt1.value.split('') ; 스플릿으로 하면 이모지 때문에
         // 유니코드로 분리된다 따라서 Array.from 쓰면 돼

         let tmArr = Array.from(txt1.value); //이모지 형태로 분리

         // for (let i = 0; i < tmArr.length; i++) {
         //    if (tmArr[i] == delitem) tmArr[i] = '' ;
         // }

         //위의 코드 축약
         tmArr = tmArr.filter(item => item != delitem);

         txt1.value = tmArr.join('');

         // self
         // txt1.value = txt1.value.replaceAll(delitem, '') ;
      });
   }

   //변경
   for (let bt of sec3) {
      bt.addEventListener('click', (e) => {
         e.preventDefault();

         let items = bt.innerHTML.split('→');

         //case 1
         // txt1.value = txt1.value.replaceAll(items[0], items[1]) ;

         //case 2
         // let tmArr = Array.from(txt1.value);
         // for (let i = 0; i < tmArr.length; i++) {
         //    if (tmArr[i] == ori) tmArr[i] = com ;
         // }
         // tmArr = tmArr.join('');
         // txt1.value = tmArr;

         //case 3
         let tmArr = Array.from(txt1.value);
         tmArr = tmArr.map(item => item == items[0] ? items[1] : item);
         txt1.value = tmArr.join('');
      });
   }
});