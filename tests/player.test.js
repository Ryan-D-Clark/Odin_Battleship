const Gameboard = require("../src/classes/gameboard")
const Ship = require("../src/classes/ship")
const Player = require("../src/classes/player")

let player = new Player("Test", true)

describe("Testing player class", () =>{
    test("Testing", () =>{
        console.log(player.gameboard.type)
    })
})
