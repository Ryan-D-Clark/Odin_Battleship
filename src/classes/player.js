const Gameboard = require("../classes/gameboard")

class Player{
    constructor(name, human){
        this.gameboard = new Gameboard()
    }

}

module.exports = Player