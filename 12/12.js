const getDate = (selDt, ul)=>{
   const testAPI = '82ca741a2844c5c180a208137bb92bd7' ;
   let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?' ;
   url = `${url}key=${testAPI}&targetDt=${selDt}`;
   
   // console.log(url) 이를 이용해 링크 눌러서 잘 이동하는지 확인 tip

   fetch(url)
      .then(resp => resp.json())
         .then(data => {
            let boxOffice = data.boxOfficeResult.dailyBoxOfficeList ;
            console.log(data)
            
            let tm = boxOffice.map(item => 
               `<li class='mvli' id='li${item.rank}'>
                  <span class='rank'>${item.rank}</span>
                  <span class='movieNm'>${item.movieNm}</span>
                  <span class='openDt'>${item.openDt}</span>
               </li>`) ;
            ul.innerHTML = tm.join('');
         })
      .catch(err => console.error(err)) ;
}

//어제 날짜 구하기 함수
const getYesterday = ()=>{
   const yesterday = new Date() ;
   yesterday.setDate(yesterday.getDate()-1) ; //상수로 선언된 수를 set함수로 변경
   
   //self
   let dt = `${yesterday.getFullYear()}-${yesterday.getMonth()+1}-${yesterday.getDate()}` ;
   let dtArr = dt.split('-').map(a => a.length < 2 ? '0'+a : a).join('-');
   // return dtArr ;

   //수업정석
   const year = yesterday.getFullYear() ;
   const month = (yesterday.getMonth() + 1) < 10 ? '0' + (yesterday.getMonth() + 1) : (yesterday.getMonth() + 1);
   const day = yesterday.getDate() < 10 ? '0' + yesterday.getDate() : yesterday.getDate();

   // let month2 = `0${month}`.slice(-2) ;
   // let month2 = `${month}`.padStart(2,0) ; //2자리로 만드는데 2자리 안 되면 0으로 채워줘
   
   return `${year}-${month}-${day}` ;
}

//DOM 생성
document.addEventListener('DOMContentLoaded', ()=>{
   const dt = document.querySelector('#dt') ;
   const ul = document.querySelector('.sec > ul') ;
   
   // dt.setAttribute('max', yesterday) ;
   let yesterday = getYesterday() ;
   dt.max = yesterday ;
   
   dt.addEventListener('change', ()=>{
      getDate(dt.value.replaceAll('-', ''), ul)
   });
});