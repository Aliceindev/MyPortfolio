// Menu Hamburger
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Intersection Observer para animações
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
    });
});

const elements = document.querySelectorAll(".hidden, .hiddenUp, .hiddenRight");
elements.forEach((element) => {
    myObserver.observe(element);
});

// Ocultar todas as seções exceto a inicial
function hideAllSectionsExceptFirst() {
    const allSections = document.querySelectorAll(".section");
    allSections.forEach((section, index) => {
        if (index > 0) section.classList.add("hiddenRight");
    });
}

// Alterar conteúdo ao clicar no menu
function changeContent(sectionId) {
    const allSections = document.querySelectorAll(".section");
    const menuLinks = document.querySelectorAll(".menu-link");

    allSections.forEach((section) => {
        section.classList.toggle("show", section.id === sectionId);
        section.classList.toggle("hiddenRight", section.id !== sectionId);
    });

    menuLinks.forEach((link) => link.classList.remove("active"));

    const selectedNavLink = document.querySelector(
        `.menu-link[onclick="changeContent('${sectionId}')"]`
    );
    if (selectedNavLink) {
        selectedNavLink.classList.add("active");
    }

    // Fechar menu no mobile (opcional)
    nav.classList.remove("active");
}

// Inicialização ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const defaultSection = "section1";

    hideAllSectionsExceptFirst();

    const defaultSectionElement = document.getElementById(defaultSection);
    if (defaultSectionElement) {
        defaultSectionElement.classList.add("show");
    }

    const defaultNavLink = document.querySelector(
        `.menu-link[onclick="changeContent('${defaultSection}')"]`
    );
    if (defaultNavLink) {
        defaultNavLink.classList.add("active");
    }
});
