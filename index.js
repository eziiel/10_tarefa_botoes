let buttons = document.getElementsByClassName('buttonClass')

buttons = Array.from(buttons)

const buttonSelect = (item) => {
  alert(`Você clicou no botão ${item.innerText}`)
}

buttons.map(item => {
  item.addEventListener('click', () => buttonSelect(item))
})

