var newInput = "" +
        "<div class='colBlk'>" +
        "<input type='text' value= '<VALUE>' class='col' name='col<ITER>' id='col<ITER>' placeholder='Column name <ITER1>' required/>" +
        "<img src='img/cancel.svg' id='col<ITER>' alt='X' width='32' />" +
        "</div>";
var newQuestionText = "" +
        "<div class='Question Text'>" +
        "<p class='questionType'>Text</p>" +
        "<input type='text' name='question<ITER>' id='question<ITER>' value='<Q_NAME>' placeholder='Question Name' required/>" +
        "<select class='selectCol'>" +
        "</select>" +
        "<img src='img/cancel.svg' alt='X' id='question<ITER>' width='32'/>" +
        "</div>";
var newQuestionNumeric = "" +
        "<div class='Question Numeric'>" +
        "<p class='questionType'>Numeric</p>" +
        "<input type='text' name='question<ITER>' id='question<ITER>' value='<Q_NAME>' placeholder='Question Name' required/>" +
        "<select class='selectCol'>" +
        "</select>" +
        "<img src='img/cancel.svg' alt='X' id='question<ITER>' width='32'/>" +
        "</div>";