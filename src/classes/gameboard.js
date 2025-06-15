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

    checkValidity(startingIndex, ship, isHorizontal){
        if(isHorizontal){
            if((startingIndex % 10) + ship.length > 10){
                return false
            }
            else{
                for(let i = 0; i < ship.length; i++){
                    if(this.board[startingIndex+i].shipLocation == true){
                        return false
                    }
                }
                return true
            }
        }
        else if(!isHorizontal){
            if(startingIndex + ((ship.length - 1) * 10) > 99){
                return false
            }
            else{
                for(let i = 0; i < ship.length; i++){
                    if(this.board[startingIndex+(i*10)].shipLocation == true){
                        return false
                    }
                }
                return true

            }
        }
    }

    placeShip(startingIndex, ship, shipID, isHorizontal){
        if(isHorizontal){
        for(let i = 0; i < ship.length; i++){
            this.board[startingIndex+i].shipLocation = true
            this.board[startingIndex+i].shipID = shipID
        }
        }
        else{
            for(let i = 0; i < ship.length; i++){
                this.board[startingIndex+(i*10)].shipLocation = true
                this.board[startingIndex+(i*10)].shipID = shipID
            }
        }
    }

    automaticPlacement(){
        for(let ship in this.ships){

            let valid = false
            do{
                let randomPosition = Math.floor(Math.random() * 100)
                let randomAxis = Math.random() >= 0.5
                if(this.checkValidity(randomPosition, this.ships[ship], randomAxis)){
                    this.placeShip(randomPosition, this.ships[ship], ship, randomAxis)
                    valid = true
                }
            }
            while(!valid)


            }
        console.log(this.board)
        }
}

module.exports = Gameboard