var btn_addSQLCol = document.getElementById('addQSLCol');
btn_addSQLCol.addEventListener('click', addSQLCol, false);

function addSQLCol() {
    var block = document.getElementById('sqlColomnBlock');
    block.innerHTML += "<span>Table Name</span>\
            <input type='text' name='tabName' id='col"+block.childElementCount/2+"'/>";
}
