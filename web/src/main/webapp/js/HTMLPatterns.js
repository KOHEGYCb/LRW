var newInput = "" +
        "<div class='colBlk'>" +
        "<input type='text' value= '<VALUE>' class='col' name='col<ITER>' id='col<ITER>' placeholder='Column name <ITER1>' required/>" +
        "<img src='img/cancel.svg' alt='X' onclick='delSQLCol(\"col<ITER>\")' width='32' />" +
        "</div>";

var newQuestion = "" +
        "<div class='QuestionText'>" +
        "<input type='text' name='question<ITER>' id='question<ITER>' value='<VALUE>' placeholder='text question' required/>" +
        "<select class='selectCol'>" +
        "<option>ColI</option>" +
        "</select>" +
        "<img src='img/cancel.svg' alt='X' onclick='delQuestion(\"question<ITER>\")' width='32'/>" +
        "</div>";