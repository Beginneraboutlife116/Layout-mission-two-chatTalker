// click 'TOP' button
const backToTop = document.querySelector('[data-back-to-top]')
backToTop.addEventListener('click', () => window.scrollTo(top))

// scroll mechanism
const scroller = document.querySelector('[data-scroller]')
const scrolledElements = document.querySelectorAll('[data-select]')

const scrollUnit = scroller.scrollWidth / (scrolledElements.length * 2)
let currentScrollNumber = 0
let currentScrollX = scroller.scrollLeft

scroller.addEventListener('scroll', () => {
  currentScrollX = scroller.scrollLeft
  scrolledElements[currentScrollNumber].dataset.select = false
  if (currentScrollX <= scrollUnit) {
    currentScrollNumber = 0
  } else if (currentScrollX <= scrollUnit * 3) {
    currentScrollNumber = 1
  } else if (currentScrollX <= scrollUnit * 5) {
    currentScrollNumber = 2
  } else {
    currentScrollNumber = 3
  }
  scrolledElements[currentScrollNumber].dataset.select = true
})