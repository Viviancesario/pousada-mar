/* Botão Ler Mais e x*/

//DOM - Document Object Model
//document.body.style.background = 'pink'


const readMoreBtns = document.querySelectorAll('.read-more-btn')
const lessTexts = document.querySelectorAll('.lessText')

const callbackFn = (btn, index) => {
  btn.addEventListener('click', () => {
    lessTexts[index].classList.toggle('show-more')
  })
}

readMoreBtns.forEach(callbackFn)



/* Abre e fecha o menu quando clicar no icone: hamburguer e x*/


const nav = document.querySelector('#header nav ')
const toggle = document.querySelectorAll('nav .toggle  ')

//para cada elemento toggle, criar uma const element e executar as instruções
//instruções: escutar clique no elemento do toggle (neste caso os ícones) e executar a função que é adicionar a classe show no toggle

for (const element of toggle) {
  element.addEventListener('click', function () {

    //coloca a classe show no nav, <nav class="container show">
    nav.classList.toggle('show')
  })
}

// Quando clicar em um item do menu, esconder o menu

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*mostrar shadow após scroll*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight


  window.addEventListener('scroll', function() {
    if(window.scrollY >=navHeight) {
      header.classList.add('scroll')
    } else {
      header.classList.remove('scroll')
    }
    
  })
