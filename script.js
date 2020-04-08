//Pseudocode pour commencer

Define gameArea
    gameArea is an array of cells
    
    define cells inside gameArea
        a cell is of type empty, filled by P1 or filled by P2 
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
        a player is either active or passive, and it alternates
        a player has a score, which increments with every win


