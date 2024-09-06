const disp = (a, b, c, dsp) => {
   a.style.display = dsp;
   b.style.display = dsp;
   c.style.display = dsp;
}

document.addEventListener('DOMContentLoaded', () => {
   const divNum = document.querySelector('#divNum');
   const divPlus = document.querySelector('.divPlus');
   const divBonus = document.querySelector('#divBonus');
   const bt = document.querySelector('button');

   //요소 숨기기
   // divNum.style.display = 'none';
   // divPlus.style.display = 'none';
   // divBonus.style.display = 'none';
   disp(divNum, divPlus, divBonus, 'none') ;

   //버튼 클릭
   bt.addEventListener('click', (e) => {
      e.preventDefault();

      let arr = [];

      while (arr.length < 7) {
         let n = Math.floor(Math.random() * 45) + 1;
         if (!arr.includes(n)) arr.push(n);
      }

      let arrBonus = arr.splice(6, 1);
      arr.sort((a, b) => a - b);
      console.log(arr)
      console.log(arrBonus)

      arr = arr.map(item => `<span class='sp${Math.floor(item / 10)}'>${item}</span>`);
      arr = arr.join('');
      divNum.innerHTML = arr;

      arrBonus = arrBonus.map(item => `<span class='sp${Math.floor(item / 10)}'>${item}</span>`);
      arrBonus = arrBonus.join('');
      divBonus.innerHTML = arrBonus;

      disp(divNum, divPlus, divBonus, 'block') ;

      // self
      // for (let a of arr) divNum.innerHTML = `<span class='sp${parseInt(parseInt(a) / 10)}'>${a}</span>` ;
      // divBonus.innerHTML = `<span class='sp${parseInt(parseInt(arrBonus) / 10)}>${arrBonus}</span>` ;
      // divNum.style.display = 'inline-flex';
      // divPlus.style.display = 'inline-flex';
      // divBonus.style.display = 'inline-flex';


   });
});