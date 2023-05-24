google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Intervalos de idade', 'Mulheres', 'Homens'],
    ['0 a 10 anos', 550, 670],
    ['15 a 28 anos', 2895, 2398],
    ['28 a 75 anos', 5235, 5252],
    ['75+ anos', 874, 1043]
  ]);

  var options = {
    chart: {
      title:'Taxa de utilização da USF de Beja',
      subtitle: 'Dados referentes a 2020',
    },
    bars: 'vertical',

    vAxis: {format: 'decimal'},
    height: 400,
    width: 680,
    colors: ['#cc6b5e', '#4985a8',],
  };

  var chart = new google.charts.Bar(document.getElementById('chart_div1'));

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


