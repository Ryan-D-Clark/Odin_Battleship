const Ship = require("../src/classes/ship.js")

describe("Testing ship functions", () =>{
    let ship;
	beforeEach(() => {
        ship = new Ship(4,0,false)
	});
    test("A ship object has been created with a length of 4", () =>{
        expect(ship.length).toBe(4)
    })
    test("A ship object has been created with a hit count of 0", () =>{
        expect(ship.hits).toBe(0)
    })
    test("A ship object has been created which has not been sunk", () =>{
        expect(ship.isSunk()).toBe(false)
    })
    test("The ship is able to receive a hit and increase hit counter", () =>{
        ship.hit()
        expect(ship.hits).toBe(1)
    })
    test("A ship's hit counter is increased and is sunk", () =>{
        ship.hit()
        ship.hit()
        ship.hit()
        ship.hit()
        expect(ship.isSunk()).toBe(true)
    })

})