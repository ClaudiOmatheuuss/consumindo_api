async function buscaEndereco(){
    var consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/')
    var consultaCEPConvertido = await consultaCEP.json()
    console.log(consultaCEPConvertido)
}

buscaEndereco()