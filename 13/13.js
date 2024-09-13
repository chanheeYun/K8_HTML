// let arr = [0,0,0,0,0,0,0,0,1];
// let isSuffle = false;
let flag = false;

const shuffle = (f) => {
   let n = Math.floor(Math.random() * 9);
   flag = true;
   return n;
}

const retry = () => {
   const bt = document.querySelector('#bomb');
   bt.innerHTML = '↻ Retry';
   flag = false;
}

document.addEventListener('DOMContentLoaded', () => {
   const boxes = document.querySelectorAll('.boxes');
   const bt = document.querySelector('#bomb');
   const result = document.querySelector('#result');

   let n;
   let cnt = 0;

   bt.addEventListener('click', (e) => {
      e.preventDefault();

      if (!flag) n = shuffle(flag);
      console.log(n + 1)

      for (let b in boxes) {
         boxes[b].innerHTML = `${parseInt(b) + 1}`;
      }
      result.innerHTML = '폭탄을 찾아라!';
      result.style.tranform = 'none';
      bt.innerHTML = "Let's find";

   });


   for (let box of boxes) {
      box.addEventListener('click', (e) => {
         e.preventDefault();
         if (result.innerHTML == 'BOOM!!') return;

         if (flag) {
            if (box === boxes[n]) {
               if (cnt == 8) {
                  box.innerHTML = `<img src='../img/hart/hart.png' alt='hart' />`;
                  result.innerHTML = 'Misson Clear';
                  retry();
               } else {
                  box.innerHTML = `<img src='../img/hart/boom.png' alt='boom' />`;
                  result.innerHTML = '<h1>BOOM!!</h1>'
                  retry();
               }
            } else {
               box.innerHTML = `<img src='../img/hart/hart.png' alt='hart' />`;
               cnt++;
            }
         } else {
            alert("버튼을 눌러 폭탄을 생성해주세요.");
            return;
         }
      });
   }
});