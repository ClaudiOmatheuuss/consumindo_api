async function buscaEndereco(cep){
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertido = await consultaCEP.json()
        if (consultaCEPConvertido.erro){
            throw Error('CEP não existente!')
        }
        console.log(consultaCEPConvertido)
        return consultaCEPConvertido
    } catch(erro) {
        console.log(erro)
    }
}

var cep = document.getElementById('cep')
cep.addEventListener('focusout' , () => buscaEndereco(cep.value))