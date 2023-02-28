export function show(value) {
  document.querySelector(".text-box").value = value;
}

let dropdown = document.querySelector(".dropdown--footer")
dropdown.onclick = function () {
  dropdown.classList.toggle("active")
}
