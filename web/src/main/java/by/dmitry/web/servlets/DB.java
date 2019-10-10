/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package by.dmitry.web.servlets;

import by.dmitry.lrw_dbconnection.connecttodb.Strings;
import by.dmitry.web.constants.Parameters;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Dmitry
 */
@WebServlet("/DB/*")
//@WebServlet(name = "DB", urlPatterns = {"/DB/*"})
public class DB extends ManagerServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        String subName = request.getParameter(Parameters.SUB_NAME);
        String findVar = request.getParameter(Parameters.FIND_VAR);
        String tabName = request.getParameter(Parameters.TABLE_NAME);
        String sqlFindColumn = request.getParameter(Parameters.SQL_COLUMN);
        int amountCols = Integer.parseInt(request.getParameter(Parameters.AMOUNT_COLS)) + 1;
        String[] sqlVarColumns = new String[amountCols];
        for (int i = 0; i < amountCols; i++) {
            sqlVarColumns[i] = request.getParameter(Parameters.COL_N + i);
        }
        Strings s = new Strings(subName, findVar, sqlVarColumns, tabName, sqlFindColumn);
        
        request.setAttribute("code", s.getSubEmpty());
        
        forward("/index.jsp", request, response);
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
