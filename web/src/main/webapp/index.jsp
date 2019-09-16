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
    </head>
    <body>
        <form action="DB" method="POST">
            <!--sub name-->
            <span>Name Span</span>
            <input type="text" name="spanName"/>
            <br/>
            <!--findvar-->
            <span>Name Find Question</span>
            <input type="text" name="findVar"/>
            <br/>
            <!--table name-->
            <span>Table Name</span>
            <input type="text" name="tabName"/>
            <br/>
            <!--sql column-->
            <span>Column to find</span>
            <input type="text" name="sqlColumn"/>
            <br/>
            
            <div id="sqlColomnBlock">
                
            </div>
            <input type="button" id="addQSLCol" value="add column"/>
            <input type="submit"/>
        </form>
        
        <code>
            ${a}
        </code>
        
        <script src="js/DB_addNewDBColumn.js"></script>
    </body>
</html>
