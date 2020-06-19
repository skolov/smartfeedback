function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dateForGraphs = [''];
var data = {
  marks_graph: {
    x: [],
    y: []
  },
  marks_bars: {
    x: [],
    y: []
  },
  review_bars: {
    x: [],
    y: []
  },
  review_graph: {
    x: [],
    y: []
  },
  occupancy_bars: {
    x: [],
    y: {
      _1: [],
      _2: []
    }
  },
  occupancy_graph: {
    x: [],
    y: {
      _1: [],
      _2: []
    }
  },
  nps_graph: {
    x: [],
    y: []
  },
  nps_bars: {
    x: [],
    y: []
  }
};

function formatterForGraphs(value, timestamp, index) {
  if (value !== undefined && value !== '') {
    var newValue = dateForGraphs[value - 1];

    if (newValue !== undefined) {
      return newValue.split('.')[0];
    }
  }
}

function formatterForBars(value, timestamp, index) {
  if (value !== undefined && value !== '') {
    return value.split('.')[0];
  }
}

function getCustomToolptipBars(object) {
  function getNormalView(param) {
    var mounth = {
      '01': 'Января',
      '02': 'Февраля',
      '03': 'Марта',
      '04': 'Апреля',
      '05': 'Мая',
      '06': 'Июня',
      '07': 'Июля',
      '08': 'Августа',
      '09': 'Сентября',
      '10': 'Октября',
      '11': 'Ноября',
      '12': 'Декабря'
    },
        mounth2 = {
      '01': 'Январь',
      '02': 'Февраль',
      '03': 'Март',
      '04': 'Апрель',
      '05': 'Май',
      '06': 'Июнь',
      '07': 'Июль',
      '08': 'Август',
      '09': 'Сентябрь',
      '10': 'Октябрь',
      '11': 'Ноябрь',
      '12': 'Декабрь'
    },
        dateArray;
    dateArray = param.split('.');

    if (dateArray.length === 3) {
      return dateArray[0] + ' ' + mounth[dateArray[1]];
    } else {
      return mounth2[dateArray[0]];
    }
  }

  return '<div class="arrow_box">' + '<span class="arrow-xdata">' + object.series[object.seriesIndex][object.dataPointIndex] + '</span>' + '<span class="arrow-ydata">' + getNormalView(object.w.globals.labels[object.dataPointIndex]) + '</span>' + '</div>';
}

function getCustomToolptipGraph(object) {
  function getNormalView(param) {
    var mounth = {
      '01': 'Января',
      '02': 'Февраля',
      '03': 'Марта',
      '04': 'Апреля',
      '05': 'Мая',
      '06': 'Июня',
      '07': 'Июля',
      '08': 'Августа',
      '09': 'Сентября',
      '10': 'Октября',
      '11': 'Ноября',
      '12': 'Декабря'
    },
        mounth2 = {
      '01': 'Январь',
      '02': 'Февраль',
      '03': 'Март',
      '04': 'Апрель',
      '05': 'Май',
      '06': 'Июнь',
      '07': 'Июль',
      '08': 'Август',
      '09': 'Сентябрь',
      '10': 'Октябрь',
      '11': 'Ноябрь',
      '12': 'Декабрь'
    },
        dateArray;
    dateArray = param.split('.');

    if (dateArray.length === 3) {
      return dateArray[0] + ' ' + mounth[dateArray[1]];
    } else {
      return mounth2[dateArray[0]];
    }
  }

  return '<div class="arrow_box">' + '<span class="arrow-xdata">' + object.series[object.seriesIndex][object.dataPointIndex] + '</span>' + '<span class="arrow-ydata">' + getNormalView(dateForGraphs[object.dataPointIndex]) + '</span>' + '</div>';
}

function getCustomToolptipGraphTwo(object) {
  function getNormalView(param) {
    var mounth = {
      '01': 'Января',
      '02': 'Февраля',
      '03': 'Марта',
      '04': 'Апреля',
      '05': 'Мая',
      '06': 'Июня',
      '07': 'Июля',
      '08': 'Августа',
      '09': 'Сентября',
      '10': 'Октября',
      '11': 'Ноября',
      '12': 'Декабря'
    },
        mounth2 = {
      '01': 'Январь',
      '02': 'Февраль',
      '03': 'Март',
      '04': 'Апрель',
      '05': 'Май',
      '06': 'Июнь',
      '07': 'Июль',
      '08': 'Август',
      '09': 'Сентябрь',
      '10': 'Октябрь',
      '11': 'Ноябрь',
      '12': 'Декабрь'
    },
        dateArray;
    dateArray = param.split('.');

    if (dateArray.length === 3) {
      return dateArray[0] + ' ' + mounth[dateArray[1]];
    } else {
      return mounth2[dateArray[0]];
    }
  }

  return '<div class="arrow_box">' + '<span class="arrow-xdata">' + object.series[0][object.dataPointIndex] + '</span>' + '<span class="arrow-xdata">' + object.series[1][object.dataPointIndex] + '</span>' + '<span class="arrow-ydata">' + getNormalView(dateForGraphs[object.dataPointIndex]) + '</span>' + '</div>';
}

function getCustomToolptipBarsTwo(object) {
  function getNormalView(param) {
    var mounth = {
      '01': 'Января',
      '02': 'Февраля',
      '03': 'Марта',
      '04': 'Апреля',
      '05': 'Мая',
      '06': 'Июня',
      '07': 'Июля',
      '08': 'Августа',
      '09': 'Сентября',
      '10': 'Октября',
      '11': 'Ноября',
      '12': 'Декабря'
    },
        mounth2 = {
      '01': 'Январь',
      '02': 'Февраль',
      '03': 'Март',
      '04': 'Апрель',
      '05': 'Май',
      '06': 'Июнь',
      '07': 'Июль',
      '08': 'Август',
      '09': 'Сентябрь',
      '10': 'Октябрь',
      '11': 'Ноябрь',
      '12': 'Декабрь'
    },
        dateArray;
    dateArray = param.split('.');

    if (dateArray.length === 3) {
      return dateArray[0] + ' ' + mounth[dateArray[1]];
    } else {
      return mounth2[dateArray[0]];
    }
  }

  return '<div class="arrow_box">' + '<span class="arrow-xdata">' + object.series[0][object.dataPointIndex] + '</span>' + '<span class="arrow-xdata">' + object.series[1][object.dataPointIndex] + '</span>' + '<span class="arrow-ydata">' + getNormalView(object.w.globals.labels[object.dataPointIndex]) + '</span>' + '</div>';
}

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
      },
      formatter: function formatter(value, timestamp, index) {
        return formatterForBars(value, timestamp, index);
      }
    }
  },
  yaxis: {
    forceNiceScale: true,
    labels: {
      formatter: function formatter(val) {
        return parseInt(val) != val ? '' : val;
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
    enabled: true,
    followCursor: true,
    custom: function custom(_ref) {
      var series = _ref.series,
          seriesIndex = _ref.seriesIndex,
          dataPointIndex = _ref.dataPointIndex,
          w = _ref.w;
      return getCustomToolptipBars({
        series: series,
        seriesIndex: seriesIndex,
        dataPointIndex: dataPointIndex,
        w: w
      });
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    showForNullSeries: true,
    showForZeroSeries: true
  }
};
var review_bars = {
  series: [{
    data: data.review_bars.y
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
    categories: data.review_bars.x,
    labels: {
      show: true,
      style: {
        colors: '#0B0E2D',
        fontSize: '12px',
        fontFamily: 'Montserrat,sans-serif'
      },
      formatter: function formatter(value, timestamp, index) {
        return formatterForBars(value, timestamp, index);
      }
    }
  },
  yaxis: {
    forceNiceScale: true,
    labels: {
      formatter: function formatter(val) {
        return parseInt(val) != val ? '' : val;
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
    enabled: true,
    followCursor: true,
    custom: function custom(_ref2) {
      var series = _ref2.series,
          seriesIndex = _ref2.seriesIndex,
          dataPointIndex = _ref2.dataPointIndex,
          w = _ref2.w;
      return getCustomToolptipBars({
        series: series,
        seriesIndex: seriesIndex,
        dataPointIndex: dataPointIndex,
        w: w
      });
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    showForNullSeries: true,
    showForZeroSeries: true
  }
};
var review_graph = {
  series: [{
    data: data.review_graph.y
  }],
  chart: {
    type: 'line',
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
    curve: 'smooth',
    show: true
  },
  xaxis: {
    categories: data.review_graph.x,
    labels: {
      show: true,
      style: {
        colors: '#0B0E2D',
        fontSize: '12px',
        fontFamily: 'Montserrat,sans-serif'
      },
      formatter: function formatter(value, timestamp, index) {
        return formatterForGraphs(value, timestamp, index);
      }
    }
  },
  yaxis: {
    forceNiceScale: true,
    labels: {
      formatter: function formatter(val) {
        return parseInt(val) != val ? '' : val;
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
    enabled: true,
    followCursor: true,
    custom: function custom(_ref3) {
      var series = _ref3.series,
          seriesIndex = _ref3.seriesIndex,
          dataPointIndex = _ref3.dataPointIndex,
          w = _ref3.w;
      return getCustomToolptipGraph({
        series: series,
        seriesIndex: seriesIndex,
        dataPointIndex: dataPointIndex,
        w: w
      });
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    showForNullSeries: true,
    showForZeroSeries: true
  }
};
var occupancy_bars = {
  series: [{
    data: data.occupancy_bars.y._1
  }, {
    data: data.occupancy_bars.y._2
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
  xaxis: {
    categories: data.occupancy_bars.x,
    labels: {
      show: true,
      style: {
        colors: '#0B0E2D',
        fontSize: '12px',
        fontFamily: 'Montserrat,sans-serif'
      },
      formatter: function formatter(value, timestamp, index) {
        return formatterForBars(value, timestamp, index);
      }
    }
  },
  yaxis: {
    forceNiceScale: true,
    labels: {
      formatter: function formatter(val) {
        return parseInt(val) != val ? '' : val;
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
    enabled: true,
    followCursor: true,
    custom: function custom(_ref4) {
      var series = _ref4.series,
          seriesIndex = _ref4.seriesIndex,
          dataPointIndex = _ref4.dataPointIndex,
          w = _ref4.w;
      return getCustomToolptipBarsTwo({
        series: series,
        seriesIndex: seriesIndex,
        dataPointIndex: dataPointIndex,
        w: w
      });
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    showForNullSeries: true,
    showForZeroSeries: true
  }
};
var occupancy_graph = {
  series: [{
    data: data.occupancy_graph.y._1
  }, {
    data: data.occupancy_graph.y._2
  }],
  chart: {
    type: 'line',
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
    curve: 'smooth',
    show: true
  },
  xaxis: {
    categories: data.occupancy_graph.x,
    labels: {
      show: true,
      style: {
        colors: '#0B0E2D',
        fontSize: '12px',
        fontFamily: 'Montserrat,sans-serif'
      },
      formatter: function formatter(value, timestamp, index) {
        return formatterForGraphs(value, timestamp, index);
      }
    }
  },
  yaxis: {
    forceNiceScale: true,
    labels: {
      formatter: function formatter(val) {
        return parseInt(val) != val ? '' : val;
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
    enabled: true,
    shared: false,
    followCursor: true,
    custom: function custom(_ref5) {
      var series = _ref5.series,
          seriesIndex = _ref5.seriesIndex,
          dataPointIndex = _ref5.dataPointIndex,
          w = _ref5.w;
      return getCustomToolptipGraphTwo({
        series: series,
        seriesIndex: seriesIndex,
        dataPointIndex: dataPointIndex,
        w: w
      });
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    showForNullSeries: true,
    showForZeroSeries: true
  }
};

var nps_bars = _defineProperty({
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
      },
      formatter: function formatter(value, timestamp, index) {
        return formatterForBars(value, timestamp, index);
      }
    }
  },
  yaxis: {
    forceNiceScale: true,
    labels: {
      formatter: function formatter(val) {
        return parseInt(val) != val ? '' : val;
      }
    }
  },
  grid: {
    borderColor: '#90A4AE',
    strokeDashArray: 5
  },
  tooltip: {
    enabled: true,
    followCursor: true,
    custom: function custom(_ref6) {
      var series = _ref6.series,
          seriesIndex = _ref6.seriesIndex,
          dataPointIndex = _ref6.dataPointIndex,
          w = _ref6.w;
      return getCustomToolptipBars({
        series: series,
        seriesIndex: seriesIndex,
        dataPointIndex: dataPointIndex,
        w: w
      });
    }
  }
}, "legend", {
  show: false,
  showForSingleSeries: true,
  showForNullSeries: true,
  showForZeroSeries: true
});

var nps_graph = {
  series: [{
    name: "Desktops2",
    data: data.nps_graph.y
  }],
  chart: {
    height: 246,
    type: 'line',
    zoom: {
      enabled: false
    }
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
      },
      formatter: function formatter(value, timestamp, index) {
        return formatterForGraphs(value, timestamp, index);
      }
    }
  },
  yaxis: {
    forceNiceScale: true,
    labels: {
      formatter: function formatter(val) {
        return parseInt(val) != val ? '' : val;
      }
    }
  },
  grid: {
    borderColor: '#90A4AE',
    strokeDashArray: 5
  },
  tooltip: {
    enabled: true,
    followCursor: true,
    custom: function custom(_ref7) {
      var series = _ref7.series,
          seriesIndex = _ref7.seriesIndex,
          dataPointIndex = _ref7.dataPointIndex,
          w = _ref7.w;
      return getCustomToolptipGraph({
        series: series,
        seriesIndex: seriesIndex,
        dataPointIndex: dataPointIndex,
        w: w
      });
    }
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
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    showForNullSeries: true,
    showForZeroSeries: true
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
  stroke: {
    curve: 'smooth',
    colors: '#FAC700'
  },
  colors: ['#FAC700'],
  xaxis: {
    categories: data.marks_graph.x,
    labels: {
      show: true,
      style: {
        colors: '#0B0E2D',
        fontSize: '12px',
        fontFamily: 'Montserrat,sans-serif',
        cssClass: 'apexcharts-xaxis-label'
      },
      formatter: function formatter(value, timestamp, index) {
        return formatterForGraphs(value, timestamp, index);
      }
    }
  },
  yaxis: {
    forceNiceScale: true,
    labels: {
      formatter: function formatter(val) {
        return parseInt(val) != val ? '' : val;
      }
    }
  },
  grid: {
    borderColor: '#90A4AE',
    strokeDashArray: 5
  },
  tooltip: {
    enabled: true,
    followCursor: true,
    custom: function custom(_ref8) {
      var series = _ref8.series,
          seriesIndex = _ref8.seriesIndex,
          dataPointIndex = _ref8.dataPointIndex,
          w = _ref8.w;
      return getCustomToolptipGraph({
        series: series,
        seriesIndex: seriesIndex,
        dataPointIndex: dataPointIndex,
        w: w
      });
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    showForNullSeries: true,
    showForZeroSeries: true
  }
};
nps_bars = new ApexCharts(document.querySelector("#nps_bars"), nps_bars);
occupancy_graph = new ApexCharts(document.querySelector("#occupancy_graph"), occupancy_graph);
occupancy_bars = new ApexCharts(document.querySelector("#occupancy_bars"), occupancy_bars);
review_bars = new ApexCharts(document.querySelector("#review_bars"), review_bars);
review_graph = new ApexCharts(document.querySelector("#review_graph"), review_graph);
marks_bars = new ApexCharts(document.querySelector("#marks_bars"), marks_bars);
marks_graph = new ApexCharts(document.querySelector("#marks_graph"), marks_graph);
nps_graph = new ApexCharts(document.querySelector("#nps_graph"), nps_graph);
nps_bars.render();
marks_graph.render();
marks_bars.render();
nps_graph.render();
occupancy_graph.render();
review_graph.render();
occupancy_bars.render();
review_bars.render();
//# sourceMappingURL=graphs.js.map
