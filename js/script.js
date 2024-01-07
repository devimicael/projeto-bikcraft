const links = document.querySelectorAll(".header-menu a");
function ativarLinks(link){
    const url = location.href;
    const href = link.href;

    if(url.includes(href)){
        link.classList.add("ativo")
    }
}
links.forEach(ativarLinks);

const parametros = new URLSearchParams(location.search);
parametros.forEach(function(parametro){
    const elemento = document.getElementById(parametro);
    if(elemento) elemento.checked = true;
});

const perguntas = document.querySelectorAll(".perguntas button");
function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', function(evento){
        const pergunta = evento.currentTarget;
        const controls = pergunta.getAttribute('aria-controls');
        const resposta = document.getElementById(controls);
        
        resposta.classList.toggle('ativo');
        const ativo = resposta.classList.contains("ativo");
        pergunta.setAttribute('aria-expanded', ativo);
    } );
}
perguntas.forEach(eventosPerguntas);

const galeria = document.querySelectorAll(".bicicleta-imgs img");
const galeriaContainer = document.querySelector(".bicicleta-imgs");
function eventosGaleria(img){
    img.addEventListener('click', function(evento){
        const elementoImg = evento.currentTarget;
        const media = matchMedia("(min-width: 1000px)").matches;
        if(media){
            galeriaContainer.prepend(elementoImg);
        }
    });
}
galeria.forEach(eventosGaleria);