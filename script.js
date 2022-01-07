let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Cria ordem aleatória das cores
const shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1)
    }
}

//Muda a cor dos elementos
const lightColor = (element, number) => {
    number = number * 500
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);

}

//Checa se os botões clicados são os mesmos da ordem criada
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] !== order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Continuar?`)
        nextLevel()
    }
}

//função para o clique do usuário
const click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
        
    }, 250);
    
}

//função que retorna a cor
const createColorElement = (color) => {
    if(color == 0 ) {
        return green;
    } else if(color ==1) {
        return red;
    } else if(color ==2) {
        return yellow;
    } else if(color ==3) {
        return blue;
    }
}


//função para o próximo nível do jogo
const nextLevel = () => {
    score++;
    shuffleOrder()
}

//função game over

const gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo.\nClique em ok para reiniciar o jogo.`);
    order = [];
    clickedOrder = [];
    
    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Genesis! Iniciando o novo jogo!')
    score = 0;
    setTimeout(() => {
        nextLevel();
    }, 500)
}

playGame();

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);