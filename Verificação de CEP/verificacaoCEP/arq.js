function VerificaoLocal() { // ele irá verificar o CEP e dará algumas informações do local, (rua, cidade e estado)
    let inputEl = document.querySelector("#tudo").value

    if (inputEl.length !== 8 || !"!/^{8}\d$/") {
        alert("O CEP deve conter exatamente 8 números.") // se o campo input tiver menos ou mais de 8 digitos, irá aparecer um alerta identificando o erro
        document.querySelector("#tudo").value = ""
        document.querySelector("#resultado").innerHTML = ""
        return;
    }

    let localidade = new XMLHttpRequest()
    localidade.open('GET', 'https://viacep.com.br/ws/' + inputEl + '/json/')
    localidade.send()

    localidade.onload = function() {
        document.querySelector("#resultado").innerHTML = this.responseText

        let objEl = JSON.parse(this.responseText)
        let rua, cidade, estado
        rua = objEl.logradouro
        cidade = objEl.localidade
        estado = objEl.uf
        
        let inforEl = document.querySelector("#resultado").value

        if(inforEl = rua && cidade && estado) {
            document.querySelector("#resultado").innerHTML = `Rua: ${rua} <br> Cidade: ${cidade} <br> Estado: ${estado}`
        } else {
            document.querySelector("#resultado").innerHTML = "CEP não identificado"
        }
    }
}
function regenerarCEP() { // da um exemplo de CEP
    document.querySelector("#tudo").value = "01001000"
}
function ApagarLocal() { // apagar o CEP digitado e as informações do CEP digitado anteriormente
    document.querySelector("#tudo").value = ""
    document.querySelector("#resultado").innerHTML = ""
}