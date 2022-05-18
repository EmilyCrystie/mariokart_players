/*
            Objetivos

1. qdo passar mouse em cima do personagem:
    -colocar a classe "selecionado" no personagem, para adicionar animação
    -retirar classe "selecionado"  

2. qdo passar o mouse me cima do personagem, trocar:
    - imagem do jogador
    - nome do jogador
*/

const character = document.querySelectorAll('.character')

character.forEach((character) => {
    character.addEventListener('mouseenter', () => {

        const selectedId = character.attributes.id.value;

        if(selectedId === 'dk') return;
        

        //objetivo 1
        const selectedCharacter = document.querySelector('.selected1')
        selectedCharacter.classList.remove('selected1')

        character.classList.add('selected1')

        //objetivo 2
        const imagePlayer1 = document.getElementById('player1');
        imagePlayer1.src = `assets/imagens/${selectedId}.png`;

        
        const namePlayer1 = document.getElementById('playerName');
        const selectedName = character.getAttribute('data-name')
        namePlayer1.innerHTML = selectedName;
    });
});




