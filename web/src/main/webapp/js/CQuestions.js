/* global questions */

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
        updateSelectColQuestions();
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].value !== undefined)
                document.getElementById('Q' + i).nextElementSibling.value = this.questions[i].value;
        }
        this.initEventListner();
    }

    updateValues() {
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].value !== undefined)
                this.questions[i].value = document.getElementById('Q' + i).nextElementSibling.value;
        }
    }

    deleteElement(iter) {
        var offset = 0;
        var newQ = [];
        for (var i = 0; i < this.questions.length; i++) {
            if (parseInt(iter) === i) {
                offset++;
            }else{
                newQ[i-offset] = this.questions[i];
            }
        }
        this.questions = newQ;
        this.update();
    }

    initEventListner() {
        for (var i = 0; i < this.questions.length; i++) {
            document.getElementById('Q' + i).addEventListener('keyup', function (e) {
                questions.questions[e.target.id.substring(1)].name = document.getElementById(e.target.id).value;
            }, false);

            document.getElementById('question' + i).addEventListener('click', function (e) {
                questions.deleteElement(e.target.id.substring(8));
            }, false);

            document.getElementById('Q' + i).nextElementSibling.addEventListener('click', function (e) {
                if (e.target.nodeName === "OPTION")
                    questions.questions[e.target.parentNode.previousSibling.id.substring(1)].value = e.target.value;
            }, false);

        }
    }

}