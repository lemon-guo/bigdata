
showmoney();
function showmoney() {
	$.ajax({
		type : "POST",
		async : false, // 同步执行 结束请求后再在执行下一个ajax
		url : "jthree/jjthree.do",
		dataType : "JSON",
		success : function(data) {		
	    require([ 'echarts', 'js/chart/dark', 'echarts/chart/map' ],
			function(ec, theme) {
				var myChart = ec.init(document.getElementById('MiddleMap2'), theme);
				var option = {
						title : {
							text : '各省平均工资',
							x : 'center'
						},
						tooltip : {
							trigger : 'item'
						},
						legend : {
							orient : 'vertical',
							x : 'left',
							data : [ '平均工资' ]
						},
						dataRange : {
							x : 'left',
							y : 'bottom',
							splitList : [ {
								start : 11000,
								label : '>11000'
							}, {
								start : 10000,
								end : 11000,
								label : '10000-11000'
							}, {
								start : 9000,
								end : 10000,
								label : '9000-10000'
							}, {
								start : 8500,
								end : 9000,
								label : '8500-9000'
							}, 
							{
								start : 8000,
								end : 8500,
								label : '8000-8500'
							}, {
								start : 7000,
								end : 8000,
								label : '7000-8000'
							}, {
								start : 1,
								end : 7000,
								label : '1-7000'
							}, 
							],
							color : [ '#FB4A4A', '#FD9045', '#F9D135', "#EEF790", "#ACF09B","#92D0D0"]
						},
						roamController : {
							show : true,
							x : 'right',
							mapTypeControl : {
								'china' : true
							}
						},
						series : [ {
							name : '平均工资',
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
								value : data.jmoney[0]
							}, {
								name : data.jprovince[1],
								value : data.jmoney[1]
							}, {
								name : data.jprovince[2],
								value : data.jmoney[2]
							}, {
								name : data.jprovince[3],
								value : data.jmoney[3]
							}, {
								name : data.jprovince[4],
								value : data.jmoney[24]
							}, {
								name : data.jprovince[5],
								value : data.jmoney[5]
							}, {
								name : data.jprovince[6],
								value : data.jmoney[6]
							}, {
								name : data.jprovince[7],
								value : data.jmoney[7]
							}, {
								name : data.jprovince[8],
								value : data.jmoney[8]
							}, {
								name : data.jprovince[9],
								value : data.jmoney[9]
							}, {
								name : data.jprovince[10],
								value : data.jmoney[10]
							}, {
								name : data.jprovince[11],
								value : data.jmoney[11]
							}, {
								name : data.jprovince[12],
								value : data.jmoney[12]
							}, {
								name : data.jprovince[13],
								value : data.jmoney[13]
							}, {
								name : data.jprovince[14],
								value : data.jmoney[14]
							}, {
								name : data.jprovince[15],
								value : data.jmoney[15]
							}, {
								name : data.jprovince[16],
								value : data.jmoney[16]
							}, {
								name : data.jprovince[17],
								value : data.jmoney[17]
							}, {
								name : data.jprovince[18],
								value : data.jmoney[18]
							}, {
								name : data.jprovince[19],
								value : data.jmoney[19]
							}, {
								name : data.jprovince[20],
								value : data.jmoney[20]
							}, {
								name : data.jprovince[21],
								value : data.jmoney[21]
							}, {
								name : data.jprovince[22],
								value : data.jmoney[22]
							}, {
								name : data.jprovince[23],
								value : data.jmoney[23]
							}, {
								name : data.jprovince[24],
								value : data.jmoney[24]
							}, {
								name : data.jprovince[25],
								value : data.jmoney[25]
							}, {
								name : data.jprovince[26],
								value : data.jmoney[26]
							}, {
								name : data.jprovince[27],
								value : data.jmoney[27]
							}, {
								name : data.jprovince[28],
								value : data.jmoney[28]
							}, {
								name : data.jprovince[29],
								value : data.jmoney[29]
							}, {
								name : data.jprovince[30],
								value : data.jmoney[30]
							}, {
								name : data.jprovince[31],
								value : data.jmoney[31]
							}, {
								name : data.jprovince[32],
								value : data.jmoney[32]
							}, {
								name : data.jprovince[33],
								value : data.jmoney[33]
							}, ]
						} ]
					};
				myChart.setOption(option);
			});
		}
	
	   });
	}