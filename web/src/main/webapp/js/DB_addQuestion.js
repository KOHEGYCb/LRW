/* global questions */

function addQuestion() {
    var type = document.getElementById('selectQuestion').value;
    var newQuestion;
    switch (type) {
        case "Numeric":
            newQuestion = new QNumeric();
            questions.addQuestion(newQuestion);
            break;

        case "Text":
            newQuestion = new QText();
            questions.addQuestion(newQuestion);
            break;

        default:

            break;
    }
}

function updateColAmount() {
    document.getElementById('kolQuestions').value = document.getElementsByClassName('QuestionText').length - 1;
}
