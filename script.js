

const players = (() =>{
    const Player = (name,symbol) => {
        let score = 0;
        return {name, score, symbol};
    };
    
    const playerOne = Player('P1','X');
    const playerTwo = Player('P2','O');
    let activePlayer = playerOne;
    const defineNewActivePlayer = () =>{
        let newActivePlayer = ((players.activePlayer == playerOne) ? playerTwo : playerOne)
        players.activePlayer = newActivePlayer
        } 
    return {playerOne, playerTwo, defineNewActivePlayer, activePlayer}    
})();

const GameFlow = (() =>{

    var gameOngoing = false;

    const isGameOngoing = () => {
        return gameOngoing
    }

    const Cell = (number) => {
        let symbol = '';
        return {symbol, number};
    };

    const cells = [];
    for (i=0; i<9; i++)
        cells[i] = Cell(i+1);

    const isItWin = () => {
        const possibleWins = [[cells[0],cells[1],cells[2]],
                            [cells[3],cells[4],cells[5]],
                            [cells[6],cells[7],cells[8]], //the three horizontal wins
                            [cells[0],cells[3],cells[6]],
                            [cells[1],cells[4],cells[7]],
                            [cells[2],cells[5],cells[8]], //the three vertical wins
                            [cells[0],cells[4],cells[8]],
                            [cells[2],cells[4],cells[6]]]; //the three diagonal ones
        for (list of possibleWins) {
            if (list[0].symbol == list[1].symbol && list[1].symbol == list[2].symbol && list[0].symbol != ""){
                return(list)
            }
        }
        return false //If it returns false on the last check, then it's a draw !
    }

    const highlightCombo = () => {
        var arrayCombo = isItWin();
        for (item of arrayCombo) {
            console.log(item.number) //rajouter le changement de couleur ici
        }
    }

    var turnsElapsed = 0;

    const howManyTurns = () => {
        turnsElapsed ++;
        return turnsElapsed
    }

    const isItEndgame = () =>{
        return (howManyTurns() >= 9)
    }

    const stopGame = () =>{
        gameOngoing = false
        GameFlow.renderGameArea()
    }

    const defineWinner = (word) => {
        stopGame()
        switch(word){
            case 'win':
                //players.activePlayer.score++
                players.defineNewActivePlayer()
                console.log(`The winner is ${players.activePlayer.name}`)
                highlightCombo()
                //render le score
                break;
            case 'draw':
                console.log(`This is a draw`)
                break;
        }
    }

    const renderGameArea = () =>{
        let gridArea = document.getElementsByClassName('gameArea')[0];
        gridArea.innerHTML = "";
        for (cell of cells) {
            makeGrid(cell.symbol)
        }
    }

    const makeGrid = (symbol) =>{
        let gridArea = document.getElementsByClassName('gameArea')[0];
        var gridPart = document.createElement('div')
        gridPart.classList.add('cell')
        gridPart.classList.add('pos'+cell.number)
        gridPart.setAttribute('number',cell.number)
        gridPart.innerText = symbol
        gridPart.addEventListener('click',function(){
            var cellNumber = this.getAttribute('number')
            onCellclick(cellNumber)
        })
        gridArea.appendChild(gridPart)
    }


    const startGame = () => {
        turnsElapsed = 0
        for (cell of cells)
            cell.symbol = ""
        renderGameArea();
        gameOngoing = true
    } 

    return {startGame, cells, isItWin, isItEndgame, isGameOngoing, defineWinner, renderGameArea}
})()


const playOnCell = (cellNumber) => {
    if (GameFlow.cells[cellNumber-1].symbol == '') {
        GameFlow.cells[cellNumber-1].symbol = players.activePlayer.symbol //ca reprend le nombre de la ceullue cliquée
        console.log(players.activePlayer)
        players.defineNewActivePlayer()
        GameFlow.isItWin()
        GameFlow.renderGameArea()
    }
}

const onCellclick = (cellNumber) =>{
    if (GameFlow.isGameOngoing()) {
        playOnCell(cellNumber)
        if (GameFlow.isItWin()) {
            GameFlow.defineWinner('win')
        }
        else if (GameFlow.isItEndgame()) {
            GameFlow.defineWinner('draw')
        } 
    }    
}


GameFlow.renderGameArea()
document.getElementsByName('buttonOne')[0].addEventListener('click',function(){
    GameFlow.startGame()
})