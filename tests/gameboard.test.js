const Gameboard = require("../src/classes/gameboard")

describe("Testing functionality of gameboard", () =>{
    let gameboard
    beforeEach(() =>{
        gameboard = new Gameboard()
    })
    test("Expects an array to have 100 items in it", () =>{
        expect(gameboard.getBoard().length).toBe(100)
    })
    test("Expects a specifed index to return '{shipLocation:'false',isHit:'false'}'", () =>{
        expect(gameboard.getPosition(10)).toStrictEqual({shipLocation:false,isHit:false})
    })
})

describe("Testing creating and placing ships", () =>{
    let gameboard
    beforeEach(() =>{
        gameboard = new Gameboard()
    })
    test("Expects the gameboard to return a list of ships", () =>{
        expect(gameboard.ships.length).toBe(5)
    })
    test("Gameboard has function to change cell position status (when placing ships and receiving hits)", () =>{
        gameboard.receiveHit(0)
        expect(gameboard.getPosition(0)).toStrictEqual({shipLocation:false,isHit:true})
    })
    test("Checking validity by stopping a ship be placed at cell 9 horizontally", () =>{
        console.log("TESTING", gameboard.checkValidity())
        expect(gameboard.checkValidity(startingIndex, ship)).toBe(false)
    })
    test("Gameboard needs to be able to place a ship based on index and the following cells based on length", () =>{
        console.log(gameboard.board[0].shipLocation)
        gameboard.placeShip(0,gameboard.ships[0])
        expect(gameboard.board[0].shipLocation  && gameboard.board[4].shipLocation).toBe(true)
    })
})