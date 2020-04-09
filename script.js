//Pseudocode pour commencer

const GameBoard = (() => {
    const newGameBoardArray = () => {['','','',
                            '','','',
                            '','','']}
    return {newGameBoardArray}
})();

const players = (() =>{
    const Player = (name,symbol) => {
        const score = 0;
        return {name, score, symbol};
    };
    const playerOne = Player('playerOne','X');
    const playerTwo = Player('playerTwo','O');
    const activePlayer = playerOne;
    const defineNewActivePlayer = () =>{
        activePlayer = activePlayer == playerOne ? playerTwo : playerOne
    } 
    return {playerOne, playerTwo, activePlayer, defineNewActivePlayer}    
})();

const GameFlow = (() =>{
    const Cell = (number) => {
        const symbol = '';
        return {symbol, number};
    };
    const startGame = () => {
        const gameBoard = GameBoard.newGameBoardArray();
        return {gameBoard}
    } 
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
    for array of possibleWins {
        if array[0] == array[1] && array[1] == array[2] && array[0] != ''
            return (array[0] == 'x' ? "PlayerOne" : "PlayerTwo")
    }
        
                        }
    return {startGame, cells}
})()

const onCellClick = () => {
    GameFlow.cells[this.number].symbol = players.activePlayer.symbol //ca reprend le nombre de la ceullue cliquée
    changer la classe de la celle;
    GameFlow.defineNewActivePlayer(); 
    check if a line is lmade
}


    gameArea is an array of cells
    si le nombre de cells empty est inférieur à 1
        le jeu est fini
        

define gameFlow
a game is started or not
a game is win or not
while the game is not win and started
    activePlayer est égal à (P1 ou P2)
    la fonction switchturn après chaque coup
        si P1 est actif, 
            P1 est inactif et p2 est actif
        si P2 est actif
            P1 est actif et p2 est inactif  


    define cells inside gameArea
        a cell has a number
        a cell can be filled a cell with the type of the active player,

    define lines inside gameArea
        lines are an array of all lines
        a line is composed of 3 with cells, define all lines possibles
        a line is of type empty, near-filled, or filled
            a line is empty if all cells are of type empty
            a line is near-fileld if two cells are not of type empty
            a line is filled if all cells are not of type empty

    define player
        a player is either of type P1 or P2
        a player is eother X or O
        a player is either active or passive, and it alternates
            function switchTurn

        a player has a score, which increments with every win



