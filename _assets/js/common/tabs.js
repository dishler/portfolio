// export default () => {
//   document.querySelectorAll('.tabs__btn').forEach((tabsBtn) => {
//     tabsBtn.addEventListener('click', (event) => {
//       const path = event.currentTarget.dataset.path;
//       document.querySelectorAll('.tab-content').forEach((tabContent) => {
//         tabContent.classList.remove('tab-content-active');
//       });
//       document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active'); // начало с таких скобок [] – значит выбираем html Элемент по атрибуту
//     });
//   });
// };


export default () => {
  document.querySelectorAll('.tabs__btn').forEach((btn) => {
    btn.addEventListener('click', (event) => {

      document.querySelectorAll('.tabs__btn').forEach((tabBtn) => {
        tabBtn.classList.remove('tab-content-active');
        tabBtn.style.color = 'grey';
      });
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tab-content').forEach((tabContent) => {
        tabContent.classList.remove('tab-content-active');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
      event.currentTarget.style.color = 'black';

      const inactiveTab = document.querySelector(`.tab-content:not([data-target="${path}"])`);
      inactiveTab.style.color = 'grey';
    });
  });
}



  // export default () => {
  //   document.querySelectorAll('.tabs__btn').forEach((btn) => {
  //     btn.addEventListener('click', (event) => {

  //       document.querySelectorAll('.tabs__btn').forEach((tabBtn) => {
  //         tabBtn.classList.remove('tab-content-active');
  //         tabBtn.style.color = 'grey';
  //         // add this line to make both buttons black
  //         tabBtn.style.color = 'black';
  //       });
  //       const path = event.currentTarget.dataset.path;
  //       document.querySelectorAll('.tab-content').forEach((tabContent) => {
  //         tabContent.classList.remove('tab-content-active');
  //       });

  //       document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
  //       event.currentTarget.style.color = 'black';

  //       const inactiveTab = document.querySelector(`.tab-content:not([data-target="${path}"])`);
  //       inactiveTab.style.color = 'grey';
  //     });
  //   });
  // }

