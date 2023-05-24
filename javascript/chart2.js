google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBarColors);

function drawBarColors() {
      var data = google.visualization.arrayToDataTable([
        ['Intervalos de idades', 'Mulheres', 'Homens'],
        ['0 a 23 meses', 19, 22],
        ['1 a 18 anos', 48, 46],
        ['19 a 44 anos', 35, 30],
        ['45 a 64 anos', 24, 25],
        ['65 ou mais anos', 18, 20]
      ]);

      var options = {
          height:400,
          width: 680,
        title: 'Tempo médio de espera pela concretização da consulta',
        chartArea: {width: '60%'},
        colors: ['#cc6b5e', '#4985a8'],
        hAxis: {
          title: 'Tempo total em horas',
          minValue: 0,
        },
        vAxis: {
          title: 'Intervalos de idades',
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));
      chart.draw(data, options);
    }