/*=========================================================================================
    File Name: column-line.js
    Description: echarts column line chart
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Column line chart
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
            'echarts/chart/line',
            'echarts/chart/scatter',
            'echarts/chart/pie'
        ],


        // Charts setup
        function (ec) {

            // Initialize chart
            // ------------------------------
            var myChart = ec.init(document.getElementById('column-line'));

            // Chart Options
            // ------------------------------
            chartOptions = {

                // Setup grid
                grid: {
                    x: 40,
                    x2: 40,
                    y: 45,
                    y2: 25
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis'
                },

                // Add legend
                legend: {
                    data: ['Pagu 2018', 'Pagu 2019', 'Real 2018', 'Real 2019']
                },

                // Add custom colors
                color: ['#FFAC9E', '#2AB7CA', '#0052BF', '#FF2D0C'],

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                }],

                // Vertical axis
                yAxis : [
                    {
                        type : 'value',
                        name : 'Pagu',
                        axisLabel : {
                            formatter: '{value}'
                        }
                    },
                    {
                        type : 'value',
                        name : 'Realisasi',
                        axisLabel : {
                            formatter: '{value}'
                        }
                    }
                ],

                // Add series
                series : [
                    {
                        name:'Pagu 2018',
                        type:'bar',
                        data:[45157, 45157, 45157, 45157, 45157, 45157, 45157, 45157, 45157, 45157, 45157, 45157]
                    },
                    {
                        name:'Pagu 2019',
                        type:'bar',
                        data:[45031, 45031, 45031, 45031, 45031, 45031, 45031, 45031, 45031, 45031, 45031, 45031]
                    },
                    {
                        name:'Real 2018',
                        type:'line',
                        yAxisIndex: 1,
                        data:[2160, 3807, 8343, 10608, 15107, 19085, 22771, 26178, 29552, 32366, 35320, 39962, 50000]
                    },
                    {
                        name:'Real 2019',
                        type:'line',
                        yAxisIndex: 1,
                        data:[2567, 4504, 5061, 5061, 5061, 5061, 5061, 5061, 5061, 5061, 5061, 5061, 50000]
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