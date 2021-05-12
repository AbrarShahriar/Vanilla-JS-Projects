const react = document.querySelectorAll('.react')
const reacts = document.querySelectorAll('.reacts')

const duration = 500

for (var i = 0; i < reacts.length; i++) {
  
  let timer
  react[i].addEventListener("click", () => {
    alert(i)
  })

  react[i].addEventListener("touchstart", () => {
    timer = setTimeout(() => {
      reacts[i-1].classList.add("active")
    }, duration)
  })
  
  react[i].addEventListener("touchend", () => {
    clearTimeout(timer)
    reacts[i-1].classList.remove("active")
  })
}