class Ship{
    constructor(length, hits, sunk){
        this.length = length
        this.hits = hits
        this.sunk = sunk
    }

    hit(){
        this.hits ++
    }

    isSunk(){
        if(this.hits == this.length){
            this.sunk = true
            return true
        }
        else{
            return false
        }
    }
}

module.exports = Ship