// Estrutura basica de JS
// objetos-  ({carro: "gol", cor: "vermelho"})
// funções- function()
// funções - function liquidificador(frutas){aqui vem o código da função, frutas é a variável}
// variavés em JS precisam ser designadas da seguinte forma: var nome = 'Jorge'
// constantes são variaveis imutaveis: const name = "Jorge". caso se tente atribuir outro valor, irá ocasionar um erro
//atribuindo um objeto const pessoa = { nome: "Jorge", idade: "27", falar: function() {alert(pessoa.name)}}
// podemos fazer a função funcionar com pessoa.falar()

//Agora vamos programa a função de Abrir menu do html ao click
//DOM Document object model

// Inicialmente vamos ancorar o seletor header nev na constante nav
const nav = document.querySelector('#header nav')
//Agora vamos criar a constante toggle pra procurar TUODO na tag nav que possui a classe toggle
const toggle = document.querySelectorAll('nav .toggle')
// sabemos que há dois toggles no html, um para abrir r outro para fechar o menu, dessa forma usmaos um laço de repetição (como em python). A sintaxe aqui é da seguinte forma:
for (const element of toggle) {
  // ao elemento adicionamos um evento(que será o click)
  element.addEventListener('click', function () {
    // aqui estamos indo no nav, em sua lista de classes, adicionando o método toggle que faz com que, se tiver show, ele retira, se não tiver, ele coloca (lá no html, entra automatico). Isso faz o meu aparecer ou desaparecer quando clicado
    nav.classList.toggle('show')
  })
}

// Quando clicar em um item do menu, esconder o menu
// pesuisar todos os seletores em "a" dos li dos ul do nac
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    //vamos remover a classe show quando clicarmos em algum ponto do menu para ele sair da frente
    nav.classList.remove('show')
  })
}

// Carrosel do swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mouseWheel: true,
  keyboard: true,
  //setando que após 767 pixels haja uma mudança, no caso, dar pra ver 2 slides na pagina e ajustado pelo set
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/*botão de voltar para o topo*/
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 460) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})

// Menu ativo conforme a seção visivel na página
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  //aquie stamos estabelecendo uma constante uqe recebe o deslocamento do eixo Y da pagina somado com (tamanho total da pagina dividida em 8 secções e multiplicado por 4).
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  //sempre que a seção passar desse resultado (uma linha imaginaria) no menu será destacado qual seção que estamos. Então para cada seção:
  for (const section of sections) {
    const sectionTop = section.OffsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  activateMenuAtCurrentSection()
})
