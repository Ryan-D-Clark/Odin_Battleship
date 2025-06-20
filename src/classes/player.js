const Gameboard = require("../classes/gameboard")

class Player{
    constructor(name, human){
        this.gameboard = new Gameboard()
        this.hitlist = []
    }

}

module.exports = Player