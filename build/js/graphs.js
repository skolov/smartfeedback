// Желтый
var options_1 = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 104, 113, 87, 65, 45, 153]
  }],
  chart: {
    height: 246,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    colors: '#FAC700'
  },
  xaxis: {
    categories: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30'],
    labels: {
      show: true,
      style: {
        colors: '#0B0E2D',
        fontSize: '12px',
        fontFamily: 'Montserrat,sans-serif',
        cssClass: 'apexcharts-xaxis-label'
      }
    }
  },
  grid: {
    borderColor: '#90A4AE',
    strokeDashArray: 5
  },
  tooltip: {
    enabled: false
  }
};
var chart_1 = new ApexCharts(document.querySelector("#chart_1"), options_1);
chart_1.render(); // Синий

var options_2 = {
  series: [{
    name: 'Net Profit',
    data: [10, 200, 300, 400, 50]
  }],
  chart: {
    type: 'bar',
    height: 246
  },
  colors: ['#4E94CA'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '40%',
      endingShape: 'flat'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2
  },
  xaxis: {
    categories: ['1', '2', '3', '4', '5'],
    labels: {
      show: true,
      style: {
        colors: '#0B0E2D',
        fontSize: '12px',
        fontFamily: 'Montserrat,sans-serif'
      }
    }
  },
  fill: {
    opacity: 1
  },
  grid: {
    borderColor: '#90A4AE',
    strokeDashArray: 5
  },
  tooltip: {
    enabled: false
  }
};
var chart_2 = new ApexCharts(document.querySelector("#chart_2"), options_2);
chart_2.render(); // Фиолетовый

var options_3 = {
  series: [{
    name: 'Net Profit',
    data: [10, 200, 300, 400, 50, 122, 130, 160, 120, 100, 40, 12, 42, 320, 213]
  }],
  chart: {
    type: 'bar',
    height: 246
  },
  colors: ['#9E95DE'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '20%',
      endingShape: 'rounded'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2
  },
  xaxis: {
    categories: ['01', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30'],
    labels: {
      show: true,
      style: {
        colors: '#0B0E2D',
        fontSize: '12px',
        fontFamily: 'Montserrat,sans-serif'
      }
    }
  },
  fill: {
    opacity: 1
  },
  grid: {
    borderColor: '#90A4AE',
    strokeDashArray: 5
  },
  tooltip: {
    enabled: false
  }
};
var chart_3 = new ApexCharts(document.querySelector("#chart_3"), options_3);
chart_3.render(); // Зелено-красный

var options_4 = {
  series: [{
    data: [10, 200, 300, 400, 50, 122, 130, 160, 120, 100, 40, 12, 42, 320, 213]
  }, {
    data: [10, 200, 300, 400, 50, 122, 130, 160, 120, 100, 40, 12, 42, 320, 213]
  }],
  chart: {
    type: 'bar',
    height: 246
  },
  colors: ['#95DEBF', '#DE9595'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['01', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30']
  },
  fill: {
    opacity: 1
  },
  grid: {
    borderColor: '#90A4AE',
    strokeDashArray: 5
  },
  tooltip: {
    enabled: false
  },
  legend: {
    show: false,
    showForSingleSeries: false,
    showForNullSeries: false,
    showForZeroSeries: false
  }
};
var chart_4 = new ApexCharts(document.querySelector("#chart_4"), options_4);
chart_4.render(); // Градиент

var options_5 = {
  series: [{
    name: "Desktops",
    data: [1, 2, 2, 3, 2, 4, 5, 6, 5, 7, 8, 7, 9, 10, 10]
  }],
  chart: {
    height: 246,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    colors: '#c5ff91'
  },
  xaxis: {
    categories: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30'],
    labels: {
      show: true,
      style: {
        colors: '#0B0E2D',
        fontSize: '12px',
        fontFamily: 'Montserrat,sans-serif',
        cssClass: 'apexcharts-xaxis-label'
      }
    }
  },
  grid: {
    borderColor: '#90A4AE',
    strokeDashArray: 5
  },
  tooltip: {
    enabled: false
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      gradientToColors: ['#fc0303'],
      shadeIntensity: 1,
      type: 'horizontal',
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 200, 300, 400]
    }
  }
};
var chart_5 = new ApexCharts(document.querySelector("#chart_5"), options_5);
chart_5.render(); // Адище

var options_6 = {
  series: [{
    data: [10, 50, 130, 180, 160, 250, 390, 280, 390, 280]
  }],
  chart: {
    height: 246,
    type: 'bar',
    events: {
      click: function click(chart, w, e) {// console.log(chart, w, e)
      }
    }
  },
  colors: ['#DE9595', '#DE9595', '#DE9595', '#DE9595', '#DE9595', '#DE9595', '#EBD380', '#EBD380', '#95DEBF', '#95DEBF'],
  plotOptions: {
    bar: {
      columnWidth: '20%',
      distributed: true,
      endingShape: 'rounded'
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    labels: {
      show: true,
      style: {
        colors: '#0B0E2D',
        fontSize: '12px',
        fontFamily: 'Montserrat,sans-serif',
        cssClass: 'apexcharts-xaxis-label'
      }
    }
  },
  grid: {
    borderColor: '#90A4AE',
    strokeDashArray: 5
  },
  tooltip: {
    enabled: false
  }
};
var chart_6 = new ApexCharts(document.querySelector("#chart_6"), options_6);
chart_6.render();
//# sourceMappingURL=graphs.js.map
