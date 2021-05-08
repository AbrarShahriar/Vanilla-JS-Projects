const accordion = document.querySelectorAll(".accordion")
const accordionBody = document.querySelectorAll(".accordion__body")

for(let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", e => {
    accordion[i].classList.toggle("accordion--active")
  
    if (parseInt(accordionBody[i].style.maxHeight) > 0) {
      accordionBody[i].style.maxHeight = 0
    } else {
      accordionBody[i].style.maxHeight = accordionBody[i].scrollHeight + "px"
    }
  })
}
