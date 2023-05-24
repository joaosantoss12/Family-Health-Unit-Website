google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Intervalos de idade', 'Homens e Mulheres'],
    ['Crianças', 0.12],
    ['Jovens', 0.58],
    ['Adultos', 0.86],
    ['Idosos', 0.35],
  ]);

  var options = {
    chart: {
      title:'Índice de dependência por idade',
    },
    bars: 'vertical',

    vAxis: {format: 'decimal'},
    height: 400,
    width: 680,
    colors: ['#4985a8',],
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div6'));

  chart.draw(data, google.charts.Bar.convertOptions(options));

  var btns = document.getElementById('btn-group');

  btns.onclick = function (e) {

    if (e.target.tagName === 'BUTTON') {
      options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  }
}

google.charts.load('current', {'packages':['corechart']});


