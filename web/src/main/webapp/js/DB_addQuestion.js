//<div id="Questions">
//    <input type="number" name="kolQuestions" id="kolQuestions" value="-1" style="display: none"/>
//    <div id="QuestionsBlock">
//        <div class="Question Text">
//            <p class="questionType">Text</p>
//            <input type="text" name="questionI" value="" placeholder="text question" required/>
//            <select class="selectCol">
//
//            </select>
//            <img src='img/cancel.svg' alt='X' id='question<ITER>' width='32'/>
//        </div>
//        <div class="Question Numeric">
//            <p class="questionType">Numeric</p>
//            <input type="text" name="questionI" value="" placeholder="text question" required/>
//            <select class="selectCol">
//
//            </select>
//            <img src='img/cancel.svg' alt='X' id='question<ITER>' width='32'/>
//        </div>
//    </div>
//    <select id="selectQuestion" class="selectQuestion">
//        <option>Numeric</option>
//        <option>Text</option>
//    </select>
//    <input type="button" id="addQuestion" value="add Question"/>
//</div>


function addQuestion() {
    var questionsBlock = document.getElementById('QuestionsBlock');
    q.Name = "Nmae";
}

function updateColAmount() {
    document.getElementById('kolQuestions').value = document.getElementsByClassName('QuestionText').length - 1;
}








class Question {
    constructor(html) {
        this.name = "";
        this.html = html;
    }
    setPatterns(value = "-1", iter = "-1") {
        if (value !== "-1")
            this.html = this.html.replace(new RegExp("<VALUE>", 'g'), value);
        if (iter !== "-1")
            this.html = this.html.replace(new RegExp("<ITER>", 'g'), iter);
    }
}

class QNumeric extends Question {
    constructor() {
        super(newQuestionNumeric);
    }

}

class QText extends Question {
    constructor() {
        super(newQuestionText);
    }
}

var q = new QNumeric();