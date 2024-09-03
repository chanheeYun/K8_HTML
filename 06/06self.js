document.addEventListener('DOMContentLoaded', ()=>{
   const bt1 = document.getElementById('bt1');
   const bt2 = document.getElementById('bt2');
   const bt3 = document.getElementById('bt3');
   const bt4 = document.getElementById('bt4');
   const bt5 = document.getElementById('bt5');
   const bt6 = document.getElementById('bt6');
   const img1 = document.querySelector('#msg1 > img');
   const img2 = document.querySelector('#msg2 > img');
   const result = document.getElementById('result');

   bt1.addEventListener('click', ()=>{
      let n=Math.floor(Math.random()*6)+1;
      img1.setAttribute('src', `../img/${n}.png`);
      img2.setAttribute('src', '../img/1.png');
   });
   bt2.addEventListener('click', ()=>{
      let n=Math.floor(Math.random()*6)+1;
      img1.setAttribute('src', `../img/${n}.png`);
      img2.setAttribute('src', '../img/2.png');
   });
   bt3.addEventListener('click', ()=>{
      let n=Math.floor(Math.random()*6)+1;
      img1.setAttribute('src', `../img/${n}.png`);
      img2.setAttribute('src', '../img/3.png');
   });
   bt4.addEventListener('click', ()=>{
      let n=Math.floor(Math.random()*6)+1;
      img1.setAttribute('src', `../img/${n}.png`);
      img2.setAttribute('src', '../img/4.png');
   });
   bt5.addEventListener('click', ()=>{
      let n=Math.floor(Math.random()*6)+1;
      img1.setAttribute('src', `../img/${n}.png`);
      img2.setAttribute('src', '../img/5.png');
   });
   bt6.addEventListener('click', ()=>{
      let n=Math.floor(Math.random()*6)+1;
      img1.setAttribute('src', `../img/${n}.png`);
      img2.setAttribute('src', '../img/6.png');
   });
});