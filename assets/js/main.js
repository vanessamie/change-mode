/* Acessando os itens*/
const btn = document.getElementById('container__btn');
const title = document.getElementById('container__titulo');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

/* Constantes só para ficar organizado*/
const darkModeClass = 'dark-mode';
const lightModeText = 'Light Mode';
const darkModeText = "Dark Mode";

function changeClasses() {
    btn.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}

/* Alterando o texto */
function changeText() {
    if(btn.classList.contains(darkModeClass)) {
        btn.innerHTML = lightModeText;
        title.innerHTML = `${darkModeText} ON`;
    } else {
        btn.innerHTML = darkModeText;
        title.innerHTML = `${lightModeText} ON`;
    }
}

function changeMode() {
    changeClasses();
    changeText();
}

btn.addEventListener('click', changeMode);

