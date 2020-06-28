package org.zkpk.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.zkpk.dao.JfourDao;
import org.zkpk.model.JobModel;
import net.sf.json.JSONObject;

@Controller
@RequestMapping(value="/Jfour")
public class JfourController {
	@RequestMapping(value="/gaoxinshui.do",method=RequestMethod.POST)
	@ResponseBody
	public  JSONObject getGaoxs(){
		JfourDao  jf=new JfourDao();
		 List<JobModel> gxs = jf.getGaoxinshui();
		 ArrayList<String>  name=new ArrayList<String>();
		 ArrayList<Integer>  money=new ArrayList<Integer>();
		 ArrayList<String>  expe=new ArrayList<String>();
		 ArrayList<String>  comp=new ArrayList<String>();
		 JSONObject  json=new JSONObject();					  
		  for(int i=0;i<gxs.size();i++){
			  name.add(gxs.get(i).getJname());
			  money.add(gxs.get(i).getJmoney());	
			  expe.add(gxs.get(i).getJexpe());
			  comp.add(gxs.get(i).getJcompany());
		  }
		  json.put("name", name);
		  json.put("money", money);	
		  json.put("expe", expe);
		  json.put("comp", comp);
		return json;
	}
	@RequestMapping(value="/xueli.do",method=RequestMethod.POST)
	@ResponseBody
	public  JSONObject getDegree(){
		JfourDao  jf=new JfourDao();
		List<Integer> xl = jf.getDegree();		 
		JSONObject  json=new JSONObject();	
		int d0=xl.get(0);
		int d1=xl.get(1);
		int d2=xl.get(2);
		int d3=xl.get(3);
		int d4=xl.get(4);
		int d5=xl.get(5);
		int d6=xl.get(6);
		json.put("d0",d0);
		json.put("d1",d1);
		json.put("d2",d2);
		json.put("d3",d3);
		json.put("d4",d4);
		json.put("d5",d5);
		json.put("d6",d6);
	//	System.out.println("controller ： "+d6);
		return json;
	}
}