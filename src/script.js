const fadeElems = document.querySelectorAll('.navigation-list')
const body = document.querySelector('body')

fadeElems.forEach(elem => {
  elem.addEventListener('click', () => {
    document.querySelector('.navigation-checkbox').checked = false
  })
})
