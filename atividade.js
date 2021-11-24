const button = document.getElementById('open-modal')
const body = document.getElementById('body')
const esc = document.getElementById('modal-wraper')

button.onclick = function () {
  body.classList.add('invisible')
  esc.classList.remove('invisible')
}

// Aqui estamos inserindo o evento de se clicar ESC
// desempenhar uma função. O function(event) é necessario
// para checar o evento que esta ocorrendo.
document.addEventListener('keydown', function (event) {
  // Se a variavel for um evento === a ESC (escape) então o
  // comando entra em ação
  const isEscKey = event.key === 'Escape'
  if (isEscKey) {
    body.classList.remove('invisible')
    esc.classList.add('invisible')
  }
})
