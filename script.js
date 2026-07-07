const botao = document.getElementById("botaoMensagem");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {

    mensagem.innerHTML =
        "Obrigado por visitar o Meu Blog Tech! Continue acompanhando as próximas postagens.";

});