// Seleciona o botão
const button = document.getElementById('changeColorBtn');

// Lista de cores
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F6'];

// Função para mudar a cor do fundo
function changeBackgroundColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}

// Adiciona evento ao botão
button.addEventListener('click', changeBackgroundColor);
