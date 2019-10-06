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
            <input type="text" name="subName" value="" placeholder="Sub name" required/>
            <!--<br/>-->
            <!--findvar-->
            <input type="text" name="findVar" placeholder="Question name" required/>
            <!--table name-->
            <input type="text" name="tabName" placeholder="SQL table" required/>
            <!--sql column-->
            <input type="text" name="sqlColumn" placeholder="SQL col to find" required/>
            <hr>
            <input type="number" name="kolCols" id="kolCols" value="-1" style="display: none"/>
            <div id="sqlColomnBlock">

            </div>
            <input type="button" id="addQSLCol" value="add column"/>
            <br>
            <hr/>
            <div id="questions">
                <div class="QuestionText">
                    <input type="text" name="questionI" value="" placeholder="text question" required=""/>
                    <select class="selectCol">
                        <option>ColI</option>
                    </select>
                    <img src="img/cancel.svg" width="32" alt="X"/>
                </div>
            </div>
            <select id="selectQuestion" class="selectQuestion">
                <option>Numeric</option>
                <option>Text</option>
            </select>
            <input type="button" id="addQuestion" value="add Question"/>
            <hr>
            <input type="submit"/>
        </form>

        <div class="code">
            <pre>${code}</pre>
        </div>
        <script src="js/DB_addNewDBColumn.js"></script>
        <script src="js/DB_addQuestion.js"></script>

    </body>
</html>
