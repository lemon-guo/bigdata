package org.zkpk.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONObject;

import org.zkpk.model.JobModel;
import org.zkpk.util.MysqlDataBase;

public class JoneDao {

	public ArrayList<JobModel> Renshu() {
		ArrayList<JobModel> arrayList = new ArrayList<JobModel>();
		try {
			Connection connct = MysqlDataBase.getConnct();
			String sql = "select jprovince,count(jpeople) from job group by jprovince  limit 0,35";
			//System.out.println("Dao输出！");
			Statement createStatement = connct.createStatement();
			ResultSet executeQuery = createStatement.executeQuery(sql);
			DecimalFormat df=new DecimalFormat(".##");
			String name=new String();
			int people=0;
			while (executeQuery.next()) {
				JobModel jm = new JobModel();
				name=executeQuery.getString(1);
				people=executeQuery.getInt(2);
				jm.setJprovince(name);
				jm.setJpeople(people);
				//System.out.println("Dao输出："+name);
				arrayList.add(jm);
			}
			MysqlDataBase.getClose(connct, createStatement, executeQuery);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return arrayList;
	}
	
}
