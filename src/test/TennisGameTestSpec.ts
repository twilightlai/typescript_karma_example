import {TennisGame} from "../TennisGame";

describe('TennisGameTestSpec', function () {

    it('Love All', function () {
        let game = new TennisGame();
        expect(game.Score()).toBe("Love All");
    })

    it('Fifteen Love', function () {
        let game = new TennisGame();
        expect(game.Score()).toBe("Love All2");
    });
});

