const Wrapper = document.querySelector('#wrapper');

// GNB Fixed
const TopMenuPosition = Wrapper.offsetTop;

function submenuBarFixed() {
  if (window.scrollY > TopMenuPosition) {
    Wrapper.classList.add('fx');
  } else {
    Wrapper.classList.remove('fx');
  }
}

submenuBarFixed();
document.addEventListener('scroll', submenuBarFixed);

const StoredTheme = localStorage.getItem('darkTheme');

if (StoredTheme !== null) {
  if (StoredTheme === 'true') {
    document.documentElement.classList.add('dark');
  }
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}

const ScreenDark = document.querySelector('#btnDark'); // 버튼 요소 가져오기

ScreenDark.addEventListener('click', () => {
  const Html = document.documentElement;

  if (Html.classList.contains('dark')) {
    Html.classList.remove('dark');
    localStorage.setItem('darkTheme', 'false');
  } else {
    Html.classList.add('dark');
    localStorage.setItem('darkTheme', 'true');
  }
});
