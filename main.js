const outerScroller = document.querySelector('.horizontal-scroller')
const innerScroller = document.querySelector('.horizontal-scroller__list')
const scrolledElements = document.querySelectorAll('[data-select]')
const scrollers = document.querySelectorAll('[data-scroller]')

if (window.innerWidth >= 1104) {
  scrollers[0].dataset.scroller = true
  scrollers[1].dataset.scroller = true
} else {
  scrollers[0].dataset.scroller = false
  scrollers[1].dataset.scroller = true
}

window.addEventListener('resize', (event) => {
  //! window resize => just for work
  const currentWidth = event.target.innerWidth
  if (currentWidth >= 1104) {
    innerScroller.dataset.scroller = false
    outerScroller.dataset.scroller = true
  } else {
    innerScroller.dataset.scroller = true
    outerScroller.dataset.scroller = false
  }
})

//* click 'TOP' button
import './src/module/backToTop.js'

//* scroll mechanism
let currentScrollNumber = 0

scrollers.forEach(scroller => {
  if (scroller.dataset.scroller) {
    scroller.addEventListener('scroll', () => {
      let currentScrollX = scroller.scrollLeft
      scrolledElements[currentScrollNumber].dataset.select = false
      if (currentScrollX === 0) {
        currentScrollNumber = 0
      }
      if (currentScrollX === window.innerWidth) {
        currentScrollNumber = 1
      } 
      if (currentScrollX === window.innerWidth * 2) {
        currentScrollNumber = 2
      } 
      if (currentScrollX === window.innerWidth * 3) {
        currentScrollNumber = 3
      } 
      scrolledElements[currentScrollNumber].dataset.select = true
    })
  }
})