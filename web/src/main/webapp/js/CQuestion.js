/* global amountQuestionId */

class Question {
    constructor(html) {
        this.id = amountQuestionId;
        amountQuestionId++;
        
        this.name = "";
        this.html = html;
    }
    setPatterns(qName = "-1", iter = "-1") {
        var newHtml = this.html;
        if (qName !== "-1")
            newHtml = newHtml.replace(new RegExp("<Q_NAME>", 'g'), qName);
        if (iter !== "-1")
            newHtml = newHtml.replace(new RegExp("<ITER>", 'g'), iter);
        return newHtml;
    }
}