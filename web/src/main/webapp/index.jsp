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
            <div id="mainPart" >
                <!--sub name-->
                <input type="text" name="subName" value="" placeholder="Sub name" required/>
                <!--<br/>-->
                <!--findvar-->
                <input type="text" name="findVar" placeholder="Question name" required/>
                <!--table name-->
                <input type="text" name="tabName" placeholder="SQL table" required/>
                <!--sql column-->
                <input type="text" name="sqlColumn" placeholder="SQL col to find" required/>
            </div>

            <hr>

            <div id="SQLColumns" >
                <input type="number" name="kolCols" id="kolCols" value="-1" style="display: none"/>
                <div id="sqlColomnBlock" >

                </div>
                <input type="button" id="addQSLCol" value="add column"/>
            </div>

            <hr/>

            <div id="Questions">
                <input type="number" name="kolQuestions" id="kolQuestions" value="-1" style="display: none"/>
                <div id="QuestionsBlock">
                    <!--                    <div class="Question Text">
                                            <p class="questionType">Text</p>
                                            <input type="text" name="questionI" value="" placeholder="text question" required/>
                                            <select class="selectCol">
                    
                                            </select>
                                            <img src="img/cancel.svg" width="32" alt="X"/>
                                        </div>
                                        <div class="Question Numeric">
                                            <p class="questionType">Numeric</p>
                                            <input type="text" name="questionI" value="" placeholder="text question" required/>
                                            <select class="selectCol">
                    
                                            </select>
                                            <img src="img/cancel.svg" width="32" alt="X"/>
                                        </div>-->
                </div>
                <select id="selectQuestion" class="selectQuestion">
                    <option>Numeric</option>
                    <option>Text</option>
                </select>
                <input type="button" id="addQuestion" value="add Question"/>
            </div>

            <hr>

            <input type="submit"/>
        </form>

        <div class="code">
            <pre>${code}</pre>
        </div>

        <script src="js/CQuestion.js" type="text/javascript"></script>
        <script src="js/CQuestions.js" type="text/javascript"></script>
        <script src="js/CQNumeric.js" type="text/javascript"></script>
        <script src="js/CQText.js" type="text/javascript"></script>
        <script src="js/HTMLPatterns.js" type="text/javascript"></script>
        <script src="js/DB_addNewDBColumn.js" type="text/javascript"></script>
        <script src="js/DB_addQuestion.js" type="text/javascript"></script>

        <script src="js/initGlobalVars.js" type="text/javascript"></script>
        <script src="js/initEventListners.js" type="text/javascript"></script>
    </body>
</html>
