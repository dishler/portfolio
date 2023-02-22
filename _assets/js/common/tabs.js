export default () => {
  document.querySelectorAll('.tabs__btn').forEach((tabsBtn) => {
    tabsBtn.addEventListener('click', (event) => {
      const path = event.currentTarget.dataset.path;
      console.log(path);
      document.querySelectorAll('.tab-content').forEach((tabContent) => {
        tabContent.classList.remove('tab-content-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active'); // начало с таких скобок [] – значит выбираем html Элемент по атрибуту
    });
  });
};