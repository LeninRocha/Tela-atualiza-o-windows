var porcentagem = 0
function inciarContagem(){

    var campo = document.getElementById('numero')

    porcentagem += 1
    campo.innerHTML = porcentagem
    setTimeout(inciarContagem, 90000);
}
