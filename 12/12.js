const testAPI = '82ca741a2844c5c180a208137bb92bd7';

const getDetail = (movieCd) => {
   const mvInfo = document.querySelector('#mvInfo');
   let url = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?';
   url = `${url}key=${testAPI}&movieCd=${movieCd}`;
   // console.log(url)
   fetch(url)
      .then(resp => resp.json())
      .then(data => {
         console.log(data)
         let detail = data.movieInfoResult.movieInfo;

         let actors = detail.actors.map(item => item.peopleNm);
         if (actors.length > 3) {
            actors = actors.slice(0, 2);
         } 
         let genre = detail.genres.map(item => item.genreNm).join(', ');
         let grade = detail.audits;
         let direc = detail.directors;

         let tm = `<li>영화명 : ${detail.movieNm} (${grade[0].watchGradeNm})</li>
                  <li>장르 : ${genre}</li>
                  <li>감독 : ${direc[0].peopleNm}</li>
                  <li>출연 : ${actors.join(', ')}</li>
                  <li>상영 시간 : ${detail.showTm}분</li>`;
         mvInfo.innerHTML = tm ;
      })
      .catch(err => console.error(err));
}

const getData = (selDt, ul, nation) => {
   let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
   url = `${url}key=${testAPI}&targetDt=${selDt}`;
   if (nation != 'T') {
      url = `${url}&repNationCd=${nation}`;
   }
   fetch(url)
      .then(resp => resp.json())
      .then(data => {
         // console.log(data)
         let boxOffice = data.boxOfficeResult.dailyBoxOfficeList;

         let tm = boxOffice.map(item =>
            `<a href="#" onClick='getDetail(${item.movieCd})'>
               <li class='mvli' id='li${item.rank}'>
                  <span class='rank'>${item.rank}</span>
                  <span class='movieNm'>${item.movieNm}</span>
                  <span class='openDt'>${item.openDt}</span>
                  <span class='rankInten'>${item.rankInten > 0 ?
               "<span class='spred'>▲ </span>" : item.rankInten < 0 ?
                  "<span class='spblue'>▼ </span>" : '-'}${Math.abs(item.rankInten) != 0 ? Math.abs(item.rankInten) : ''}</span>
               </li>
            </a>`);
         ul.innerHTML = tm.join('');
      })
      .catch(err => console.error(err));
}

//어제 날짜 구하기 함수
const getYesterday = () => {
   const yesterday = new Date();
   yesterday.setDate(yesterday.getDate() - 1); //상수로 선언된 수를 set함수로 변경

   //self
   let dt = `${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`;
   let dtArr = dt.split('-').map(a => a.length < 2 ? '0' + a : a).join('-');
   // return dtArr ;

   //수업정석
   const year = yesterday.getFullYear();
   const month = (yesterday.getMonth() + 1) < 10 ? '0' + (yesterday.getMonth() + 1) : (yesterday.getMonth() + 1);
   const day = yesterday.getDate() < 10 ? '0' + yesterday.getDate() : yesterday.getDate();

   // let month2 = `0${month}`.slice(-2) ;
   // let month2 = `${month}`.padStart(2,0) ; //2자리로 만드는데 2자리 안 되면 0으로 채워줘

   return `${year}-${month}-${day}`;
}

const getGubun = () => {
   //radio 요소 가져오기
   // const r1 = document.querySelector('#r1');
   // const r2 = document.querySelector('#r2');
   // const r3 = document.querySelector('#r3');

   // if (r1.checked) return r1.value ;
   // else if (r2.checked) return r2.value;
   // else return r3.value;
   const gubun = document.querySelector('input[name=contury]:checked');
   return gubun.value
}

//DOM 생성
document.addEventListener('DOMContentLoaded', () => {
   const dt = document.querySelector('#dt');
   const ul = document.querySelector('.sec > ul');
   const rad = document.getElementsByName('contury');
   const info = document.querySelector('#mvInfo');
   // const rad = document.querySelectorAll('input[name=contury]') ;

   // dt.setAttribute('max', yesterday) ;
   let yesterday = getYesterday();
   dt.max = yesterday;

   //date의 기본값
   dt.value = yesterday;

   //self
   // const rad2 = Array.from(rad) ;
   // let rad3 = rad2.filter(item => item.checked === true ) ;
   // getDate(dt.value.replaceAll('-', ''), ul, rad3[0].value);

   //첫 페이지 보이기
   getData(dt.value.replaceAll('-', ''), ul, getGubun());

   dt.addEventListener('change', () => {
      getData(dt.value.replaceAll('-', ''), ul, getGubun())
      info.innerHTML = '';
   });
   
   for (let r of rad) {
      r.addEventListener('click', () => {
         if (r.checked) {
            getData(dt.value.replaceAll('-', ''), ul, r.value);
            info.innerHTML = '';
         }
      });
   }
});