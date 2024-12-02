function adicionarNota() {
    const novaNota = document.getElementById('novaNota').value;
    const listaNotas = document.getElementById('listaNotas');

    const li = document.createElement('li');
    li.textContent = novaNota;

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.onclick = function() {
        listaNotas.removeChild(li);
    };

    li.appendChild(botaoExcluir);
    listaNotas.appendChild(li);
}