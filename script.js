async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ``
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertido = await consultaCEP.json()
        if (consultaCEPConvertido.erro){
            throw Error('CEP não existente!')
        }
        var logradouro = document.getElementById('endereco')
        var bairro = document.getElementById('bairro')
        var cidade = document.getElementById('cidade')
        var estado = document.getElementById('estado')

        logradouro.value = consultaCEPConvertido.logradouro
        bairro.value = consultaCEPConvertido.bairro
        cidade.value = consultaCEPConvertido.localidade
        estado.value = consultaCEPConvertido.uf

        console.log(consultaCEPConvertido)
        return consultaCEPConvertido
    } catch(erro) {
        mensagemErro.innerHTML = `<p> CEP inválido. Tente novamente!</p>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep')
cep.addEventListener("focusout" , () => buscaEndereco(cep.value))