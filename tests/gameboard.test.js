const Gameboard = require("../src/classes/gameboard")
const Ship = require("../src/classes/ship")

describe("Testing functionality of gameboard", () =>{
    let gameboard
    let ship
    beforeEach(() =>{
        gameboard = new Gameboard()
        ship = new Ship(4,0,false)
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
    let ship
    beforeEach(() =>{
        gameboard = new Gameboard()
        ship = new Ship(4,0,false)
    })
    test("Expects the gameboard to return a list of ships", () =>{
        expect(gameboard.ships.length).toBe(5)
    })
    test("Gameboard has function to change cell position status (when placing ships and receiving hits)", () =>{
        gameboard.receiveHit(0)
        expect(gameboard.getPosition(0)).toStrictEqual({shipLocation:false,isHit:true})
    })
    test("Checking validity by deciding if a ship can be placed or not", () =>{
        expect(gameboard.checkValidity(9, ship, true)).toBe(false)
        expect(gameboard.checkValidity(10,ship, true)).toBe(true)
    })
    test("Gameboard needs to be able to place a ship based on index and the following cells based on length", () =>{
        gameboard.placeShip(0, ship, 0, true)
        expect(gameboard.board[0].shipLocation  && gameboard.board[3].shipLocation).toBe(true)
    })
    test("Gameboard needs to be able to place vertically", () =>{
        expect(gameboard.checkValidity(0, ship, false)).toBe(true)
        expect(gameboard.checkValidity(80,ship, false)).toBe(false)
    })
    test("Gameboard needs to check collisions when placing ship", () =>{
        gameboard.board[3].shipLocation = true
        expect(gameboard.checkValidity(0, ship, true)).toBe(false)
        gameboard.board[54].shipLocation = true
        expect(gameboard.checkValidity(34, ship, false)).toBe(false)
    })
    test("Gameboard needs to leave reference to the ship when placing it", () =>{
        gameboard.placeShip(0, ship, 0, true)
        expect(gameboard.board[0].shipID).toBe(0)
    })
    test("Gameboard is able to place both horizontally and vertically", () =>{
        gameboard.placeShip(0, ship, 0, true)
        gameboard.placeShip(39, ship, 0, false)
        expect(gameboard.board[3].shipLocation).toBe(true)
        expect(gameboard.board[49].shipLocation).toBe(true)
    })
    test("Gameboard is able to place multiple ships, without collisions and correct positions", () =>{
        gameboard.automaticPlacement()
    })
})