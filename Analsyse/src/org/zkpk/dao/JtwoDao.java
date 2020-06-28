package org.zkpk.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import org.zkpk.model.JobModel;
import org.zkpk.util.MysqlDataBase;

import net.sf.json.JSONObject;

public class JtwoDao {

	public List<JobModel> getTrendXuqiu() {
		ArrayList<JobModel> arrayList = new ArrayList<JobModel>();
		try {
			Connection connct = MysqlDataBase.getConnct();
			String sql = "select jname,count(jpeople) from job group by jname order by count(jpeople) desc limit 1,10;";
			Statement createStatement = connct.createStatement();
			ResultSet executeQuery = createStatement.executeQuery(sql);
			DecimalFormat df=new DecimalFormat(".##");
			while (executeQuery.next()) {
				JobModel jm = new JobModel();
				jm.setJname(executeQuery.getString(1));
				jm.setJpeople(executeQuery.getInt(2));
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
