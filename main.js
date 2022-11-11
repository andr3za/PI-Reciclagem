/*  abre e fecha o menu quando clicar no icone: */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("buttonb1");
var btn2 = document.getElementById("buttonb2");
var btn3 = document.getElementById("buttonb3");
var btn4 = document.getElementById("buttonb4");
var btn5 = document.getElementById("buttonb5");

var modalHeader = document.getElementById("modal-header")
var modalFooter = document.getElementById("modal-footer")
var paragrafoModal = document.getElementById("paragrafo-modal")
var tituloModal = document.getElementById("titulo-modal")
var imgModal = document.getElementById("imagem-modal")
var modalContent = document.getElementById("modal-content")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  modalHeader.style.backgroundColor = "#5cb85c";
  modalFooter.style.backgroundColor = "#5cb85c";
  modalContent.style.border = "8px solid green";
  tituloModal.innerText = "LIXEIRA VERDE"
  tituloModal.style.color = "green";
  paragrafoModal.innerText = "A lixeira verde serve para os resíduos de vidro, como garrafas, copos, embalagens de vidro, entre outros. É muito importante destacar os materiais mais perigosos e cortantes em uma lixeira específica, assim o lixeiro saberá que precisa tomar cuidados especiais na hora da coleta."
  imgModal.src = "img/lixeira%20verde.png"
}

btn2.onclick = function() {
  modal.style.display = "block";
  modalHeader.style.backgroundColor = "#ffed5f";
  modalFooter.style.backgroundColor = "#ffed5f";
  modalContent.style.border = "8px solid #ffcc00";
  tituloModal.innerText = "LIXEIRA AMARELA"
  tituloModal.style.color = "#ffcc00";
  paragrafoModal.innerText = "A lixeira verde serve para os resíduos de vidro. Exemplos: Garrafas, copos e embalagens de vidro...."
  imgModal.src = "img/lixeira%20amarela.png"
}

btn3.onclick = function() {
  modal.style.display = "block";
  modalHeader.style.backgroundColor =  "#fa7d74";
  modalFooter.style.backgroundColor = "#fa7d74";
  modalContent.style.border = "8px solid red";
  tituloModal.innerText = "LIXEIRA VERMELHA"
  tituloModal.style.color = "red";
  paragrafoModal.innerText = "Red"
  imgModal.src = "img/lixeira%20vermelha.png"
}

btn4.onclick = function() {
  modal.style.display = "block";
  modalHeader.style.backgroundColor = "#31afcc";
  modalFooter.style.backgroundColor = "#31afcc";
  modalContent.style.border = "8px solid #296d98";
  tituloModal.innerText = "LIXEIRA AZUL"
  tituloModal.style.color = "#296d98";
  paragrafoModal.innerText = "#Blue";
  imgModal.src = "img/lixeira%20azul.png"
}

btn5.onclick = function() {
  modal.style.display = "block";
  modalHeader.style.backgroundColor = "#cfa586";
  modalFooter.style.backgroundColor = "#cfa586";
  modalContent.style.border = "8px solid #9e6847";
  tituloModal.innerText = "LIXEIRA MARROM"
  tituloModal.style.color = "#9e6847";
  paragrafoModal.innerText = "brown";
  imgModal.src = "img/lixeira%20marrom.png"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #presentation .image, #presentation .text, #presentation .image img,
  #dumpsters header, #dumpsters .text, #quiz1 .image, #quiz1 .text, 
  #buttonquiz1, #quiz2 .image, #quiz2 .text, #buttonquiz2, #quiz3 .image, #quiz3 .text, #buttonquiz3,
  #button, footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
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

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})