package org.zkpk.dao;


import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.zkpk.model.JobModel;
import org.zkpk.util.MysqlDataBase;

public class JfourDao {
	public List<JobModel> getGaoxinshui(){
		List<JobModel> arraylist=new ArrayList<JobModel>();
		try {
			Connection connct = MysqlDataBase.getConnct();
			String sql="select jname,jmoney,jcompany,jadress,jprovince,jexpe,jdegree,jpeople,jdate from job order by jmoney desc limit 53,10 ";
			Statement createStatement = connct.createStatement();
			ResultSet executeQuery = createStatement.executeQuery(sql);
			while (executeQuery.next()) {
				JobModel jm = new JobModel();
				jm.setJname(executeQuery.getString(1));
				jm.setJmoney(executeQuery.getInt(2));
				jm.setJcompany(executeQuery.getString(3));
				jm.setJadress(executeQuery.getString(4));
				jm.setJprovince(executeQuery.getString(5));
				jm.setJexpe(executeQuery.getString(6));
				jm.setJdegree(executeQuery.getString(7));
				jm.setJpeople(executeQuery.getInt(8));
				jm.setJdate(executeQuery.getString(9));
				//System.out.println("JfourDao: 经验"+jm.getJexpe());
				arraylist.add(jm);
			}
			MysqlDataBase.getClose(connct, createStatement, executeQuery);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return arraylist;
		
	}
	public List<Integer> getDegree(){
		List<Integer> arraylist=new ArrayList<Integer>();
		int degree1=0;
		int degree2=0;
		int degree3=0;
		int degree4=0;
		int degree5=0;
		int degree6=0;
		int degree7=0;
		try {
			Connection connct = MysqlDataBase.getConnct();
			String sql1=" select count(*) from job where jdegree like '%博士%' ";
			String sql2=" select count(*) from job where jdegree like '%硕士%' ";
			String sql3=" select count(*) from job where jdegree like '%本科%' ";
			String sql4=" select count(*) from job where jdegree like '%大专%' ";
			String sql5=" select count(*) from job where jdegree like '%中专%' ";
			String sql6=" select count(*) from job where jdegree like '%高中%' ";
			String sql7=" select count(*) from job where jdegree like '%初中%' ";
			Statement createStatement = connct.createStatement();
			ResultSet executeQuery = createStatement.executeQuery(sql1);
			while (executeQuery.next()) {
			    degree1=executeQuery.getInt(1);
			}
			executeQuery = createStatement.executeQuery(sql2);	
			while (executeQuery.next()) {
			    degree2=executeQuery.getInt(1);
			}
			executeQuery = createStatement.executeQuery(sql3);	
			while (executeQuery.next()) {
			    degree3=executeQuery.getInt(1);
			}
			executeQuery = createStatement.executeQuery(sql4);
			while (executeQuery.next()) {
			    degree4=executeQuery.getInt(1);
			}
			executeQuery = createStatement.executeQuery(sql5);	
			while (executeQuery.next()) {
			    degree5=executeQuery.getInt(1);
			}
			executeQuery = createStatement.executeQuery(sql6);	
			while (executeQuery.next()) {
			    degree6=executeQuery.getInt(1);
			}
			executeQuery = createStatement.executeQuery(sql7);	
			while (executeQuery.next()) {
			    degree7=executeQuery.getInt(1);
			}
			//System.out.println("JfourDao: 学历"+degree3);
			arraylist.add(degree1);
			arraylist.add(degree2);
			arraylist.add(degree3);
			arraylist.add(degree4);
			arraylist.add(degree5);
			arraylist.add(degree6);
			arraylist.add(degree7);
			MysqlDataBase.getClose(connct, createStatement, executeQuery);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return arraylist;		
	}
}
