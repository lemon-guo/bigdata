package org.zkpk.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.zkpk.dao.JthreeDao;
import org.zkpk.model.JobModel;

import net.sf.json.JSONObject;

@Controller
@RequestMapping(value="/jthree")
public class JthreeController {
	/**
	 * @return
	 */
	
	@RequestMapping(value="/jjthree.do",method=RequestMethod.POST)
	@ResponseBody
	public JSONObject getTrendgongzi(){
		JthreeDao whd=new JthreeDao();
		ArrayList<JobModel> gongzi = new ArrayList<JobModel>();
		gongzi=whd.Gongzi();
		  ArrayList<String>  jprovinceList=new ArrayList<String>();
		  ArrayList<Integer>  jmoneyList=new ArrayList<Integer>();
		  JSONObject json=new JSONObject();
		  int jmoney = 0;
		  String jprovince = null;
		  for(int i=0;i<gongzi.size();i++){
			  jprovinceList.add(gongzi.get(i).getJprovince());
			  jmoneyList.add(gongzi.get(i).getJmoney());					
		  }
		  json.put("jprovince", jprovinceList);
		  json.put("jmoney", jmoneyList);
		//  System.out.println(json.toString());
		return json;
	}
}
