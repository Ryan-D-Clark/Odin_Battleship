const Ship = require("../classes/ship")

class Gameboard{
    constructor(){
        this.ships = []
        this.board = []
        for(let x = 0; x < 100; x++){
            this.board.push({shipLocation:false,isHit:false})
        }

        let carrier = new Ship(5,0,false)
        let battleship = new Ship(4,0,false)
        let cruiser = new Ship(3, 0, false)
        let submarine = new Ship(2,0,false)
        let destroyer = new Ship(4,0,false)
        this.ships.push(carrier, battleship, cruiser, submarine, destroyer)
    }

    getBoard(){
        return this.board
    }

    getPosition(index){
        return this.board[index]
    }

    receiveHit(index){
        this.board[index].isHit = true
    }

    verifyHit(index){
        return this.board[index].shipLocation
    }

    checkValidity(startingIndex, ship){
        let invalidCells = [9,19,29,39,49,59,69,79,89,99]
        // find modulus that takes it under 10, if adding ship length goes over 9 then it is invalid position

    }

    placeShip(startingIndex, ship){
        console.log(this.board[startingIndex].shipLocation)
    }

    automaticPlacement(){

    }

}

module.exports = Gameboard