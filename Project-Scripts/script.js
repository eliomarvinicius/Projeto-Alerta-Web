const body = document.body;
const darkModeButton = document.querySelector('.dark-mode-button');



// Verifica se o modo escuro está ativado no localStorage
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}

// Adiciona o evento de clique para o botão de modo escuro
darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Salva a configuração no localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'true');

    } else {
        localStorage.setItem('darkMode', 'false');
    }
});


function navegarUrlAtividade(){
    window.location.href = 'Atividades.html';
}

function navegarUrlQuemSomos(){
    window.location.href = 'QuemSomos.html';
}

function navegarUrlContribua(){
    window.location.href = 'Contribua.html';
}

function ChatWhatsApp(){
    window.location.href = 'https://wa.me/558189543669';
}

function ChatInstagram(){
    window.location.href = 'https://www.instagram.com/institutoalerta/';
}

// Função do header celular
const navMenu = document.querySelector('.navigation-links');

const menu = document.querySelector('.menu');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})