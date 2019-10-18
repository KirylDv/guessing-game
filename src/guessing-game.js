class GuessingGame {
    constructor() {
        let L;
        let R;
        let m;
    }

    setRange(min, max) {
        this.L = min;
        this.R = max;
    }

    guess() {
        this.m = Math.ceil((this.L+this.R)/2);
        return this.m;
    }

    lower() {
        this.R = this.m;
    }

    greater() {
        this.L = this.m;
    }
}

module.exports = GuessingGame;
