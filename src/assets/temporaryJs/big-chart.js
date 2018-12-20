$(document).ready(function() {
    if ($('.data-chart-1')[0]) {
        (function() { //月度监测
            var card1 = $('.data-chart-1')[0];
            var myChart1 = echarts.init(card1);
            var colors = ['#0078ff', '#21457f'];
            var option = {
                title: {
                    text: '打架斗殴率数据图',
                    textStyle: {
                        color: '#feffff',
                        fontSize: '16'
                    },
                    padding: [30, 10, 5, 40], //设置标题内边距,上，右，下，左
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                grid: {
                    top: '32%',
                    left: '3%',
                    right: '6%',
                    bottom: '8%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    show: true,
                    boundaryGap: false,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#9898a4',
                            fontSize: "14"
                        },

                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#404058'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#404058'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                }],
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#9898a4',
                            fontSize: "14"
                        },

                    },
                    show: true,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        //设置网格线的颜色
                        lineStyle: {
                            color: ['#404058'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                }],
                series: [{
                        name: '辆',
                        type: 'line',
                        symbol: 'none', //拐点样式
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#f11d45'
                                }
                            }
                        },
                        data: [12, 13, 10, 13, 9, 23, 21]
                    }



                ]
            };



            // 使用刚指定的配置项和数据显示图表。
            myChart1.setOption(option);

            // 自适应
            $(window).resize(function() {
                myChart1.resize(); //窗口变化
            });

        }());
    };

    if ($('.data-chart-2')[0]) {
        (function() { //月度监测
            var card1 = $('.data-chart-2')[0];
            var myChart1 = echarts.init(card1);
            var colors = ['#0078ff', '#21457f'];
            var option = {
                title: {
                    text: '本周社区主要街道堵车率',
                    textStyle: {
                        color: '#fbfffe',
                        fontSize: '16'
                    },
                    padding: [30, 10, 5, 40], //设置标题内边距,上，右，下，左
                },
                legend: {
                    x: 'right',
                    y: '20%',
                    data: ['今天', '昨天'],
                    icon: 'circle',
                    itemWidth: 10,
                    itemHeight: 10,
                    // itemGap: 10,
                    textStyle: { //图例文字的样式
                        color: '#ccc',
                        fontSize: 14
                    },
                    padding: [0, 20, 0, 0]
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                grid: {
                    top: '35%',
                    left: '3%',
                    right: '6%',
                    bottom: '8%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    show: true,
                    boundaryGap: false,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#9898a4',
                            fontSize: "14"
                        },

                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#404058'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#404058'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                }],
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#9898a4',
                            fontSize: "14"
                        },

                    },
                    show: true,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        //设置网格线的颜色
                        lineStyle: {
                            color: ['#404058'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                }],
                series: [{
                        name: '昨天',
                        type: 'line',
                        symbol: 'circle', //拐点样式
                        symbolSize: 8, //拐点大小
                        color: ['#fe2a74'],
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#fe2a74',
                                }
                            }
                        },
                        data: [12, 13, 10, 13, 9, 23, 21]
                    }, {
                        name: '今天',
                        type: 'line',
                        symbol: 'circle', //拐点样式
                        symbolSize: 8, //拐点大小
                        color: ['#0076fe'],
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#0076fe',
                                }
                            }
                        },
                        data: [17, 13, 12, 16, 15, 20, 11]
                    }



                ]
            };



            // 使用刚指定的配置项和数据显示图表。
            myChart1.setOption(option);

            // 自适应
            $(window).resize(function() {
                myChart1.resize(); //窗口变化
            });

        }());
    };

    if ($('.data-chart-3')[0]) {
        (function() { //月度监测
            var card1 = $('.data-chart-3')[0];
            var myChart1 = echarts.init(card1);
            var colors = ['#5b2c72', '#b71261'];
            var option = {
                legend: {
                    x: 'right',
                    y: '20%',
                    data: ['上周统计数据'],
                    icon: 'circle',
                    itemWidth: 10,
                    itemHeight: 10,
                    // itemGap: 10,
                    textStyle: { //图例文字的样式
                        color: '#ccc',
                        fontSize: 14
                    },
                    padding: [0, 20, 0, 0]
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#2257e1'
                        }
                    }
                },
                title: {
                    text: '上、下半年社区公共设施损坏率',
                    textStyle: {
                        color: '#fec600',
                        fontSize: '16'
                    },
                    padding: [30, 10, 5, 40], //设置标题内边距,上，右，下，左
                },
                grid: {
                    top: '33%',
                    left: '10%',
                    right: '10%',
                    bottom: '10%',
                    containLabel: true,
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    axisLine: { //坐标轴轴线相关设置。数学上的x轴
                        show: true,
                        lineStyle: {
                            color: '#233e64'
                        },
                    },
                    axisLabel: { //坐标轴刻度标签的相关设置
                        textStyle: {
                            color: '#6a9cd5',
                            margin: 15,
                        },
                    },
                    axisTick: { show: false, },
                    data: ['第一月', '第二月', '第三月', '第四月', '第五月', '第六月', '第七月'],
                }],
                yAxis: [{
                    type: 'value',
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#233e64'
                        }
                    },
                    axisLine: { show: false, },
                    axisLabel: {
                        margin: 20,
                        textStyle: {
                            color: '#6a9cd5',

                        },
                    },
                    axisTick: { show: false, },
                }],
                series: [{
                    name: '上周统计数据',
                    type: 'line',
                    smooth: true, //是否平滑曲线显示
                    // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
                    symbolSize: 0,

                    lineStyle: {
                        normal: {
                            color: "none" // 线条颜色
                        }
                    },
                    areaStyle: { //区域填充样式
                        normal: {
                            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                            color: '#2257e1',

                            shadowColor: 'rgba(91,44,114, 0.9)', //阴影颜色
                            shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                        }
                    },
                    data: [90, 105, 84, 125, 110, 92, 98]
                }]
            };



            // 使用刚指定的配置项和数据显示图表。
            myChart1.setOption(option);

            // 自适应
            $(window).resize(function() {
                myChart1.resize(); //窗口变化
            });

        }());
    };

    if ($('.data-chart-4')[0]) {
        (function() { //月度监测
            var card1 = $('.data-chart-4')[0];
            var myChart1 = echarts.init(card1);
            var colors = ['#4ac2c6', '#ec8139'];
            var option = {
                color: colors,
                grid: {
                    x: '10%',
                    y: '32%',
                    x2: '5%',
                    y2: '12%',
                    borderWidth: 1
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                title: {
                    text: '业主进出数据',
                    textStyle: {
                        color: '#a2bbfe',
                        fontSize: '16'
                    },
                    padding: [30, 10, 5, 40], //设置标题内边距,上，右，下，左
                },
                legend: {
                    x: 'right',
                    y: '20%',
                    data: ['区域1', '区域2', '区域3'],
                    icon: 'rect',
                    itemWidth: 10,
                    itemHeight: 10,
                    // itemGap: 10,
                    textStyle: { //图例文字的样式
                        color: '#ccc',
                        fontSize: 14
                    },
                    padding: [0, 20, 0, 0]
                },
                xAxis: [{
                    type: 'category',
                    splitLine: { show: false },
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#5d6675',
                            fontSize: "14"
                        },

                    }

                }],
                yAxis: [{
                    type: 'value',
                    name: '',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#686874',
                            fontSize: "14"
                        },

                    },
                    show: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#404058'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                }],
                series: [{
                    name: '区域1',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: '#f51d46'
                        }
                    },
                    data: [7, 31, 32, 37, 42, 35, 38],
                }, {
                    name: '区域2',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: '#215ae7'
                        }
                    },
                    data: [9, 37, 32, 37, 42, 45, 34],

                }, {
                    name: '区域3',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: '#f0c721'
                        }
                    },
                    data: [2, 7, 32, 33, 32, 35, 48],

                }]
            };


            // 使用刚指定的配置项和数据显示图表。
            myChart1.setOption(option);

            // 自适应
            $(window).resize(function() {
                myChart1.resize(); //窗口变化
            });

        }());
    };

    if ($('.data-chart-5')[0]) {
        (function() { //月度监测
            var card1 = $('.data-chart-5')[0];
            var myChart1 = echarts.init(card1);
            var colors = ['#036be6', '#21457f'];
            var option = {
                title: {
                    text: '外来人员进出数据',
                    textStyle: {
                        color: '#ef156c',
                        fontSize: '16'
                    },
                    padding: [20, 10, 5, 40], //设置标题内边距,上，右，下，左
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: ['辆'],
                    y: '10%',
                    right: '10%',
                    textStyle: { //图例文字的样式
                        color: '#ccc',
                        fontSize: 14
                    }
                },

                grid: {
                    top: '30%',
                    left: '5%',
                    right: '5%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    show: true,
                    boundaryGap: false,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#686874',
                            fontSize: "14"
                        },

                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#404058'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#404058'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                    data: ['20:00', '0:00', '4:00', '8:00', '12:00', '16:00', '20:00'],
                }],
                yAxis: [{
                    type: 'value',
                    scale: true,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#686874',
                            fontSize: "14"
                        },

                    },
                    show: true,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        //设置网格线的颜色
                        lineStyle: {
                            color: ['#404058'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                }],
                series: [{
                        name: '辆',
                        type: 'line',
                        stack: '总量',
                        lineStyle: {
                            normal: {
                                color: "#3deaff" // 线条颜色
                            }
                        },

                        areaStyle: { //区域填充样式
                            normal: {
                                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                                color: '#0659c3',

                                color: ['#0659c3'],
                                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                            }
                        },
                        symbolSize: 4,
                        itemStyle: {
                            normal: {
                                color: '#0659c3',
                                borderColor: '#0659c3', //拐点边框颜色
                            }
                        },

                        data: [120, 132, 101, 134, 90, 230, 210]
                    }



                ]
            };



            // 使用刚指定的配置项和数据显示图表。
            myChart1.setOption(option);

            // 自适应
            $(window).resize(function() {
                myChart1.resize(); //窗口变化
            });

        }());
    };

    if ($('.data-chart-6')[0]) {
        (function() { //月度监测
            var card1 = $('.data-chart-6')[0];
            var myChart1 = echarts.init(card1);
            var colors = ['#0078ff', '#21457f'];
            var option = {
                title: {
                    text: '预警安防设计图',
                    textStyle: {
                        color: '#feffff',
                        fontSize: '16'
                    },
                    padding: [30, 10, 5, 40], //设置标题内边距,上，右，下，左
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                grid: {
                    top: '25%',
                    left: '5%',
                    right: '5%',
                    bottom: '13%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    show: true,
                    boundaryGap: false,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#9898a4',
                            fontSize: "14"
                        },

                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#404058'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: ['#404058'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                }],
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#9898a4',
                            fontSize: "14"
                        },

                    },
                    show: true,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        //设置网格线的颜色
                        lineStyle: {
                            color: ['#404058'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                }],
                series: [{
                        name: '第一周',
                        type: 'line',
                        symbol: 'none', //拐点样式
                        smooth: true, //true 为平滑曲线，false为直线
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#fe2a74',
                                    width: 4,
                                }
                            }
                        },
                        data: [12, 13, 10, 13, 9, 23, 21]
                    }, {
                        name: '第二周',
                        type: 'line',
                        symbol: 'none', //拐点样式
                        smooth: true, //true 为平滑曲线，false为直线
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#21842a',
                                    width: 4,
                                }
                            }
                        },
                        data: [14, 23, 40, 33, 19, 23, 31]
                    },
                    {
                        name: '第三周',
                        type: 'line',
                        symbol: 'none', //拐点样式
                        smooth: true, //true 为平滑曲线，false为直线
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#225ae5',
                                    width: 4,
                                }
                            }
                        },
                        data: [22, 33, 15, 23, 19, 33, 26]
                    }, {
                        name: '第四周',
                        type: 'line',
                        symbol: 'none', //拐点样式
                        smooth: true, //true 为平滑曲线，false为直线
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#e8b211',
                                    width: 4,
                                }
                            }
                        },
                        data: [21, 23, 16, 18, 23, 24, 25]
                    }


                ]
            };



            // 使用刚指定的配置项和数据显示图表。
            myChart1.setOption(option);

            // 自适应
            $(window).resize(function() {
                myChart1.resize(); //窗口变化
            });

        }());
    };
    if ($('.data-chart-7')[0]) {
        (function() { //月度监测
            var card1 = $('.data-chart-7')[0];
            var myChart1 = echarts.init(card1);
            var colors = ['#0078ff', '#21457f'];
            var option = {
                title: {
                    text: '预警监控',
                    textStyle: {
                        color: '#feffff',
                        fontSize: '14'
                    },
                    left: 'center',
                    padding: [0, 10, 5, 40], //设置标题内边距,上，右，下，左
                },
                tooltip: {

                },

                series: [{
                    name: '完成度：',
                    type: 'pie',
                    radius: ['40%', '62%'],
                    center: ['50%', '50%'],
                    color: '#fe0000',
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                        value: 29,
                        name: '完成',

                        label: {
                            normal: {
                                formatter: '{d} %',
                                textStyle: {
                                    fontSize: 15
                                }
                            }
                        },
                        tooltip: {
                            trigger: 'item',

                        }
                    }, {
                        value: 9,
                        name: '未完成',
                        label: {
                            normal: {
                                formatter: '\n',
                                textStyle: {
                                    color: '#fe0000',
                                    fontSize: 13
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#aaa'
                            },
                            emphasis: {
                                color: '#aaa'
                            }
                        },
                    }]
                }]
            };



            // 使用刚指定的配置项和数据显示图表。
            myChart1.setOption(option);

            // 自适应
            $(window).resize(function() {
                myChart1.resize(); //窗口变化
            });

        }());
    };
    if ($('.data-chart-8')[0]) {
        (function() { //月度监测
            var card1 = $('.data-chart-8')[0];
            var myChart1 = echarts.init(card1);
            var colors = ['#0078ff', '#21457f'];
            var option = {
                title: {
                    text: '外来车辆',
                    textStyle: {
                        color: '#feffff',
                        fontSize: '14'
                    },
                    left: 'center',
                    padding: [0, 10, 5, 40], //设置标题内边距,上，右，下，左
                },
                tooltip: {

                },

                series: [{
                    name: '完成度：',
                    type: 'pie',
                    radius: ['40%', '62%'],
                    center: ['50%', '50%'],
                    color: '#00ffb9',
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                        value: 29,
                        name: '完成',

                        label: {
                            normal: {
                                formatter: '{d} %',
                                textStyle: {
                                    fontSize: 15
                                }
                            }
                        },
                        tooltip: {
                            trigger: 'item',

                        }
                    }, {
                        value: 9,
                        name: '未完成',
                        label: {
                            normal: {
                                formatter: '\n',
                                textStyle: {
                                    color: '#fe0000',
                                    fontSize: 13
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#aaa'
                            },
                            emphasis: {
                                color: '#aaa'
                            }
                        },
                    }]
                }]
            };



            // 使用刚指定的配置项和数据显示图表。
            myChart1.setOption(option);

            // 自适应
            $(window).resize(function() {
                myChart1.resize(); //窗口变化
            });

        }());
    };
    if ($('.data-chart-9')[0]) {
        (function() { //月度监测
            var card1 = $('.data-chart-9')[0];
            var myChart1 = echarts.init(card1);
            var colors = ['#0078ff', '#21457f'];
            var option = {
                title: {
                    text: '外来人员',
                    textStyle: {
                        color: '#feffff',
                        fontSize: '14'
                    },
                    left: 'center',
                    padding: [0, 10, 5, 40], //设置标题内边距,上，右，下，左
                },
                tooltip: {

                },

                series: [{
                    name: '完成度：',
                    type: 'pie',
                    radius: ['40%', '62%'],
                    center: ['50%', '50%'],
                    color: '#0061ff',
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                        value: 24,
                        name: '完成',

                        label: {
                            normal: {
                                formatter: '{d} %',
                                textStyle: {
                                    fontSize: 15
                                }
                            }
                        },
                        tooltip: {
                            trigger: 'item',

                        }
                    }, {
                        value: 9,
                        name: '未完成',
                        label: {
                            normal: {
                                formatter: '\n',
                                textStyle: {
                                    color: '#fe0000',
                                    fontSize: 13
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#aaa'
                            },
                            emphasis: {
                                color: '#aaa'
                            }
                        },
                    }]
                }]
            };



            // 使用刚指定的配置项和数据显示图表。
            myChart1.setOption(option);

            // 自适应
            $(window).resize(function() {
                myChart1.resize(); //窗口变化
            });

        }());
    };
    if ($('.data-chart-10')[0]) {
        (function() { //月度监测
            var card1 = $('.data-chart-10')[0];
            var myChart1 = echarts.init(card1);
            var colors = ['#0078ff', '#21457f'];
            var option = {
                title: {
                    text: '人脸识别',
                    textStyle: {
                        color: '#feffff',
                        fontSize: '14'
                    },
                    left: 'center',
                    padding: [0, 10, 5, 40], //设置标题内边距,上，右，下，左
                },
                tooltip: {

                },
                series: [{
                    name: '进度',
                    type: 'pie',
                    radius: ['40%', '62%'],
                    center: ['50%', '50%'],
                    color: '#fea200',
                    label: {
                        normal: {
                            position: 'center'
                        }
                    },
                    data: [{
                        value: 25,
                        name: '完成',

                        label: {
                            normal: {
                                formatter: '{d} %',
                                textStyle: {
                                    fontSize: 15
                                }
                            }
                        },
                        tooltip: {
                            trigger: 'item',

                        }
                    }, {
                        value: 9,
                        name: '未完成',
                        label: {
                            normal: {
                                formatter: '\n',
                                textStyle: {
                                    color: '#0061ff',
                                    fontSize: 13
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#aaa'
                            },
                            emphasis: {
                                color: '#aaa'
                            }
                        },
                    }]
                }]
            };



            // 使用刚指定的配置项和数据显示图表。
            myChart1.setOption(option);

            // 自适应
            $(window).resize(function() {
                myChart1.resize(); //窗口变化
            });

        }());
    };
    if ($('.chart1')[0]) {
        (function() { //月度监测
            var card1 = $('.chart1')[0];
            var myChart1 = echarts.init(card1);
            var option = {
                color: ['#f51d46', '#fabf01', '#225bea'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                title: {
                    text: '社区内区域预警占比',
                    textStyle: {
                        //文字颜色
                        color: '#fff',
                        //字体风格,'normal','italic','oblique'
                        fontStyle: 'normal',
                        //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                        fontWeight: 'normal',
                        //字体系列
                        // fontFamily: 'MicrosoftYaHei',
                        //字体大小
                        fontSize: 13
                    },
                    left: 'center'
                },
                legend: {
                    orient: 'vertical',
                    x: 'right',
                    y: '20%',
                    data: ['区域1', '区域2', '区域3'],
                    icon: 'rect',
                    itemWidth: 10,
                    itemHeight: 10,
                    // itemGap: 10,
                    textStyle: { //图例文字的样式
                        color: '#ccc',
                        fontSize: 14
                    },
                    padding: [0, 20, 0, 0]
                },
                series: [{
                    name: '占比',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '15',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: '区域1' },
                        { value: 310, name: '区域2' },
                        { value: 234, name: '区域3' },
                    ]
                }]
            };





            // 使用刚指定的配置项和数据显示图表。
            myChart1.setOption(option);

            // 自适应
            $(window).resize(function() {
                myChart1.resize(); //窗口变化
            });

        }());
    };
    if ($('.chart2')[0]) {
        (function() { //月度监测
            var card1 = $('.chart2')[0];
            var myChart1 = echarts.init(card1);
            var option = {
                color: ['#e73543', '#f9b419', '#12acd2'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                grid: {
                    top: '35%',
                    left: '3%',
                    right: '6%',
                    bottom: '8%',
                    containLabel: true
                },
                title: {
                    text: '楼层预警数据',
                    textStyle: {
                        //文字颜色
                        color: '#fff',
                        //字体风格,'normal','italic','oblique'
                        fontStyle: 'normal',
                        //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                        fontWeight: 'normal',
                        //字体系列
                        // fontFamily: 'MicrosoftYaHei',
                        //字体大小
                        fontSize: 13
                    },
                    left: 'center'
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    y: '20%',
                    data: ['区域1', '区域2', '区域3'],
                    icon: 'rect',
                    itemWidth: 10,
                    itemHeight: 10,
                    // itemGap: 10,
                    textStyle: { //图例文字的样式
                        color: '#ccc',
                        fontSize: 14
                    },
                    padding: [0, 20, 0, 0]
                },
                series: [{
                    name: '占比',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '15',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: '区域1' },
                        { value: 310, name: '区域2' },
                        { value: 234, name: '区域3' },
                    ]
                }]
            };





            // 使用刚指定的配置项和数据显示图表。
            myChart1.setOption(option);

            // 自适应
            $(window).resize(function() {
                myChart1.resize(); //窗口变化
            });

        }());
    };
})