class Game {
    #deltaT;
    player = {
        name: "Default",
        apperance: "Normal",
        hoursPlayed: function() {
            return new Date.toString();
        }
    };
    level;

    static {
        if(level === "hard") { 
            this.createObstacles();
        } else {
            this.generateCorrectPath();
        }
    }

    constructor(level, deltaT, player) {
        this.player = player;
        this.level = level;
        this.#deltaT = deltaT;
    }

    get player() {
        return this.player;
    }

    set player(newPlayer) {
        this.player = newPlayer;
    } 


    static createObstacles(){}
    static generateCorrectPath(){}
}

