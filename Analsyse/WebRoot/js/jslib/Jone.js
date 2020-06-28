
showRenshu();
function showRenshu() {
	$.ajax({
		type : "POST",
		async : false, // 同步执行 结束请求后再在执行下一个ajax
		url : "jone/jjone.do",
		dataType : "JSON",
		success : function(data) {			  
	    require([ 'echarts', 'js/chart/dark', 'echarts/chart/map' ],
			function(ec, theme) {
				var myChart = ec.init(document.getElementById('MiddleMap'), theme);
				var option = {
						title : {
							text : '各地区工作需求人数',
							x : 'center'
						},
						tooltip : {
							trigger : 'item'
						},
						legend : {
							orient : 'vertical',
							x : 'left',
							data : [ '需求人数' ]
						},
						dataRange : {
							x : 'left',
							y : 'bottom',
							splitList : [ {
								start : 3500,
								label : '>3500'
							}, {
								start : 2500,
								end : 3500,
								label : '2500-3500'
							}, {
								start : 1500,
								end : 2500,
								label : '1500-2500'
							}, {
								start : 1000,
								end : 1500,
								label : '1000-1500'
							}, {
								start : 500,
								end : 1000,
								label : '500-1000'
							}, {
								start : 1,
								end : 500,
								label : '1-500'
							}, {
								end : 0,
							}, 
							],
							color : [ '#FB4A4A', '#FD9045', '#F9D135', '#EEF790', '#ACF09B','#92D0D0']
						},
						roamController : {
							show : true,
							x : 'right',
							mapTypeControl : {
								'china' : true
							}
						},
						series : [ {
							name : '需求人数',
							type : 'map',
							mapType : 'china',
							roam : false,
							itemStyle : {
								normal : {
									label : {
										show : true,
										textStyle : {
											color : "rgb(249, 249, 249)"
										}
									}
								},
								emphasis : {
									label : {
										show : true
									}
								}
							},
							data : [ {
								name : data.jprovince[0],
								value : data.jpeople[0]
							}, {
								name : data.jprovince[1],
								value : data.jpeople[1]
							}, {
								name : data.jprovince[2],
								value : data.jpeople[2]
							}, {
								name : data.jprovince[3],
								value : data.jpeople[3]
							}, {
								name : data.jprovince[4],
								value : data.jpeople[24]
							}, {
								name : data.jprovince[5],
								value : data.jpeople[5]
							}, {
								name : data.jprovince[6],
								value : data.jpeople[6]
							}, {
								name : data.jprovince[7],
								value : data.jpeople[7]
							}, {
								name : data.jprovince[8],
								value : data.jpeople[8]
							}, {
								name : data.jprovince[9],
								value : data.jpeople[9]
							}, {
								name : data.jprovince[10],
								value : data.jpeople[10]
							}, {
								name : data.jprovince[11],
								value : data.jpeople[11]
							}, {
								name : data.jprovince[12],
								value : data.jpeople[12]
							}, {
								name : data.jprovince[13],
								value : data.jpeople[13]
							}, {
								name : data.jprovince[14],
								value : data.jpeople[14]
							}, {
								name : data.jprovince[15],
								value : data.jpeople[15]
							}, {
								name : data.jprovince[16],
								value : data.jpeople[16]
							}, {
								name : data.jprovince[17],
								value : data.jpeople[17]
							}, {
								name : data.jprovince[18],
								value : data.jpeople[18]
							}, {
								name : data.jprovince[19],
								value : data.jpeople[19]
							}, {
								name : data.jprovince[20],
								value : data.jpeople[20]
							}, {
								name : data.jprovince[21],
								value : data.jpeople[21]
							}, {
								name : data.jprovince[22],
								value : data.jpeople[22]
							}, {
								name : data.jprovince[23],
								value : data.jpeople[23]
							}, {
								name : data.jprovince[24],
								value : data.jpeople[24]
							}, {
								name : data.jprovince[25],
								value : data.jpeople[25]
							}, {
								name : data.jprovince[26],
								value : data.jpeople[26]
							}, {
								name : data.jprovince[27],
								value : data.jpeople[27]
							}, {
								name : data.jprovince[28],
								value : data.jpeople[28]
							}, {
								name : data.jprovince[29],
								value : data.jpeople[29]
							}, {
								name : data.jprovince[30],
								value : data.jpeople[30]
							}, {
								name : data.jprovince[31],
								value : data.jpeople[31]
							}, {
								name : data.jprovince[32],
								value : data.jpeople[32]
							}, {
								name : data.jprovince[33],
								value : data.jpeople[33]
							}, ]
						} ]
					};
				myChart.setOption(option);
			});
		}
	
	   });
	}