class Questions {
    constructor() {
        this.questions = [];
    }

    addQuestion(question) {
        this.questions[this.questions.length] = question;
        this.update();
    }

    update() {
        var str = "";

        for (var i = 0; i < this.questions.length; i++) {
            str += this.questions[i].setPatterns(this.questions[i].name, i);
        }
        document.getElementById('QuestionsBlock').innerHTML = str;
    }
}