document.addEventListener('DOMContentLoaded', ()=>{
   const img = document.querySelector('#what');
   const bt = document.getElementById('ok');
   const num1 = document.getElementById('num1');

   let n = Math.round(Math.random()*100)+1;

   bt.addEventListener('click', (e)=>{
      e.preventDefault();
      num1.innerHTML = '';
      if (parseInt(num1.value) > n) {
         img.setAttribute('src', '../img/thumb-down-blue.png');
      } else if (parseInt(num1.value) < n){
         img.setAttribute('src', '../img/thumb-up-red.png');
      } else {
         img.setAttribute('src', '../img/good.png');
         num1.style.visibility = 'hidden';
         bt.style.width = '40%';
      }
   });
});