function mudarCores() {
    title1.style.color = 'red';
    div1.style.background = 'gray';
    div1.innerHTML = "<p> Agora é um parágrafo. </p>"
}

title1.addEventListener('click', mudarCores);