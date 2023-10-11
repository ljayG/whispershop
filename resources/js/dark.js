// const StoredTheme = localStorage.getItem('darkTheme');

// if (StoredTheme !== null) {
//   if (StoredTheme === 'true') {
//     document.documentElement.classList.add('dark');
//   }
// } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//   document.documentElement.classList.add('dark');
// }

// const ScreenDark = document.querySelector('#btnDark'); // 버튼 요소 가져오기

// ScreenDark.addEventListener('click', () => {
//   const Html = document.documentElement;

//   if (Html.classList.contains('dark')) {
//     Html.classList.remove('dark');
//     localStorage.setItem('darkTheme', 'false');
//   } else {
//     Html.classList.add('dark');
//     localStorage.setItem('darkTheme', 'true');
//   }
// });

const ScreenSelect = document.querySelector('#screenSelect'); // 버튼 요소 가져오기

ScreenSelect.addEventListener('click', () => {
  const Html = document.documentElement;
  var ScreenModeTitle = document.querySelector('.scrmode-tit');

  if (Html.classList.contains('dark')) {
    Html.classList.remove('dark');
    ScreenModeTitle.innerText = '일반모드 화면';
    localStorage.setItem('darkTheme', 'false');
  } else {
    Html.classList.add('dark');
    ScreenModeTitle.innerText = '다크모드 화면';
    localStorage.setItem('darkTheme', 'true');
  }
});

// // 쿠키 저장하기
// // setCookie => saveid함수에서 넘겨준 시간이 현재시간과 비교해서 쿠키를 생성하고 지워주는 역할
// function setCookie(cookieName, value, exdays) {
//   var exdate = new Date();
//   exdate.setDate(exdate.getDate() + exdays);
//   var cookieValue = escape(value) + (exdays == null ? '' : '; expires=' + exdate.toGMTString());
//   document.cookie = cookieName + '=' + cookieValue;
// }

// // 쿠키 삭제
// function deleteCookie(cookieName) {
//   var expireDate = new Date();
//   expireDate.setDate(expireDate.getDate() - 1);
//   document.cookie = cookieName + '= ' + '; expires=' + expireDate.toGMTString();
// }

// // 쿠키 가져오기
// function getCookie(cookieName) {
//   cookieName = cookieName + '=';
//   var cookieData = document.cookie;
//   var start = cookieData.indexOf(cookieName);
//   var cookieValue = '';
//   if (start != -1) {
//     // 쿠키가 존재하면
//     start += cookieName.length;
//     var end = cookieData.indexOf(';', start);
//     if (end == -1)
//       // 쿠키 값의 마지막 위치 인덱스 번호 설정
//       end = cookieData.length;
//     console.log('end위치  : ' + end);
//     cookieValue = cookieData.substring(start, end);
//   }
//   return unescape(cookieValue);
// }

// const BodyScreen = document.querySelector([data - dark]);
// const ScreenLight = document.querySelector('#btnLight'); // 버튼 요소 가져오기
// const ScreenDark = document.querySelector('#btnDark'); // 버튼 요소 가져오기

// // 저장하기 버튼 클릭 시
// ScreenDark.addEventListener('click', () => {
//   // 쿠키 저장(대입은 개별로 저장됨)
//   document.cookie = 'id=1';
//   document.cookie = 'age=30';
//   document.cookie = `name=${encodeURIComponent('사자')}`;
// });

// // 불러오기 버튼 클릭 시
// btnRead.addEventListener('click', () => {
//   // 쿠키 불러오기
//   alert(document.cookie);
// });
