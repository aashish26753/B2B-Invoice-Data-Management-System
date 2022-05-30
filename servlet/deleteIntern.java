package com.highradius.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;

import com.google.gson.Gson;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class delete
 */
@WebServlet("/deleteIntern")
public class deleteIntern extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public deleteIntern() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
		HashMap<Object, Object> Response = new HashMap<Object, Object>();
		String Delete = request.getParameter("sl_no");
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","kiit@123");
//		String sql="DELETE FROM winter_internship WHERE sl_no in (?)";
		String sql="DELETE FROM winter_internship WHERE sl_no in ("+Delete+")";
		PreparedStatement ps= connection.prepareStatement(sql);
//		ps.setString(1, Delete);
		if(ps.executeUpdate()>0) {
			Response.put("delete", true);
		}else {
			Response.put("delete", false);
		}
		Gson gson = new Gson();
		response.setHeader("Access-Control-Allow-Origin", "*");
		String Responsejson = gson.toJson(Response);
		response.getWriter().append(Responsejson);
		}catch (Exception e){
			e.printStackTrace();
		}
	}

}
