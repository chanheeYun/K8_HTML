document.addEventListener('DOMContentLoaded', () => {
   const img = document.querySelector('#what');
   const bt = document.getElementById('ok');
   const num1 = document.getElementById('num1');

   //랜덤수
   let n;
   //flag 변수 - 랜덤수 생성 타이밍 조절용
   let flag = false;

   bt.addEventListener('click', (e) => {
      e.preventDefault();

      if (!flag) {
         n = Math.round(Math.random() * 100) + 1;
         console.log(n)
         flag = true;
         if (num1.style.display == 'none') {
            img.setAttribute('src', '../img/what.png');
            num1.style.display = 'inline'
            num1.value='';
            num1.focus();
            bt.innerHTML = '확인';
            return;
         }
      }

      if (parseInt(num1.value) === n) {
         img.setAttribute('src', '../img/good.png');
         num1.style.display = 'none';
         bt.innerHTML = '숫자를 다시 생성하세요.';
         flag = false;
      } else if (parseInt(num1.value) < n) {
         img.setAttribute('src', '../img/thumb-up-red.png');
      } else {
         img.setAttribute('src', '../img/thumb-down-blue.png');
      }
      num1.value='';
   });
});