const numSum = (s) => {
   let sum = 0;
   for (let t of s) {
      if (isNaN(t)) {
         sum += parseInt(t);
      }
   }
   return sum;
};

document.addEventListener('DOMContentLoaded', () => {
   const txt1 = document.getElementById('txt1');
   const txt2 = document.getElementById('txt2');
   const bt1 = document.querySelector('#bt1');
   const bt2 = document.querySelector('#bt2');
   const bt3 = document.querySelector('#bt3');

   bt1.addEventListener('click', (e) => {
      e.preventDefault();
      let s1 = txt1.value.replaceAll(' ', '');
      let s2 = '';

      //반복문 사용
      // for (let i = s1.length-1; i>=0; i--) {
      //    s2 = s2 + s[i];
      // }

      //split 사용
      s2 = s1.split('').reverse().join('');

      if (s1 == s2) txt2.value = '회문입니다.';
      else txt2.value = '회문이 아닙니다.'
   });

   bt2.addEventListener('click', (e) => {
      e.preventDefault();
      let s1 = txt1.value.split('');
      let sum = 0;
      let cnt = 0;

      for (let i in s1) {
         if (isNaN(s1[i])) {
            s1[i] = ' ';
         }
      }

      s1 = s1.join('');
      let s1_arr = s1.split(' ');
      console.log(s1_arr)
      for (let i of s1_arr) {
         if (i != '') {
            sum = sum + parseInt(i);
            cnt++;
         }

      }

      if (cnt == 0) txt2.value = '숫자가 존재하지 않습니다.';
      else txt2.value = sum;
   });

   bt3.addEventListener('click', () => {
      txt1.focus();
   });
});