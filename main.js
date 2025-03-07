let ladder = {
    stepByStep: 0,

    up: function () {
        this.stepByStep++;
        return this;
    },

    down: function () {
        this.stepByStep--;
        return this;
    },

    showStep: function () {
        console.log(this.stepByStep);
        return this;
    }
};

ladder.up().up().down().showStep();





