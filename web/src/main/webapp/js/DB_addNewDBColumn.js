var newInput = "" +
        "<div class='colBlk'>" +
        "<input type='text' value= '<VALUE>' class='col' name='col<ITER>' id='col<ITER>' placeholder='Column name <ITER1>' required/>" +
        "<img src='img/cancel.svg' alt='X' onclick='delCol(\"col<ITER>\")' width='32' />" +
        "</div>";

var btn_addSQLCol = document.getElementById('addQSLCol');
btn_addSQLCol.addEventListener('click', addSQLCol, false);

function addSQLCol() {
    var block = document.getElementById('sqlColomnBlock');
    var count = document.getElementsByClassName('col').length;

    var str = "";
    for (var i = 0; i < count; i++)
        str += setNewInput(document.getElementById('col' + i).value, i);
    str += setNewInput("", count);
    block.innerHTML = str;
    document.getElementById('kolCols').value = count;
}

function delCol(a) {
    document.getElementById(a).parentElement.outerHTML = "";
    var block = document.getElementById('sqlColomnBlock');
    var count = document.getElementsByClassName('col').length;

    var str = "";
    for (var i = 0; i < count; i++)
        str += setNewInput(document.getElementsByClassName('col')[i].value, i);
    block.innerHTML = str;
    document.getElementById('kolCols').value = count;
}

function setNewInput(value, iter) {
    var str = "";
    str += newInput;
    str = str.replace(new RegExp("<VALUE>", 'g'), value);
    str = str.replace(new RegExp("<ITER>", 'g'), iter);
    str = str.replace(new RegExp("<ITER1>", 'g'), iter + 1);
    return str;
}