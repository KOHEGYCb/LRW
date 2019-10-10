/* global newInput */

function addSQLCol() {
    var block = document.getElementById('sqlColomnBlock');
    var count = document.getElementsByClassName('col').length;

    var str = "";
    for (var i = 0; i < count; i++)
        str += setNewInput(document.getElementById('col' + i).value, i);
    str += setNewInput("", count);
    block.innerHTML = str;
    initSQLColEventListners();
    updateColAmount();
    updateSelectColQuestions();
}

function delSQLCol(a) {
    document.getElementById(a).parentElement.outerHTML = "";
    var block = document.getElementById('sqlColomnBlock');
    var count = document.getElementsByClassName('col').length;

    var str = "";
    for (var i = 0; i < count; i++)
        str += setNewInput(document.getElementsByClassName('col')[i].value, i);
    block.innerHTML = str;
    initSQLColEventListners();
    updateColAmount();
    updateSelectColQuestions(a);
}

function setNewInput(value, iter) {
    var str = "";
    str += newInput;
    str = str.replace(new RegExp("<VALUE>", 'g'), value);
    str = str.replace(new RegExp("<ITER>", 'g'), iter);
    str = str.replace(new RegExp("<ITER1>", 'g'), iter + 1);
    return str;
}

function updateSelectColQuestions(id = "-1") {
    var selects = document.getElementsByClassName("selectCol");
    var SQLCols = document.getElementsByClassName("col");
    var optStr = "";
    if (id !== "-1") {
        id = parseInt(id.substring(3));
    }
    for (var i = 0; i < SQLCols.length; i++) {
        if (SQLCols[i].value === "") {
            optStr += "<option>" + SQLCols[i].name + "</option>";
        } else {
            optStr += "<option>" + SQLCols[i].value + "</option>";
        }
    }
    for (var i = 0; i < selects.length; i++) {
        var n = selects[i].selectedIndex;
        var v = selects[i].value;
        selects[i].innerHTML = optStr;
        if (n === id) {
            selects[i].selectedIndex = -1;
        } else {
            if ((id === "-1") || (n < id)) {
                selects[i].selectedIndex = n;
            } else {
                if (n > id) {
                    selects[i].selectedIndex = n - 1;
                }
            }
        }
}
}

function updateColAmount() {
    document.getElementById('kolCols').value = document.getElementsByClassName('col').length - 1;
}

function initSQLColEventListners() {
    for (var i = 0; i < document.getElementsByClassName('col').length; i++) {
        document.getElementById("col" + i).addEventListener('keyup', function () {
            updateSelectColQuestions();
            questions.updateValues();
        }, false);
        document.getElementById('col' + i).nextSibling.addEventListener('click', function (e) {
            delSQLCol(e.target.id);
        }, false);
    }
}