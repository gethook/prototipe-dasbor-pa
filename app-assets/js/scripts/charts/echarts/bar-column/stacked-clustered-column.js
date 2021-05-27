/*=========================================================================================
    File Name: stacked-clustered-column.js
    Description: echarts stacked clustered column chart
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Stacked clustered column chart
// ------------------------------

$(window).on("load", function(){

    // Set paths
    // ------------------------------

    require.config({
        paths: {
            echarts: 'app-assets/vendors/js/charts/echarts'
        }
    });


    // Configuration
    // ------------------------------

    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line'
        ],


        // Charts setup
        function (ec) {
            // Initialize chart
            // ------------------------------
            var myChart = ec.init(document.getElementById('stacked-clustered-column'));

            // Chart Options
            // ------------------------------
            chartOptions = {

                // Setup grid
                grid: {
                    x: 40,
                    x2: 20,
                    y: 70,
                    y2: 30
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis'
                },

                // Add legend
                legend: {
                    data: [
                        'Realisasi s.d Desember 2017','Realisasi s.d Desember 2018','Realisasi s.d Desember 2019','',
                        'Realisasi s.d Maret 2017','Realisasi s.d Maret 2018','Realisasi s.d Maret 2019'
                    ]
                },

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
                    type : 'category',
                    data : ['SETJEN','ITJEN','DJA','DJP','DJBC']
                },
                {
                    type : 'category',
                    axisLine: {show:false},
                    axisTick: {show:false},
                    axisLabel: {show:false},
                    splitArea: {show:false},
                    splitLine: {show:false},
                    data : ['SETJEN','ITJEN','DJA','DJP','DJBC']
                }
                ],

                // Vertical axis
                yAxis: [{
                    type : 'value',
                    axisLabel:{formatter:'{value} %'}
                }],

                // Add series
                series : [
                    {
                        name:'Realisasi s.d Maret 2017',
                        type:'bar',
                        itemStyle: {normal: {color:'rgba(22,211,154,1)', label:{show:true}}},
                        data:[21,13,13,14, 10]
                    },
                    {
                        name:'Realisasi s.d Maret 2018',
                        type:'bar',
                        itemStyle: {normal: {color:'rgba(45,206,227,1)', label:{show:true,textStyle:{color:'#27727B'}}}},
                        data:[21,12,14,13,10]
                    },
                    {
                        name:'Realisasi s.d Maret 2019',
                        type:'bar',
                        itemStyle: {normal: {color:'rgba(249,142,118,1)', label:{show:true,textStyle:{color:'#E87C25'}}}},
                        data:[23,15,18,16,15]
                    },
                    {
                        name:'Realisasi s.d Desember 2017',
                        type:'bar',
                        xAxisIndex:1,
                        itemStyle: {normal: {color:'rgba(22,211,154,0.7)', label:{show:true,formatter:function(p){return p.value > 0 ? (p.value +'\n'):'';}}}},
                        data:[95,86,87,96,92]
                    },
                    /*
                    {
                        name:'Realisasi s.d Desember 2017',
                        type:'bar',
                        xAxisIndex:1,
                        itemStyle: {normal: {color:'rgba(22,211,154,0.7)', label:{show:true,formatter:function(p){return p.value > 0 ? (p.value +'\n'):'';}}}},
                        data:[95,86,87,96,92]
                    },
                    */
                    {
                        name:'Realisasi s.d Desember 2018',
                        type:'bar',
                        xAxisIndex:1,
                        itemStyle: {normal: {color:'rgba(45,206,227,0.7)', label:{show:true}}},
                        data:[95,88,86,91,93]
                    },
                    {
                        name:'Realisasi s.d Desember 2019',
                        type:'bar',
                        xAxisIndex:1,
                        itemStyle: {normal: {color:'rgba(249,142,118,0.7)', label:{show:true,formatter:function(p){return p.value > 0 ? (p.value +''):'';}}}},
                        data:[95,95,95,95,95]
                    }
                ]
            };

            // Apply options
            // ------------------------------

            myChart.setOption(chartOptions);


            // Resize chart
            // ------------------------------

            $(function () {

                // Resize chart on menu width change and window resize
                $(window).on('resize', resize);
                $(".menu-toggle").on('click', resize);

                // Resize function
                function resize() {
                    setTimeout(function() {

                        // Resize chart
                        myChart.resize();
                    }, 200);
                }
            });
        }
    );
});