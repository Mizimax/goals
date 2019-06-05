import { tcasData, khengData } from "./mockApi";

const months = ['Jan','Feb','Mar','April','May','June','July','Aug','Sep','Oct','Nov','Dec']

const colors = {
    physic: '#673AB7',
    math: '#ff9700',
    chem: '#54bd13',
    bio: '#d93030'
}

var options = [];

options[0] = {
    chart: {
        events: {
            load: function () {
                this.yAxis[0].addPlotLine({
                    value: 1000,
                    color: 'red',
                    width: 3,
                    id: 'plot-line-1'
                });
            }
        }
    },
    title: {
        text: 'TCAS Goal'
    },
    xAxis: {
        tickInterval: 1,
        labels: {
            enabled: true,
            formatter: function() { return months[this.value];},
        }
    },
    yAxis: {
        title: {
            text: 'Sales'
        }
    },
    series:
        Object.keys(tcasData).map(key => {
            var value = tcasData[key];
            var serieSum = 0;
            return {
                name: key,
                color: colors[key],
                data: value.map(val=>serieSum+=val)
            };
        })
    ,
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    tooltip: {
        formatter: function(i) {
            return '<b>' + this.series.name + '</b><br />Sales : <b>' + (this.y - this.series.yData[this.key - 1]) +
                '</b><br />Month : <b>' + months[this.x] + '</b><br />Total : <b>' + this.y + '</b>'
        }
    }
}

options[1] = {
    chart: {
        events: {
            load: function () {
                this.yAxis[0].addPlotLine({
                    value: 1000,
                    color: 'red',
                    width: 3,
                    id: 'plot-line-1'
                });
            }
        }
    },
    title: {
        text: 'Kheng Goal'
    },
    series:
        Object.keys(khengData).map(key => {
            var value = khengData[key];
            var serieSum = 0;
            return {
                name: key,
                color: colors[key],
                data: value.map(val=>serieSum+=val)
            };
        })
    ,
    xAxis: {
        tickInterval: 1,
        labels: {
            enabled: true,
            formatter: function() { return months[this.value];},
        }
    },
    yAxis: {
        title: {
            text: 'Sales'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    tooltip: {
        formatter: function(i) {
            return '<b>' + this.series.name + '</b><br />Sales : <b>' + (this.y - this.series.yData[this.key-1]) +
                '</b><br />Month : <b>' + months[this.x] + '</b><br />Total : <b>' + this.y + '</b>'
        }
    }
}

export default options;