let colorWell
let defaultColor = "#FF0000"
let color = defaultColor
window.onload = () => {
  startup = () => {
    colorWell = document.querySelector("#color")
    colorWell.value = defaultColor
    colorWell.addEventListener("input", update, false)
    colorWell.addEventListener("change", update, false)
    colorWell.select()
  }
  startup()
  getAllCellEls = document.getElementsByClassName("cell")
  for (let i = 0; i < getAllCellEls.length; i++) {
    getAllCellEls[i].addEventListener("click", () => {
      getAllCellEls[i].style.backgroundColor
        ? getAllCellEls[i].removeAttribute("style")
        : (getAllCellEls[i].style.backgroundColor = color)
    })
  }
}

const update = () => {
  color = colorWell.value
  getAllCellEls = document.getElementsByClassName("cell")
  for (let i = 0; i < getAllCellEls.length; i++) {
    getAllCellEls[i].style.backgroundColor
      ? (getAllCellEls[i].style.backgroundColor = color)
      : null
  }
}
