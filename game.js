class Game {
    #deltaT;
    player;
    level;

    static {
        if(level === "hard") { 
            this.level = 100;
        }
    }
    constructor(level, deltaT, player) {
        this.player = player;
        this.level = level;
        this.deltaT = deltaT;
    }

    get player() {
        return this.player;
    }

    set player(newPlayer) {
        this.player = newPlayer;
    } 
}