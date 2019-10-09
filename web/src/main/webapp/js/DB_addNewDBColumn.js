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
        id = parseInt(id.substring(3)) + 1;
        console.log("id: " + id);
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
        console.log("n: " + n);
        var v = selects[i].value;
        console.log("v: " + v);
        
        selects[i].innerHTML = optStr;
        
        if (n === id){
            selects[i].selectedIndex = -1;
        }
        
        
//        for (var i = 0; i < SQLCols.length; i++) {
//            if (SQLCols[i].value.length === 0) {
//                v = 0;
//            }
//
//            if (v.length > SQLCols[i].value.length) {
//
//            }
//            console.log("v: " + v.length + " c: " + SQLCols[i].value.length);
//        }
}
}

function updateColAmount() {
    document.getElementById('kolCols').value = document.getElementsByClassName('col').length - 1;
}

function initSQLColEventListners() {
    for (var i = 0; i < document.getElementsByClassName('col').length; i++) {
        document.getElementById("col" + i).addEventListener('keyup', updateSelectColQuestions, false);
    }
}