var consultaCEP = fetch('https://viacep.com.br/ws/01001340/json/')
.then(resposta => resposta.json())
.then(r => {
    if(r.erro){
        throw Error('Esse Cep é inexistente!')
    } else {
        console.log(r)
    }
})
.catch(erro => console.log(erro))
.finally(mensagem => console.log('Processamento concluído!'))

console.log(consultaCEP)