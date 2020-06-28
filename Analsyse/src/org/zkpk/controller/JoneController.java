package org.zkpk.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.zkpk.dao.JoneDao;
import org.zkpk.model.JobModel;

import net.sf.json.JSONObject;

@Controller
@RequestMapping(value="/jone")
public class JoneController {
	/**
	 * @return
	 */
	
	@RequestMapping(value="/jjone.do",method=RequestMethod.POST)
	@ResponseBody
	public JSONObject getTrendRenshu(){
		JoneDao whd=new JoneDao();
		ArrayList<JobModel> trendRenshu = new ArrayList<JobModel>();
		trendRenshu=whd.Renshu();
		  ArrayList<String>  jprovinceList=new ArrayList<String>();
		  ArrayList<Integer>  jpeopleList=new ArrayList<Integer>();
		  JSONObject json=new JSONObject();
		  int jpeople = 0;
		  String jprovince = null;
		  for(int i=0;i<trendRenshu.size();i++){
			  jprovinceList.add(trendRenshu.get(i).getJprovince());
			  jpeopleList.add(trendRenshu.get(i).getJpeople());					
		  }
		  json.put("jprovince", jprovinceList);
		  json.put("jpeople", jpeopleList);
		  //System.out.println(json.toString());
		return json;
	}
}
