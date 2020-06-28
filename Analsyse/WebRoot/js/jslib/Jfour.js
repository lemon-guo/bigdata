showGxs();
function showGxs() {    //柱状图
	$.ajax({
		type : "POST",
		async : true, // 同步执行 结束请求后再在执行下一个ajax
		url : "Jfour/gaoxinshui.do",
		dataType : "JSON",
		success : function(data) {
			require([ 'echarts', 'js/chart/dark', 'echarts/chart/pie', // 按需加载所需图表，如需动态类型切换功能，别忘了同时加载相应图表
				'echarts/chart/bar', 'echarts/chart/line' ], function(ec, theme) {
				var myChart = ec.init(document.getElementById('gxsss'),theme);//与index的连接					
				var option = {
					tooltip : {
						trigger : 'axis' //显示该列下所有的坐标数据
					},
					calculable : true,
					grid : {             //图表的位置摆放，上下左右的顺序
						y : 100,
						y2 : 90,
						x : 80,
						x2 : 0
					},
					legend: {            //上面的图标提示
						x : 'right',
		                data:['薪水']
		            },
					xAxis : [{          //x轴以下的内容
						show : true,
						type : 'category',
						splitLine : {
							show : false,
						},
						axisLabel : {
                        	interval:0,
                            rotate:40,						
					    },
						data : data.name
					} ],
					yAxis : [],
					series : [{
						name : '薪水',
						type : 'bar',
						barWidth:50,
						itemStyle: {
			                normal: {
			    　　　　　　　　//这里是重点
			                    color: function(params) {
			                     //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
			                        var colorList = ['#E34F4F','#FBAC57', '#EEDF4D', '#D3C5D9', '#91c7ae','#749f83', '#ca8622','#61a0a8','#ca8622','#454696'];
			                        return colorList[params.dataIndex]
			                    },
			                    label : {
									show : true
								}
			                }
			            },
						data : data.money
					}]
				};
				myChart.setOption(option);
			});
		}
	});
}

showxlzb();
function showxlzb() {//饼图
	var xll=[];
	$.ajax({
		type : "POST",
		async : false, // 同步执行 结束请求后再在执行下一个ajax
		url : "Jfour/xueli.do",
		dataType : "JSON",
		success : function(data) {
			//alert(data.d6);
			xll.push({name:'博士',value:data.d0});
			xll.push({name:'硕士',value:data.d1});
			xll.push({name:'本科',value:data.d2});
			xll.push({name:'大专',value:data.d3});
			xll.push({name:'中专',value:data.d4});
			xll.push({name:'高中',value:data.d5});
			xll.push({name:'初中',value:data.d6});
			//alert(xll[6].name);
			//alert(xll[6].value);
			require([ 'echarts', 'js/chart/dark', 'echarts/chart/pie', // 按需加载所需图表，如需动态类型切换功能，别忘了同时加载相应图表
				'echarts/chart/bar', 'echarts/chart/line' ], function(ec, theme) {
					var myChart = ec.init(document.getElementById('xlzb'),
							theme);
					var option = {
						tooltip : {
							trigger : 'axis'
						},
						calculable : true,
						grid : {
							y : 300,
							y2 : 100,
							x : 80,
							x2 : 0
						},
						legend : {
							x : 'right',
							data : [ ]
						},
						xAxis : [ ],
						/*
						 * yAxis : [ { //show : false, type : 'value', position :
						 * 'right' } ],
						 */
						yAxis : [ ],
						series : [{
							name : '学历占比',
							type : 'pie',
							tooltip : {
								trigger : 'item',
								formatter : '{a} <br/>{b} : {c} ({d}%)'
							},
							
							center : [ 290, 450 ],
							radius : [0,140],
							data :xll,
					    }]
					};
					myChart.setOption(option,true);
				});
			
					
						
	     }
    });	
  }
			