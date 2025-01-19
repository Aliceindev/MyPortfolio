const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => 
nav.classList.toggle("active"));


const myObserver = new IntersectionObserver ( (entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else{
            entry.target.classList.remove("show");
        }
    })
});

const elements = document.querySelectorAll(['.hidden', '.hiddenUp', '.hiddenRight']);

elements.forEach( (element) => {
    myObserver.observe(element);
})


// Adicione esta função para ocultar todas as seções, exceto a primeira
function hideAllSectionsExceptFirst() {
    var allSections = document.querySelectorAll('.section');
    for (var i = 1; i < allSections.length; i++) {
        allSections[i].classList.add('hiddenRight');
    }
}

// Chame a função para ocultar todas as seções, exceto a primeira, quando a página carregar
document.addEventListener('DOMContentLoaded', function () {
    // Escolher a seção padrão (Home)
    var defaultSection = 'section1';

    // Adicionar a classe 'active' ao link de navegação padrão
    var defaultNavLink = document.querySelector('.menu-link[href="#"][onclick="changeContent(\'' + defaultSection + '\')"]');
    if (defaultNavLink) {
        defaultNavLink.classList.add('active');
    }

    // Chamar a função para ocultar todas as seções, exceto a primeira, quando a página carregar
    hideAllSectionsExceptFirst();
});

// Atualize a função changeContent
function changeContent(sectionId) {
    var allSections = document.querySelectorAll('.section');
    for (var i = 0; i < allSections.length; i++) {
        if (allSections[i].id !== sectionId) {
            allSections[i].classList.add('hiddenRight');
            /* allSections[i].classList.add('hiddenUp'); */
            allSections[i].classList.remove('show');
        }
    }

    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hiddenRight');
        selectedSection.classList.remove('hiddenUp');
        selectedSection.classList.add('show');
    }

    // Fechar o menu após clicar em uma seção (opcional)
    var navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('show');

    // Atualizar a navegação selecionada
    var menuLinks = document.querySelectorAll('.menu-link');
    for (var j = 0; j < menuLinks.length; j++) {
        menuLinks[j].classList.remove('active');
    }

    var selectedNavLink = document.querySelector('.menu-link[href="#"][onclick="changeContent(\'' + sectionId + '\')"]');
    if (selectedNavLink) {
        selectedNavLink.classList.add('active');
    }
}

