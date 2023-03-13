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


