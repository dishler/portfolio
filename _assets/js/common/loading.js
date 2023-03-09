const links = document.querySelectorAll('a');
/**
 * ローディング開始
 */
export function initLoading() {
  document.body.style.cursor = 'pointer';
  links.forEach(link => {
    link.addEventListener('click', function () {
      link.style.cursor = 'auto';
    });
  });
}
/**
 * ローディング終了
 */
export function endLoading() {
  document.body.style.cursor = 'auto';
  links.forEach(link => {
    link.addEventListener('click', function () {
      link.style.cursor = 'pointer';
    });
  });
}