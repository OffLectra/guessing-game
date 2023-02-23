class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.MinValue = min;
        this.MaxValue = max;
    }
    guess() { return Math.round((this.MaxValue + this.MinValue)/2); }
    lower() { this.MaxValue = Math.round((this.MaxValue + this.MinValue)/2); } 
    greater() { this.MinValue = Math.round((this.MaxValue + this.MinValue)/2); } 
} 

module.exports = GuessingGame;
