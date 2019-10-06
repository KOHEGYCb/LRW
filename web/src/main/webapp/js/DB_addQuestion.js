var newQuestion = "" +
        "<div class='colBlk'>" +
        "<input type='text' value= '<VALUE>' class='col' name='col<ITER>' id='col<ITER>' placeholder='Column name <ITER1>' required/>" +
        "<img src='img/cancel.svg' alt='X' onclick='delCol(\"col<ITER>\")' width='32' />" +
        "</div>";

var btn_addQuestion = document.getElementById('addQuestion');
btn_addQuestion.addEventListener('click', addQuestion, false);

function addQuestion(){
    
}