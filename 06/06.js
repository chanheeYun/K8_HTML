document.addEventListener('DOMContentLoaded', () => {
   const img1 = document.querySelector('#msg1 > img');
   const img2 = document.querySelector('#msg2 > img');
   const result = document.getElementById('result');
   const bts = document.querySelectorAll('.bts');

   for (let bt of bts) {
      bt.addEventListener('click', () => {
         let n = Math.floor(Math.random() * 6) + 1;
         let u = bt.textContent;

         img1.setAttribute('src', `../img/${n}.png`);
         img1.setAttribute('alt', `computer number ${n}`);

         img2.setAttribute('src', `../img/${u}.png`);
         img2.setAttribute('alt', `user number ${u}`);

         if (u === n) result.innerHTML = '정답'
         else result.innerHTML = '땡!'
      });
   }

});