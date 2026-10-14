const parametros = new URLSearchParams(window.location.search);
const signo = parametros.get("signo");

const btnRevelar = document.querySelector("#btn-revelar");

if (btnRevelar && signo) {
    btnRevelar.addEventListener("click", () => {
        window.location.href = `resultado.html?signo=${signo}`;
    });
}