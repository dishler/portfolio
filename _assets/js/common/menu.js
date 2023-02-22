

// export function sidebarMenu() {
//   if (window.innerWidth > 768) {
//     // Make the sidebar sticky if the screen width is greater than 768 pixels
//     var sidebar = document.querySelector('.sidebar');
//     if (sidebar) {
//       var content = document.querySelector('.content');
//       var sidebarOffsetTop = sidebar.offsetTop;
//       var sidebarHeight = sidebar.offsetHeight;
//       var contentHeight = content.offsetHeight;
//       var scrollPosition = window.pageYOffset;
//       if (scrollPosition > sidebarOffsetTop) {
//         sidebar.classList.add('sticky');
//         sidebar.style.top = '0';
//         sidebar.style.bottom = 'auto';
//         if (sidebarOffsetTop + sidebarHeight > contentHeight + scrollPosition) {
//           sidebar.style.bottom = '0';
//           sidebar.style.top = 'auto';
//         }
//       } else {
//         sidebar.classList.remove('sticky');
//         sidebar.style.top = 'auto';
//         sidebar.style.bottom = 'auto';
//       }
//     }
//   }
// };



export default (scroll) => {
  const sideBar = document.querySelector('.sidebar');
  sideBar.addEventListener('click', (event) => {
    console.log(event.target);
    event.preventDefault();
    const attr = event.target.getAttribute('href');
    if (attr) {
      scroll.scrollTo(attr);
    }

  })
}


