package by.dmitry.lrw_dbconnection.main;

import by.dmitry.lrw_dbconnection.connecttodb.Strings;
import by.dmitry.lrw_dbconnection.questions.Question;
import by.dmitry.lrw_dbconnection.questions.SinglePunch;

/**
 *
 * @author Dmitry
 */
public class Run {
    public static void main(String[] args) {
        String name = "getFromDB";
        String varFind = "ID";
        String[] strs = {"var1", "var_2", "var3"};
        String tabName = "R190409";
        String column = "IDs";
        Strings s = new Strings(name, varFind, strs, tabName, column);
        System.out.println(s.getSubEmpty());
        
        Question q = new SinglePunch();
        
    }
}
