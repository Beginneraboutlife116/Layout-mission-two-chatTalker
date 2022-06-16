export const countForSpreadsheet = document.querySelector('.plan__list').addEventListener('input', (event) => {
  const peopleList = document.querySelectorAll('[data-people]')
  const basicPriceAccount = document.querySelector('[data-price="basic"]')
  const standardPriceAccount = document.querySelector('[data-price="standard"]')
  const value = event.target.value
  peopleList.forEach(person => {
    person.innerHTML = ''
    person.insertAdjacentHTML("afterbegin", inputValueAndUnit(value, '位'))
  })
  basicPriceAccount.innerHTML = ''
  standardPriceAccount.innerHTML = ''
  if (value === '>25000') {
    basicPriceAccount.insertAdjacentHTML("afterbegin", inputValueAndUnit('請洽專員&#9995;'))
    standardPriceAccount.insertAdjacentHTML("afterbegin", inputValueAndUnit('請洽專員&#9995;'))  
  } else {
    basicPriceAccount.insertAdjacentHTML("afterbegin", inputValueAndUnit(value * 0.06, 'TWD'))
    standardPriceAccount.insertAdjacentHTML("afterbegin", inputValueAndUnit(value * 0.16, 'TWD'))
  }
})

function inputValueAndUnit(value, unit = '') {
  return `
    ${value} <sub class="text_3">${unit}</sub>
  `
}