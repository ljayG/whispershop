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
