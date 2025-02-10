function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Amigo Secreto');
exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');

let amigos = [];
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim(); // Remove espaços extras
    if (nome === '') {
        alert('Por favor, insira um nome.'); // Validação
        return;
    }

    amigos.push(nome); // Adiciona ao array
    atualizarLista(); // Atualiza a lista exibida
    input.value = ''; // Limpa o campo de entrada
}  

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); // Cria um elemento <li>
        li.textContent = amigos[i]; // Define o texto do <li>
        lista.appendChild(li); // Adiciona o <li> à lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "Nenhum amigo disponível para o sorteio.";
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
}
