document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("pagina-visivel");

});


function navegarSuave(url) {

    document.body.classList.remove("pagina-visivel");

    document.body.classList.add("pagina-saindo");

    setTimeout(() => {

        window.location.href = url;

    }, 450);

}

const parametros = new URLSearchParams(window.location.search);
const signo = parametros.get("signo");

const btnRevelar = document.querySelector("#btn-revelar");

if (btnRevelar && signo) {
    btnRevelar.addEventListener("click", () => {
        window.location.href = `resultado.html?signo=${signo}`;
    });
}