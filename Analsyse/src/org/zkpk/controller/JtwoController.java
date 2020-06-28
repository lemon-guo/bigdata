package org.zkpk.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.zkpk.dao.JtwoDao;
import org.zkpk.model.JobModel;

import net.sf.json.JSONObject;

@Controller
@RequestMapping(value="/jtwo")
public class JtwoController {
	/**
	 * @return
	 */
	
	@RequestMapping(value="/two.do",method=RequestMethod.POST)
	@ResponseBody
	public JSONObject getTrendXuqiu(){
		JtwoDao whd=new JtwoDao();
		List<JobModel> trendXuqiu = whd.getTrendXuqiu();
		  ArrayList<String>  jnameList=new ArrayList<String>();
		  ArrayList<Integer>  jpeopleList=new ArrayList<Integer>();
		  JSONObject json=new JSONObject();
		  int jpeople = 0;
		  String jname = null;
		  for(int i=0;i<trendXuqiu.size();i++){
			  jnameList.add(trendXuqiu.get(i).getJname());
			  jpeopleList.add(trendXuqiu.get(i).getJpeople());
			  if(i==0){
				  jname = trendXuqiu.get(i).getJname();
				  jpeople = trendXuqiu.get(i).getJpeople();
			  }
		  }
		  json.put("jname", jnameList);
		  json.put("jpeople", jpeopleList);
		  //System.out.println(json.toString());
		return json;
	}
}
