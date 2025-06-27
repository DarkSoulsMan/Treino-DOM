//exercicio 1
let mensagem = document.getElementById('mensagem');
let mudarMensagem = document.getElementById('mudarTexto');
//exercicio 2
let trocarCor = document.getElementById('mudarCor');
//exercicio 3
let oculto = document.getElementById('oculto');
let visivel = document.getElementById('mostrarParagrafo');
//exercicio 4
let lista = document.getElementById('lista');
let botaoLista = document.getElementById('adicionarItem');
//exercicio 5
let contador = document.getElementById('contador');
let botaoContador = document.getElementById('botaoContador');
let conta = 0;
//exercicio 6
let input = document.getElementById('entrada');
let saidaInput = document.getElementById('saida');
//exercicio 7
let textoShaco = document.getElementById('texto')
let aparece = document.getElementById('botaoMostrar');
let desaparece = document.getElementById('botaoOcultar');
//exercicio 8
let imag = document.getElementById('imagem');
let troca = document.getElementById('trocarImagem');
//exercicio 9
let neoLista = document.getElementById('listaContainer');
let criarLista = document.getElementById('criarLista');
//exercicio 10
let formulario = document.getElementById('nome')
let botaoEnviar = document.getElementById('validar')
let erro = document.getElementById('erro');

//exercicio 1
mudarMensagem.addEventListener('click', function(){
    mensagem.textContent = 'O texto foi alterado'


});
//exercicio 2
trocarCor.addEventListener('click', function(){
    document.body.style.background = 'lightblue'



});
//exercicio 3
visivel.addEventListener('click', function(){
    if(oculto.style.display === 'block'){
        oculto.style.display = 'none';


    }else{
        oculto.style.display = 'block';
    }

})
//exercicio 4
botaoLista.addEventListener('click', function(){
    let novoItem = document.createElement('li');
    novoItem.textContent = 'Novo Item';
    lista.appendChild(novoItem);



});
//exercicio 5
botaoContador.addEventListener('click', function(){
    conta++
    contador.textContent = `${conta}`


});
//exercicio 6
input.addEventListener('input', function(){
    saidaInput.textContent = input.value; //aqui o paragrafo no HTML vai estar recebendo os dados do input



});
//exercicio 7
desaparece.addEventListener('click', function(){
    textoShaco.style.display = "none";


});

aparece.addEventListener('click', function(){
        textoShaco.style.display = 'block'



});
//exercicio 8
troca.addEventListener('click', function(){
    imag.src = 'nero.jpg'

});
//exercicio 9
criarLista.addEventListener('click', function(){
    let receba = document.createElement('ul');

    for(let i = 1; i <= 3; i++){
        let item = document.createElement('li')
            item.textContent = `Item ${i}`;
            receba.appendChild(item);


    }

    neoLista.appendChild(receba);



});
//exercicio 10
botaoEnviar.addEventListener('click', function(){
    if(formulario.value.trim() === ""){
        erro.textContent = 'O campo nome é obrigatório';
    } else {
        alert('Formulário enviado com sucesso');
    }
});




