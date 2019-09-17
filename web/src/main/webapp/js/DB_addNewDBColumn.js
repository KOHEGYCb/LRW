var btn_addSQLCol = document.getElementById('addQSLCol');
btn_addSQLCol.addEventListener('click', addSQLCol, false);

function addSQLCol() {
    var block = document.getElementById('sqlColomnBlock');
    var colunt = 1;
    
    var inputs = [];
//    block.innerHTML = "";
    var str;
    for (var i = 0; i < document.getElementsByClassName('col').length; i++) {
        
        
        str = "<input \
            type='text' \
            value=  '"+document.getElementById('col'+i).value+"' \
            class='col' \
            name='col"+i+"' \
            id='col"+i+"'\
            placeholder='Column name "+(i+1)+"'\
            />";
        console.log(str);
        inputs[i] = str;
    }  
    block.innerHTML = "";
    for (var i = 0; i < inputs.length; i++) {
        block.innerHTML += inputs[i];
    }
    
    
    
    block.innerHTML += "<input type='text' value='' class='col' name='col"+block.childElementCount/colunt+"' id='col"+block.childElementCount/colunt+"'placeholder='Column name "+(block.childElementCount/colunt+1)+"'/>";
    var a = document.getElementById('kolCols');
    a.value = block.childElementCount/colunt-1;
}
