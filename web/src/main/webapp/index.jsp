<%-- 
    Document   : index
    Created on : 14 сент. 2019 г., 23:50:35
    Author     : Dmitry
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <link rel="stylesheet" type="text/css" href="css/DB_form.css" />
        <link rel="stylesheet" type="text/css" href="css/DB_main.css" />
    </head>
    <body>
        <form action="DB" method="get" class="db_form">
            <!--sub name-->
            <input type="text" name="subName" value="" placeholder="Sub name"/>
            <!--<br/>-->
            <!--findvar-->
            <input type="text" name="findVar" placeholder="Question name"/>
            <!--table name-->
            <input type="text" name="tabName" placeholder="SQL table"/>
            <!--sql column-->
            <input type="text" name="sqlColumn" placeholder="SQL col to find"/>
            <input type="number" name="kolCols" id="kolCols" value="-1" style="display: none"/>
            <div id="sqlColomnBlock">

            </div>
            <input type="button" id="addQSLCol" value="add column"/>
            <input type="submit"/>
        </form>

        <div class="code">
            <pre>
${code}</pre>
        </div>
        <script src="js/DB_addNewDBColumn.js"></script>
    </body>
</html>
