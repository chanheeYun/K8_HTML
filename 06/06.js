document.addEventListener('DOMContentLoaded', () => {
   //이미지 가져오기(같은 클래스로 묶이면)
   // const img = document.querySelectorAll('.dice > img') 
   // -> 2개가 가져와 진다
   const img1 = document.querySelector('#msg1 > img');
   const img2 = document.querySelector('#msg2 > img');


   const result = document.getElementById('result');
   const bts = document.querySelectorAll('.bts');


   for (let bt of bts) {
      // console.log(bt);
      bt.addEventListener('click', () => {
         let n = Math.floor(Math.random() * 6) + 1;
         // console.log(bt.textContent.charAt(0)); 
         // 이는 문자열 타입으로 데이터 반환
         let u = parseInt(bt.textContent.charAt(0));

         // 배열로 가져오면 img[0].setAttribute(~~)로 작성
         img1.setAttribute('src', `../img/${n}.png`);
         img1.setAttribute('alt', `computer number ${n}`);

         img2.setAttribute('src', `../img/${u}.png`);
         img2.setAttribute('alt', `user number ${u}`);

         if (u === n) {
            result.innerHTML = '정답';
            // result.style.setProperty('color', 'black');
         } else {
            result.innerHTML = '땡!';
            // result.style.setProperty('color', 'red');
         }
      });
   }
});