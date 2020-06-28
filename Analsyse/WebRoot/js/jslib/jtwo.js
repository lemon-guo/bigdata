ShowXuqiu();
function ShowXuqiu() {
	$.ajax({
		type : "POST",
		async : false, // 同步执行 结束请求后再在执行下一个ajax
		url : "jtwo/two.do",
		dataType : "JSON",
		success : function(data) {
			require([ 'echarts', 'echarts/chart/bar' // 按需加载所需图表，如需动态类型切换功能，别忘了同时加载相应图表
			], function(ec, theme) {
				var myChart = ec.init(document
						.getElementById('zongxuqiu'), theme);

				var option = {
						title: {
				        	text: '招聘总人数Top10',    //标题
					        textStyle: {
					        	fontWeight: 'normal',              //标题颜色
					        	color: '#FFFFFF'
					      	},

				       		x:"center"    
				       	},
					tooltip : {
						trigger : 'axis'
					},

					calculable : true,
					grid : {
						y : 50,
						y2 : 80,
						x : 50,
						x2 : 80
					},
					/*legend : {
						data : [ '招聘人数']
					},*/
					xAxis : [ {
						type : 'category',
						data : data.jname,
						splitLine:{
	                        show:false
	                    },
	                    axisLabel : {
                            textStyle: { //改变刻度字体样式
                                color: '#fff',
                                fontSize : 14 ,    //更改坐标轴文字大小
                            },
                            interval:0,
                            rotate:40,

                        },
	                    
					} ],
					yAxis : [ {
						type : 'value',
						splitLine:{
	                        show:false
	                    },
	                    axisLabel : {
                            textStyle: { //改变刻度字体样式
                                color: '#fff',
                                fontSize : 14,      //更改坐标轴文字大小
                            }
                        },
					}],
					series : [

					{
						name : '招聘总人数',
						type : 'bar',
						data : data.jpeople,
						itemStyle: {
				            normal: {
				　　　　　　　　//这里是重点
				                color: function(params) {
				                	//注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
				                    var colorList = ['#E34F4F','#FBAC57', '#EEDF4D', '#D3C5D9', '#9B9FD2','#7BCA5D', '#8CE6C0','#7CC3C3','#D9E3C0','#BDD1D9'];
				                    return colorList[params.dataIndex]
				                }
				            }
				        }
					}]
				};
				myChart.setOption(option);
			});
		}
	});
}
/*
require([ 'echarts', 'echarts/chart/bar' // 按需加载所需图表，如需动态类型切换功能，别忘了同时加载相应图表
			], drewEcharts);
function drewEcharts(ec){
	var myChart = ec.init(document.getElementById('zongxuqiu'));
	var option = {

			tooltip : {
				trigger : 'axis'
			},

			calculable : true,
			
			legend : {
				data : [ '招聘人数']
			},
			xAxis : [ {
				type : 'category',
			} ],
			yAxis : [ {
				type : 'value',
			}
			],
			series : [

			{
				name : '招聘总人数',
				type : 'bar',
			}]
		};
	loadData(option);
	myChart.setOption(option);
}
function loadData(option){
	$.ajax({
		type : "POST",
		async : false, // 同步执行 结束请求后再在执行下一个ajax
		url : "jtwo/two.do",
		dataType : "JSON",
		success : function(data) {
			alert(data.length);
			if(data){
				option.xAxis[0].data=[];
				for(var i=0;i<data.length;i++){
					option.xAxis[0].data.push(data[i].jname);
				}
				option.series[0].data=[];
				for(var i=0;i<data.length;i++){
					option.series[0].data.push(data[i].jpeople);
				}
			}
		}
	});
}
*/