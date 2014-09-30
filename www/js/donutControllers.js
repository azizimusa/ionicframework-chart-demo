angular.module('donut.controllers', [])

.directive('zingdonut', function(){
  console.info("directive zing-donut");
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr){

      if(document.readyState == 'complete'){
        console.log("init zingdonut-donut");

        var myChart = {
         "type":"pie",
    "plot":{
        "slice":45
    },
    "plotarea":{
        "margin-top":"35px"
    },
    "series":[
        {
            "text":"Apples",
            "values":[5]
        },
        {
            "text":"Oranges",
            "values":[8]
        },
        {
            "text":"Bananas",
            "values":[22]
        },
        {
            "text":"Grapes",
            "values":[16]
        },
        {
            "text":"Cherries",
            "values":[12]
        }
    ]
       };
       zingchart.render({
         id : "myChartDiv",
         height : 450,
         width : 600,
         data : myChart
         });
      }
      else {

      }
    }
  }
})

.directive('hichartdonut', function(){
  console.info("directive hichart-donut");
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr){

      if(document.readyState == 'complete'){
        console.log("init hichart-donut");

        var colors = Highcharts.getOptions().colors,
        categories = ['MSIE', 'Firefox', 'Chrome', 'Safari', 'Opera'],
        data = [{
            y: 55.11,
            color: colors[0],
            drilldown: {
                name: 'MSIE versions',
                categories: ['MSIE 6.0', 'MSIE 7.0', 'MSIE 8.0', 'MSIE 9.0'],
                data: [10.85, 7.35, 33.06, 2.81],
                color: colors[0]
            }
        }, {
            y: 21.63,
            color: colors[1],
            drilldown: {
                name: 'Firefox versions',
                categories: ['Firefox 2.0', 'Firefox 3.0', 'Firefox 3.5', 'Firefox 3.6', 'Firefox 4.0'],
                data: [0.20, 0.83, 1.58, 13.12, 5.43],
                color: colors[1]
            }
        }, {
            y: 11.94,
            color: colors[2],
            drilldown: {
                name: 'Chrome versions',
                categories: ['Chrome 5.0', 'Chrome 6.0', 'Chrome 7.0', 'Chrome 8.0', 'Chrome 9.0',
                    'Chrome 10.0', 'Chrome 11.0', 'Chrome 12.0'],
                data: [0.12, 0.19, 0.12, 0.36, 0.32, 9.91, 0.50, 0.22],
                color: colors[2]
            }
        }, {
            y: 7.15,
            color: colors[3],
            drilldown: {
                name: 'Safari versions',
                categories: ['Safari 5.0', 'Safari 4.0', 'Safari Win 5.0', 'Safari 4.1', 'Safari/Maxthon',
                    'Safari 3.1', 'Safari 4.1'],
                data: [4.55, 1.42, 0.23, 0.21, 0.20, 0.19, 0.14],
                color: colors[3]
            }
        }, {
            y: 2.14,
            color: colors[4],
            drilldown: {
                name: 'Opera versions',
                categories: ['Opera 9.x', 'Opera 10.x', 'Opera 11.x'],
                data: [ 0.12, 0.37, 1.65],
                color: colors[4]
            }
        }],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });

        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.Color(data[i].color).brighten(brightness).get()
            });
        }
    }

    // Create the chart
    $('#hichart-container').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Market share, April, 2011'
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: 'Browsers',
            data: browserData,
            size: '60%',
            dataLabels: {
                formatter: function () {
                    return this.y > 5 ? this.point.name : null;
                },
                color: 'white',
                distance: -30
            }
        }, {
            name: 'Versions',
            data: versionsData,
            size: '80%',
            innerSize: '60%',
            dataLabels: {
                formatter: function () {
                    // display only if larger than 1
                    return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%'  : null;
                }
            }
        }]
    });
      }
      else {

      }
    }
  }
})

.directive('morrisdonut', function() {
  // var toDestroy = angular.element(document.querySelector('#chartjs'));
  // toDestroy.remove();
  console.info('directive morris-donut');
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {

      function initialize() {

        Morris.Donut({
          element: 'donut-example',
          data: [
            {label: "Initial deposit", value: 12},
            {label: "Savings", value: 30},
            {label: "Interest", value: 20}
          ],
          colors: [
            'tomato',
            '#39B580',
            'wheat'
          ],
          resize: true
        });
      } // end fn initialize

      if (document.readyState === "complete") {
        console.log('initialize');
        initialize();
      } else {
        initialize(); // had to force start it :(
        console.info('event.addDomListener');
        // Morris.Donut.event.addDomListener(window, 'load', initialize);
      }
    }
  }
})

.directive('chartjsdonut', function() {
  // var toDestroy = angular.element(document.querySelector('#morris'));
  // toDestroy.remove();
  console.info('directive chartjs-donut');
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {

      function initialize() {
        var doughnutData = [
				{
					value: 300,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Red"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Yellow"
				},
				{
					value: 40,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Grey"
				},
				{
					value: 120,
					color: "#4D5360",
					highlight: "#616774",
					label: "Dark Grey"
				}

			];
      var ctx = $("#chart-area").get(0).getContext("2d");
      var myNewChart = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
      } // end fn initialize

      if (document.readyState === "complete") {
        console.log('initialize');
        initialize();
      } else {
        console.info('event.addDomListener');
      }
    }
  }
})

.directive('canvasjsdonut', function() {
  console.info('directive canvasjs-donut');
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {


      if (document.readyState === "complete") {
        console.log('initialize');
        var chart = new CanvasJS.Chart("chartContainer",
        {
          title:{
            text: "Top U.S Smartphone Operating Systems By Market Share, Q3 2012"
          },
          data: [
          {
           type: "doughnut",
           dataPoints: [
           {  y: 53.37, indexLabel: "Android" },
           {  y: 35.0, indexLabel: "Apple iOS" },
           {  y: 7, indexLabel: "Blackberry" },
           {  y: 2, indexLabel: "Windows Phone" },
           {  y: 5, indexLabel: "Others" }
           ]
         }
         ]
       });

        chart.render();
      } else {
        console.info('event.addDomListener');
      }
    }
  }
})


.controller('DonutCtrl', function($scope,$stateParams,$state) {
  $scope.chartProvider = $stateParams.chartProvider;
//   link: (scope, element) {
//   element.on('click', function () {
//     console.log('click');
//   });
// }
})
