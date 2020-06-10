var data = {
    marks_graph: {
      x: [],
      y: []
      //x: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30'],
      //y: [10, 41, 35, 51, 49, 62, 69, 91, 148, 104, 113, 87, 65, 45, 153]
    },
    marks_bars: {
      x: [],
      y: []
      //x: ['1', '2', '3', '4', '5'],
      //y: [10, 200, 300, 400, 50]
    },
    review: {
      x: [],
      y: []
      //x: ['01', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30'],
      //y: [10, 200, 300, 400, 50, 122, 130, 160, 120, 100, 40, 12, 42, 320, 213]
    },
    occupancy: {
      x: [],
      y: {_1: [], _2: []}
      //y: {
      //  _1: [10, 200, 300, 400, 50, 122, 130, 160, 120, 100, 40, 12, 42, 320, 213],
      //  _2: [10, 200, 300, 400, 50, 122, 130, 160, 120, 100, 40, 12, 42, 320, 213]
      //},
      //x: ['01', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30']
    },
    nps_graph: {
      x: [],
      y: []
      //y: [1, 2, 2, 3, 2, 4, 5, 6, 5, 7, 8, 7, 9, 10, 10],
      //x: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30']
    },
    nps_bars: {
      x: [],
      y: []
      //y: [10, 50, 130, 180, 160, 250, 390, 280, 390, 280],
      //x: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    }
  };
  var marks_graph = {
    series: [{
      data: data.marks_graph.y
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
      categories: data.marks_graph.x,
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
    yaxis: {
        forceNiceScale: true,
        labels: {
            formatter: (val) => {
                return (parseInt(val) != val) ? '' : val
             },
        },
    },
    grid: {
      borderColor: '#90A4AE',
      strokeDashArray: 5
    },
    tooltip: {
      enabled: false
    }
  };
  var marks_bars = {
    series: [{
      data: data.marks_bars.y
    }],
    chart: {
      type: 'bar',
      height: 246,
      zoom: {
        enabled: false
      }
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
      categories: data.marks_bars.x,
      labels: {
        show: true,
        style: {
          colors: '#0B0E2D',
          fontSize: '12px',
          fontFamily: 'Montserrat,sans-serif'
        }
      }
    },
    yaxis: {
        forceNiceScale: true,
        labels: {
            formatter: (val) => {
                return (parseInt(val) != val) ? '' : val
             },
        },
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
  var review = {
    series: [{
      data: data.review.y
    }],
    chart: {
      type: 'bar',
      height: 246,
      zoom: {
        enabled: false
      }
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
      categories: data.review.x,
      labels: {
        show: true,
        style: {
          colors: '#0B0E2D',
          fontSize: '12px',
          fontFamily: 'Montserrat,sans-serif'
        }
      }
    },
    yaxis: {
        forceNiceScale: true,
        labels: {
            formatter: (val) => {
                return (parseInt(val) != val) ? '' : val
             },
        },
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
  var occupancy = {
    series: [{
      data: data.occupancy.y._1
    }, {
      data: data.occupancy.y._2
    }],
    chart: {
      type: 'bar',
      height: 246,
      zoom: {
        enabled: false
      }
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
      categories: data.occupancy.x,
      labels: {
        show: true,
        style: {
          colors: '#0B0E2D',
          fontSize: '12px',
          fontFamily: 'Montserrat,sans-serif'
        }
      }
    },
    yaxis: {
        forceNiceScale: true,
        labels: {
            formatter: (val) => {
                return (parseInt(val) != val) ? '' : val
             },
        },
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
  var nps_graph = {
    series: [{
      data: data.nps_graph.y
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
      categories: data.nps_graph.x,
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
    yaxis: {
        forceNiceScale: true,
        labels: {
            formatter: (val) => {
                return (parseInt(val) != val) ? '' : val
             },
        },
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
  var nps_bars = {
    series: [{
      data: data.nps_bars.y
    }],
    chart: {
      height: 246,
      type: 'bar',
      zoom: {
        enabled: false
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
      categories: data.nps_bars.x,
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
    yaxis: {
        forceNiceScale: true,
        labels: {
            formatter: (val) => {
                return (parseInt(val) != val) ? '' : val
             },
        },
    },
    grid: {
      borderColor: '#90A4AE',
      strokeDashArray: 5
    },
    tooltip: {
      enabled: false
    }
  };
  nps_bars = new ApexCharts(document.querySelector("#nps_bars"), nps_bars);
  marks_graph = new ApexCharts(document.querySelector("#marks_graph"), marks_graph);
  marks_bars = new ApexCharts(document.querySelector("#marks_bars"), marks_bars);
  nps_graph = new ApexCharts(document.querySelector("#nps_graph"), nps_graph);
  occupancy = new ApexCharts(document.querySelector("#occupancy"), occupancy);
  review = new ApexCharts(document.querySelector("#review"), review);
  nps_bars.render();
  marks_graph.render();
  marks_bars.render();
  nps_graph.render();
  occupancy.render();
  review.render();
  //# sourceMappingURL=graphs.js.map
  