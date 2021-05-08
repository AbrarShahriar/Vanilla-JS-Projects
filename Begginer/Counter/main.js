const span = document.querySelector("span")
const addBtn = document.querySelector("#add")
const subtractBtn = document.querySelector("#subtract")

let count = 0
updateDom()

addBtn.addEventListener("click", e => {
  count++
  updateDom()
})

subtractBtn.addEventListener("click", e => {
  count--
  updateDom()
})

function updateDom() {
  span.innerText = count
}