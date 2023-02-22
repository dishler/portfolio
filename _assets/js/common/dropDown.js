// export default () => {
//   function dropDown() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }

//   window.onclick = function (event) {
//     if (!event.target.matches('.dropbtn')) {

//       let dropdowns = document.getElementsByClassName("dropdown-content");
//       let i;
//       for (i = 0; i < dropdowns.length; i++) {
//         let openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }
// }

export function show(value) {
  document.querySelector(".text-box").value = value;
}

let dropdown = document.querySelector(".dropdown")
dropdown.onclick = function () {
  dropdown.classList.toggle("active")
}




