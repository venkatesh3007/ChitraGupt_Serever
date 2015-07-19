import Ember from 'ember';

export default Ember.Controller.extend({
  data1: {
    labels: ["Veg Biryani", "Chicken Biryani", "Hakka Noodles", "Gobi Manchurian", "Panner Tikka", "Chicken Tikka", "Gobi 65"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "#01DF01",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "#F7464A",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    },

  data2: [
          {
              value: 66,
              color:"#01DF01",
              highlight: "#00FF00",
              label: "Positive"
          },
          {
              value: 33,
              color: "#F7464A",
              highlight: "#FA5858",
              label: "Negative"
          }
        ],

  options1: {
            //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
            scaleBeginAtZero : true,

            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines : true,

            //String - Colour of the grid lines
            scaleGridLineColor : "rgba(0,0,0,.05)",

            //Number - Width of the grid lines
            scaleGridLineWidth : 1,

            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,

            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,

            //Boolean - If there is a stroke on each bar
            barShowStroke : true,

            //Number - Pixel width of the bar stroke
            barStrokeWidth : 2,

            //Number - Spacing between each of the X value sets
            barValueSpacing : 5,

            //Number - Spacing between data sets within X values
            barDatasetSpacing : 1
          },

  options2: {
              //Boolean - Whether we should show a stroke on each segment
              segmentShowStroke : true,

              //String - The colour of each segment stroke
              segmentStrokeColor : "#fff",

              //Number - The width of each segment stroke
              segmentStrokeWidth : 2,

              //Number - The percentage of the chart that we cut out of the middle
              percentageInnerCutout : 50, // This is 0 for Pie charts

              //Number - Amount of animation steps
              animationSteps : 100,

              //String - Animation easing effect
              animationEasing : "easeOutBounce",

              //Boolean - Whether we animate the rotation of the Doughnut
              animateRotate : true,

              //Boolean - Whether we animate scaling the Doughnut from the centre
              animateScale : false,
            }
});
