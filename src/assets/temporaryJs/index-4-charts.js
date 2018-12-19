$(document).ready(function() {
    if ($('.face-chart-1')[0]) {
        (function() { //月度监测
            var card1 = $('.face-chart-1')[0];
            var myChart1 = echarts.init(card1);
            var colors = ['#0078ff', '#21457f'];
            var option = {
                color: ['#58c5bf', '#b9cb55', '#9b8578', '#afced3', '#df6c33'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                grid: {
                    top: 0,
                    left: 40,
                    bottom: 60,
                    right: 40
                },
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '50%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 5, name: '分类1' },
                        { value: 40, name: '分类2' },
                        { value: 12, name: '分类3' },
                        { value: 30, name: '分类4' },
                        { value: 23, name: '分类5' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
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

    if ($('.face-chart-2')[0]) {
        (function() { //月度监测
            var card1 = $('.face-chart-2')[0];
            var myChart1 = echarts.init(card1);
            var colors = ['#4ac2c6', '#ec8139'];
            var option = {
                color: ['#f51d46', '#fabf01', '#225bea'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },

                series: [{
                    name: '占比',
                    type: 'pie',
                    radius: ['40%', '60%'],
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