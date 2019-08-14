export class TennisGame {
    private _firstPlayerScoreTime: number = 0;
    private _lookup: { [key: number]: string } = {
        1: "Fifteen",
        2: "Thirty"
    }

    Score(): string {
        if (this._firstPlayerScoreTime == 1 || this._firstPlayerScoreTime == 2) {
            return `${this._lookup[this._firstPlayerScoreTime]} Love`;
        }
        return 'Love All';
    }

    FirstPlayerScore(): void {
        this._firstPlayerScoreTime++;
    }
}